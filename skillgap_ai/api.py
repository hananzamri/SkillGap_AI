import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENROUTER_API_KEY"),
    base_url="https://openrouter.ai/api/v1"
)


def analyze_career(resume_text: str, location: str) -> str:
    prompt = f"""
You are a professional career advisor AI.

Analyze the resume below and the candidate's location, then return a structured career report.

Use EXACTLY this format — no JSON, no markdown code blocks, just clean readable text:

---

SkillGap Career Report

Suitable Roles:
- [role 1]
- [role 2]
- [role 3]

Skill Gaps:
- [skill 1]
- [skill 2]
- [skill 3]

Learning Path:
1. [step 1]
2. [step 2]
3. [step 3]
4. [step 4]
5. [step 5]

Job Suggestions ({location}):
- [suggestion 1]
- [suggestion 2]
- [suggestion 3]
- [suggestion 4]

AI Advice:
[2-3 sentences of personalized, encouraging, practical advice]

Job Readiness Score: [number from 0 to 100]

---

Rules:
- Do NOT use JSON or markdown formatting
- Keep each point concise and practical
- Be encouraging but honest
- Tailor job suggestions specifically to {location}
- The readiness score should reflect how job-ready the resume looks

Resume:
{resume_text}
"""

    response = client.chat.completions.create(
        model="anthropic/claude-3.5-haiku",
        max_tokens=600,
        messages=[{"role": "user", "content": prompt}]
    )

    return response.choices[0].message.content