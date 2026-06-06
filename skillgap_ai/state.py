import reflex as rx
import io
import re
import PyPDF2

from skillgap_ai.api import analyze_career


# ── Helpers ──────────────────────────────────────────────────
#Extract Specific Section from AI-generated report

def parse_section(text: str, header: str, next_headers: list[str]) -> list[str]:
    pattern = rf"{re.escape(header)}\s*\n(.*?)(?={'|'.join(re.escape(h) for h in next_headers)}|\Z)"
    match = re.search(pattern, text, re.DOTALL | re.IGNORECASE)
    if not match:
        return []
    block = match.group(1).strip()
    items = []
    for line in block.splitlines():
        line = line.strip()
        line = re.sub(r'^[-*•]\s+', '', line)
        line = re.sub(r'^\d+\.\s+', '', line)
        if line:
            items.append(line)
    return items

#Extract Job readiness score from AI Output
def extract_score(text: str) -> int:
    match = re.search(r'Job Readiness Score[:\s]+(\d+)', text, re.IGNORECASE)
    return min(int(match.group(1)), 100) if match else 0

#Extract AI advice from AI Output
def extract_advice(text: str) -> str:
    match = re.search(
        r'AI Advice:\s*\n(.*?)(?=Job Readiness Score|\Z)',
        text, re.DOTALL | re.IGNORECASE
    )
    return match.group(1).strip() if match else ""

#List of headers from all AI reports
ALL_HEADERS = [
    "Suitable Roles:",
    "Skill Gaps:",
    "Learning Path:",
    "Job Suggestions",
    "AI Advice:",
    "Job Readiness Score:",
]


# ── State ────────────────────────────────────────────────────
# Responsibilities:
# 1. Store uploaded resume information
# 2. Handle PDF upload
# 3. Extract text from PDF
# 4. Send resume to AI analysis service
# 5. Parse AI response
# 6. Store processed results for UI display

class State(rx.State):

    #User input data
    location: str = ""
    resume_text: str = ""
    resume_filename: str = ""

    raw_result: str = ""

    #Processed AI results
    suitable_roles: list[str] = []
    skill_gaps: list[str] = []
    learning_path: list[dict] = [] 
    job_suggestions: list[str] = []
    ai_advice: str = ""
    score: int = 0

    loading: bool = False
    error: str = ""
    analyzed: bool = False

    # ── Upload ────────────────────────────────────────────────

    async def handle_upload(self, files: list[rx.UploadFile]):
        if not files:
            return

        self.error = ""
        file = files[0]
        self.resume_filename = file.filename
        file_data = await file.read()

        try:
            reader = PyPDF2.PdfReader(io.BytesIO(file_data))
            text = "".join(page.extract_text() or "" for page in reader.pages).strip()
            self.resume_text = text
        except Exception as e:
            self.error = f"Could not read PDF: {e}"
            return

        if not self.resume_text:
            self.error = "PDF appears to be empty or unreadable."
            return

        await self.run_analysis()

    # ── AI Analysis ───────────────────────────────────────────

    async def run_analysis(self):
        self.loading = True
        self.analyzed = False
        self.error = ""

        try:
            raw = analyze_career(self.resume_text, self.location)
            self.raw_result = raw
            self._parse_report(raw)
            self.analyzed = True
        except Exception as e:
            self.error = f"Analysis failed: {e}"
        finally:
            self.loading = False

    def _parse_report(self, text: str):
        self.suitable_roles = parse_section(text, "Suitable Roles:", ALL_HEADERS[1:])
        self.skill_gaps     = parse_section(text, "Skill Gaps:",     ALL_HEADERS[2:])
        raw_steps           = parse_section(text, "Learning Path:",  ALL_HEADERS[3:])
        self.learning_path  = [{"num": i + 1, "text": s} for i, s in enumerate(raw_steps)]

        js_match = re.search(
            r'Job Suggestions.*?:\s*\n(.*?)(?=AI Advice:|\Z)',
            text, re.DOTALL | re.IGNORECASE
        )
        if js_match:
            self.job_suggestions = [
                re.sub(r'^[-*•]\s+', '', l.strip())
                for l in js_match.group(1).strip().splitlines()
                if l.strip()
            ]

        self.ai_advice = extract_advice(text)
        self.score     = extract_score(text)

    # ── Setters ───────────────────────────────────────────────

    def set_location(self, value: str):
        self.location = value

    def reset_all(self):
        self.resume_text     = ""
        self.resume_filename = ""
        self.raw_result      = ""
        self.suitable_roles  = []
        self.skill_gaps      = []
        self.learning_path   = []
        self.job_suggestions = []
        self.ai_advice       = ""
        self.score           = 0
        self.loading         = False
        self.error           = ""
        self.analyzed        = False