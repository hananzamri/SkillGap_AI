# ⚡ SkillGap AI — AI-Powered Resume Career Analyzer

> Upload your resume. Get a personalized career report powered by Claude AI — including suitable roles, skill gaps, a step-by-step learning path, job suggestions for your location, and a job readiness score.

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Real-World Problem](#real-world-problem)
3. [Features](#features)
4. [Demo Video](#demo-video)
5. [Screenshots](#screenshots)
6. [System Architecture](#system-architecture)
7. [Project Structure](#project-structure)
8. [Tech Stack & Libraries](#tech-stack--libraries)
9. [Input](#input)
10. [Output](#output)
11. [Evaluation Metrics](#evaluation-metrics)
12. [AI Model & Prompt Design](#ai-model--prompt-design)
13. [Prerequisites](#prerequisites)
14. [Installation & Setup](#installation--setup)
15. [Environment Variables](#environment-variables)
16. [How to Run](#how-to-run)
17. [How It Works — Step by Step](#how-it-works--step-by-step)
18. [State Management](#state-management)
19. [UI Components](#ui-components)
20. [Error Handling](#error-handling)
21. [Limitations](#limitations)
22. [Future Improvements](#future-improvements)
23. [Contributing](#contributing)
24. [License](#license)

---

## Overview

**SkillGap AI** is a full-stack AI web application that analyzes a user's resume PDF and generates a comprehensive, personalized career report. Built with Reflex (a Python-based full-stack framework) and powered by Claude 3.5 Haiku via OpenRouter, the app helps fresh graduates, career changers, and job seekers understand exactly where they stand — and what to do next.

The system reads the uploaded resume, extracts the text, sends it to an LLM with a structured prompt, parses the AI response into sections, and renders a clean, interactive dashboard — all without the user needing to understand anything about AI or APIs.

| | |
|---|---|
| **Framework** | Reflex (Python full-stack) |
| **AI Model** | Claude 3.5 Haiku via OpenRouter |
| **Target Users** | Students, fresh graduates, career changers |
| **Input** | Resume PDF + location |
| **Output** | Career report with roles, skill gaps, learning path, score |

---

## Real-World Problem

### The Problem

Every year, millions of graduates and job seekers enter the job market without knowing:

- **What roles they are actually qualified for** based on their real resume content
- **What specific skills they are missing** compared to industry requirements
- **How to prioritize their learning** to become job-ready as fast as possible
- **What jobs are realistic for them** in their specific city or country

Traditional career counseling is expensive, often inaccessible, and not available 24/7. Most people submit dozens of applications without understanding why they keep getting rejected — they don't know their own skill gaps.

### The Solution

SkillGap AI solves this by acting as a **24/7 AI career counselor** that reads your actual resume (not a form you filled in) and gives you a professional-grade, personalized report in under 30 seconds — completely free.

---

## Features

| Feature | Description |
|---|---|
| 📄 **PDF Resume Upload** | Drag and drop or click to upload any PDF resume |
| 🤖 **AI Career Analysis** | Claude 3.5 Haiku analyzes resume content and location |
| 👔 **Suitable Roles** | 3+ job roles you are currently qualified for |
| 🧠 **Skill Gaps** | Specific missing skills that are holding you back |
| 📈 **Learning Path** | 5-step ordered action plan to become job-ready |
| 📍 **Location-Based Job Suggestions** | Job types tailored to your specific city/country |
| 💡 **AI Advice** | 2-3 sentences of personalized, encouraging career advice |
| 🎯 **Job Readiness Score** | A score from 0–100 showing how job-ready your resume is |
| 🔄 **Reset & Re-analyze** | Instantly analyze a new resume with one click |
| ⚡ **Real-time Loading State** | Spinner and status message during analysis |
| 🚨 **Error Handling** | Clear error messages for unreadable or empty PDFs |

---

## Demo Video


---

## Screenshots


### Upload Screen
```
screenshots/01_upload.png
```
The initial screen shows the location input and the PDF upload zone. Users type their city and drag in their resume.

### Loading / Analysis State
```
screenshots/02_loading.png
```
While the AI is processing the resume, a spinner and "Analyzing your resume…" message is shown.

### Job Readiness Score + AI Advice
```
screenshots/03_score_advice.png
```
The score ring (0–100%) sits beside the personalized AI advice card.

### Suitable Roles + Skill Gaps
```
screenshots/04_roles_gaps.png
```
Two side-by-side cards showing the 3 most suitable job roles and the top skill gaps.

### Learning Path
```
screenshots/05_learning_path.png
```
A numbered 5-step learning path showing exactly what to study next.

### Job Suggestions
```
screenshots/06_job_suggestions.png
```
Location-specific job suggestions tailored to the city the user entered.

---

## System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     USER BROWSER                        │
│                                                         │
│   ┌─────────────┐        ┌──────────────────────────┐  │
│   │  Location   │        │    PDF Resume Upload     │  │
│   │   Input     │        │   (drag & drop / click)  │  │
│   └──────┬──────┘        └────────────┬─────────────┘  │
│          │                            │                 │
└──────────┼────────────────────────────┼─────────────────┘
           │                            │
           ▼                            ▼
┌─────────────────────────────────────────────────────────┐
│                  REFLEX BACKEND (Python)                 │
│                                                         │
│   state.py                                              │
│   ┌──────────────────────────────────────────────────┐  │
│   │  handle_upload()                                 │  │
│   │    → PyPDF2 extracts text from PDF               │  │
│   │                                                  │  │
│   │  run_analysis()                                  │  │
│   │    → calls analyze_career() in api.py            │  │
│   │                                                  │  │
│   │  _parse_report()                                 │  │
│   │    → regex parses AI response into sections      │  │
│   │    → updates state variables                     │  │
│   └──────────────────────────────────────────────────┘  │
│                          │                              │
└──────────────────────────┼──────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                   api.py                                │
│                                                         │
│   analyze_career(resume_text, location)                 │
│   → OpenRouter API (Claude 3.5 Haiku)                   │
│   → structured prompt → structured text response        │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│              OpenRouter / Claude 3.5 Haiku              │
│                                                         │
│   Returns plain-text structured career report           │
│   with: Roles, Gaps, Path, Suggestions, Advice, Score   │
└─────────────────────────────────────────────────────────┘
```

---

## Project Structure

```
skillgap_ai/
│
├── skillgap_ai/                  # Main app package
│   ├── __init__.py               # Package initializer
│   ├── skillgap_ai.py            # UI components and page layout
│   ├── state.py                  # App state, PDF parsing, AI orchestration
│   └── api.py                    # OpenRouter API call and prompt
│
├── assets/                       # Static assets (images, fonts)
├── .web/                         # Reflex build output (auto-generated)
├── .env                          # API keys (NOT committed to git)
├── requirements.txt              # Python dependencies
├── rxconfig.py                   # Reflex configuration
└── README.md                     # This file
```

---

## Tech Stack & Libraries

### Core Framework

| Library | Version | Purpose |
|---|---|---|
| [Reflex](https://reflex.dev) | `>=0.6.0` | Full-stack Python web framework — handles both frontend (React-based UI) and backend (Python state management) in pure Python |

### AI / API

| Library | Version | Purpose |
|---|---|---|
| [openai](https://pypi.org/project/openai/) | `>=1.0.0` | OpenAI-compatible Python SDK used to call the OpenRouter API endpoint |
| [OpenRouter](https://openrouter.ai) | — | API gateway that routes to Claude 3.5 Haiku (and other models) with a single API key |
| Claude 3.5 Haiku | `anthropic/claude-3.5-haiku` | The underlying LLM — fast, cost-efficient, and highly capable for structured text generation |

### PDF Processing

| Library | Version | Purpose |
|---|---|---|
| [PyPDF2](https://pypi.org/project/PyPDF2/) | `>=3.0.0` | Extracts plain text from uploaded PDF resume files page by page |

### Utilities

| Library | Version | Purpose |
|---|---|---|
| [python-dotenv](https://pypi.org/project/python-dotenv/) | `>=1.0.0` | Loads `OPENROUTER_API_KEY` from `.env` file into environment variables |
| [requests](https://pypi.org/project/requests/) | `>=2.31.0` | HTTP requests library (available for future API integrations) |
| `re` (stdlib) | — | Python built-in regex used to parse AI response sections |
| `io` (stdlib) | — | Python built-in used to handle in-memory PDF byte streams |

### Frontend (handled by Reflex internally)

| Technology | Purpose |
|---|---|
| React | Reflex compiles Python UI components to React |
| DM Sans (Google Fonts) | Typography — clean, modern sans-serif font |
| CSS Custom Properties | Used for the conic-gradient score ring animation |

---

## Input

### What the user provides

| Input | Type | Required | Description |
|---|---|---|---|
| **Location** | Text string | Yes | City or country (e.g. "Kuala Lumpur", "Singapore", "Seoul"). Used to tailor job suggestions and advice |
| **Resume** | PDF file | Yes | The user's resume/CV in PDF format. Text is extracted automatically |

### Resume PDF Requirements

- Must be a **text-based PDF** (not a scanned image PDF — those contain no extractable text)
- Any language is supported, but results are best with English resumes
- File size: no hard limit, but 1–5 MB is typical for resumes
- Multi-page resumes are fully supported — all pages are extracted and analyzed
- Common resume builders (Canva, Word, Google Docs → Export as PDF) all work

### What happens to your data

- The resume text is held **in memory only** during the session
- It is sent to OpenRouter's API for AI analysis
- Nothing is stored permanently in a database
- Closing or refreshing the page clears all data

---

## Output

The AI generates a structured career report parsed into 6 distinct sections:

### 1. Suitable Roles
3+ job titles the candidate is currently qualified to apply for, based on their actual resume content.

**Example:**
```
- Junior Data Analyst
- Python Developer (Entry Level)
- Business Intelligence Intern
```

### 2. Skill Gaps
Specific technical or soft skills that are missing from the resume and are commonly required for the suitable roles.

**Example:**
```
- SQL (data querying)
- Docker (containerization)
- Power BI or Tableau (data visualization)
```

### 3. Learning Path
An ordered, numbered 5-step action plan showing exactly what to learn and in what sequence to become job-ready as efficiently as possible.

**Example:**
```
1. Strengthen core Python — focus on pandas and numpy
2. Learn SQL fundamentals — complete a free course on Mode or SQLZoo
3. Build 2 portfolio projects (one data analysis, one API)
4. Learn basic cloud concepts — AWS or GCP free tier
5. Get one certification — Google Data Analytics or AWS Cloud Practitioner
```

### 4. Location-Based Job Suggestions
4+ specific job types and search terms tailored to the city/country the user entered. Reflects the local job market reality.

**Example (Kuala Lumpur):**
```
- Junior Data Analyst at local banks (Maybank, CIMB tech teams)
- Python Developer at Malaysian tech startups
- IT Graduate Trainee programs (large corporations)
- Remote junior roles via LinkedIn Malaysia
```

### 5. AI Advice
2–3 sentences of personalized, encouraging, and practical advice addressing the specific candidate's situation.

**Example:**
```
Your backend fundamentals are solid and your internship experience sets you apart from many fresh graduates. 
Focus on filling the SQL and cloud gaps first — these are the two most-asked skills in KL tech interviews right now. 
Apply to at least 3 roles per week while you learn; real interviews will accelerate your growth faster than any course.
```

### 6. Job Readiness Score
A score from **0 to 100** representing how job-ready the resume appears to be for entry-to-mid-level roles.

| Score Range | Interpretation |
|---|---|
| 0 – 30 | Early stage — significant skill and experience gaps |
| 31 – 55 | Developing — some relevant experience, key gaps remain |
| 56 – 74 | Getting there — good foundation, a few targeted improvements needed |
| 75 – 89 | Strong — competitive candidate, polish and apply |
| 90 – 100 | Job-ready — highly competitive, focus on targeting the right roles |

---

## Evaluation Metrics

Since this is an AI-powered NLP application, evaluation is multi-dimensional:

### 1. Output Quality Metrics

| Metric | How It Is Measured | Target |
|---|---|---|
| **Section Completeness** | All 6 sections present in AI response | 100% of responses |
| **Parse Success Rate** | Regex successfully extracts all sections | ≥ 95% |
| **Score Validity** | Score is a valid integer 0–100 | 100% |
| **Location Relevance** | Job suggestions mention the input location | Manually reviewed |
| **Role Relevance** | Roles match resume skills (manual spot-check) | Subjectively assessed |

### 2. System Performance Metrics

| Metric | Description | Typical Value |
|---|---|---|
| **PDF Parse Time** | Time to extract text from PDF | < 1 second |
| **AI Response Time** | Time for Claude API to return | 3–8 seconds |
| **Total Analysis Time** | Upload → report displayed | 5–12 seconds |
| **Token Usage** | Tokens consumed per analysis | ~800–1,200 tokens |

### 3. User Experience Metrics

| Metric | Description |
|---|---|
| **Error Rate** | Percentage of uploads that fail (empty PDFs, corrupt files) |
| **Retry Rate** | How often users click "Analyze Another Resume" |
| **Session Completion** | Users who see the full report after uploading |

### 4. LLM Evaluation Criteria (Manual Assessment)

When evaluating the quality of AI responses, assess:

- **Specificity**: Are the skill gaps and roles specific to the resume, or generic?
- **Actionability**: Is the learning path realistic and ordered correctly?
- **Location Accuracy**: Do the job suggestions reflect the actual job market in that city?
- **Encouragement**: Does the AI advice motivate without being dishonest?
- **Score Calibration**: Does the score feel accurate given the resume quality?

### 5. Prompt Engineering Evaluation

The prompt was evaluated across 3 iterations:

| Version | Issue | Fix Applied |
|---|---|---|
| v1 | AI returned JSON despite instructions | Added "Do NOT use JSON" rule explicitly |
| v2 | Score sometimes missing or out of range | Added explicit "number from 0 to 100" constraint |
| v3 (current) | Inconsistent section headers | Added "Use EXACTLY this format" with template |

---

## AI Model & Prompt Design

### Model Choice: Claude 3.5 Haiku

Claude 3.5 Haiku was selected over alternatives for the following reasons:

| Factor | Claude 3.5 Haiku | GPT-4o Mini | Gemini Flash |
|---|---|---|---|
| Instruction following | Excellent | Good | Good |
| Structured output | Very consistent | Moderate | Moderate |
| Cost | Very low | Low | Very low |
| Speed | Fast | Fast | Very fast |
| Context window | 200K tokens | 128K tokens | 1M tokens |

### Prompt Strategy

The prompt uses a **strict format template** approach rather than asking for free-form output or JSON. This was a deliberate choice:

- JSON requires parsing and can fail with malformed responses
- Free-form text is harder to split into sections
- A fixed text template is easy to parse with regex and is human-readable

The prompt provides:
1. A clear role definition ("You are a professional career advisor AI")
2. An exact output template with placeholders
3. Explicit rules to prevent JSON, markdown, or deviation
4. The location injected directly into the prompt so job suggestions are grounded

### Parsing Strategy

The AI response is parsed using Python `re` (regex) in `state.py`:

```python
def parse_section(text, header, next_headers):
    # Finds the content between one section header and the next
    pattern = rf"{re.escape(header)}\s*\n(.*?)(?=next_header|\Z)"
    match = re.search(pattern, text, re.DOTALL | re.IGNORECASE)
    # Strips bullet/number markers from each line
```

Each section is delimited by the next section's header, making the regex robust even if the AI adds blank lines or minor formatting variation.

---

## Prerequisites

Before installing, make sure you have:

- **Python 3.11 or higher** (Python 3.14 is confirmed working)
- **pip** (comes with Python)
- **Node.js 18+** (required by Reflex to build the frontend)
- An **OpenRouter account** with an API key — sign up free at [openrouter.ai](https://openrouter.ai)
- A **terminal** (Terminal on Mac, Command Prompt / PowerShell on Windows)

### Check your versions

```bash
python --version    # Should be 3.11+
node --version      # Should be 18+
pip --version
```

---

## Installation & Setup

### Step 1 — Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/skillgap_ai.git
cd skillgap_ai
```

### Step 2 — Create a virtual environment

```bash
# macOS / Linux
python3 -m venv venv
source venv/bin/activate

# Windows
python -m venv venv
venv\Scripts\activate
```

You should see `(venv)` in your terminal prompt.

### Step 3 — Install Python dependencies

```bash
pip install -r requirements.txt
```

This installs: `reflex`, `openai`, `python-dotenv`, `PyPDF2`, `requests`.

### Step 4 — Set up environment variables

Create a `.env` file in the project root:

```bash
touch .env         # macOS/Linux
# Windows: create a new file named .env manually
```

Add your API key (see [Environment Variables](#environment-variables) below).

### Step 5 — Initialize Reflex

```bash
reflex init
```

This creates the `.web` folder and installs frontend dependencies. Only needed once.

---

## Environment Variables

Create a `.env` file in the root of the project with the following:

```env
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

### How to get your OpenRouter API key

1. Go to [https://openrouter.ai](https://openrouter.ai)
2. Click **Sign Up** (free, no credit card required for free tier models)
3. Go to **Keys** in your dashboard
4. Click **Create Key**
5. Copy the key and paste it into your `.env` file

### Security

- **Never commit your `.env` file to git**
- Add `.env` to your `.gitignore`:
  ```
  .env
  .web/
  __pycache__/
  venv/
  ```

---

## How to Run

### Development mode (with hot reload)

```bash
# Make sure your virtual environment is active
source venv/bin/activate   # macOS/Linux
# or
venv\Scripts\activate      # Windows

# Start the app
reflex run
```

The app will open automatically at **http://localhost:3000**

The backend API runs on port **8000** (managed by Reflex internally).

### What to expect on first run

```
─── Starting Reflex App ────────────────────────────────
Compiling: ████████████████████████████████  100%  13/13
─── App running at: http://localhost:3000 ────────────
```

The first run takes 30–60 seconds as Reflex compiles the frontend. Subsequent runs are much faster.

### Production mode

```bash
reflex run --env prod
```

---

## How It Works — Step by Step

Here is the complete flow from user action to report display:

```
1. User types their location (e.g. "Kuala Lumpur")
   └─► State.location is updated via on_change

2. User uploads a PDF resume
   └─► State.handle_upload() is triggered

3. PyPDF2 reads the PDF bytes
   └─► All pages extracted → concatenated into resume_text string

4. State.run_analysis() is called
   └─► State.loading = True (spinner appears)
   └─► analyze_career(resume_text, location) called in api.py

5. api.py builds the structured prompt
   └─► Injects resume_text and location into the prompt template
   └─► Calls OpenRouter API → Claude 3.5 Haiku

6. Claude returns a structured plain-text report
   └─► Raw text stored in State.raw_result

7. State._parse_report() runs regex parsing
   └─► suitable_roles extracted → list[str]
   └─► skill_gaps extracted → list[str]
   └─► learning_path extracted → list[dict] with num and text
   └─► job_suggestions extracted → list[str]
   └─► ai_advice extracted → str
   └─► score extracted → int

8. State.analyzed = True, State.loading = False
   └─► UI re-renders with report_panel() visible

9. User sees the complete career report dashboard
   └─► Score ring, advice, roles, gaps, path, suggestions

10. User clicks "↩ Analyze Another Resume"
    └─► State.reset_all() clears everything
    └─► Upload zone reappears
```

---

## State Management

Reflex uses a reactive state model. All application data lives in `State(rx.State)` in `state.py`.

### State Variables

| Variable | Type | Default | Description |
|---|---|---|---|
| `location` | `str` | `"Kuala Lumpur"` | User's entered location |
| `resume_text` | `str` | `""` | Extracted plain text from PDF |
| `resume_filename` | `str` | `""` | Original filename of uploaded PDF |
| `raw_result` | `str` | `""` | Full raw AI response text |
| `suitable_roles` | `list[str]` | `[]` | Parsed list of suitable job roles |
| `skill_gaps` | `list[str]` | `[]` | Parsed list of skill gaps |
| `learning_path` | `list[dict]` | `[]` | `[{"num": 1, "text": "..."}, ...]` |
| `job_suggestions` | `list[str]` | `[]` | Location-specific job suggestions |
| `ai_advice` | `str` | `""` | Personalized AI advice paragraph |
| `score` | `int` | `0` | Job readiness score 0–100 |
| `loading` | `bool` | `False` | True while AI is processing |
| `error` | `str` | `""` | Error message if something fails |
| `analyzed` | `bool` | `False` | True when report is ready to display |

### State Methods

| Method | Trigger | Description |
|---|---|---|
| `handle_upload()` | PDF dropped/selected | Reads file, extracts text, calls run_analysis |
| `run_analysis()` | After upload | Calls AI API, parses result, sets analyzed=True |
| `_parse_report()` | Inside run_analysis | Regex parsing of all 6 report sections |
| `set_location()` | Location input change | Updates location var |
| `reset_all()` | Reset button click | Clears all state, shows upload zone again |

---

## UI Components

All UI is defined in `skillgap_ai.py` using Reflex's Python component API.

| Component | Function | Description |
|---|---|---|
| `index()` | Main page | Root layout with nav, location input, upload, report |
| `upload_zone()` | Upload area | Dashed border dropzone, hides after analysis |
| `loading_state()` | Loading UI | Spinner shown while AI processes |
| `report_panel()` | Full report | Conditionally shown when `State.analyzed == True` |
| `score_ring()` | Score display | CSS conic-gradient ring showing job readiness % |
| `section_card()` | Reusable card | Icon + title + divider + body card component |
| `bullet_item()` | List item | Colored dot + text for roles, gaps, suggestions |
| `numbered_item()` | Numbered step | Circle number badge + text for learning path |

### Design System

| Token | Value | Usage |
|---|---|---|
| `PRIMARY` | `#2563EB` | Blue — roles, links, focus states |
| `ACCENT` | `#7C3AED` | Violet — learning path numbers |
| `SUCCESS` | `#059669` | Green — job suggestions |
| `WARN` | `#D97706` | Amber — skill gaps |
| `DANGER` | `#DC2626` | Red — error messages |
| `PAGE_BG` | `#F8FAFC` | Light gray page background |
| `CARD_BG` | `#FFFFFF` | White card backgrounds |
| Font | DM Sans | Google Fonts — clean, modern |

---

## Error Handling

| Error Scenario | How It's Handled |
|---|---|
| User uploads a non-PDF file | `accept={"application/pdf": [".pdf"]}` restricts upload |
| PDF has no extractable text (scanned image) | `error = "PDF appears to be empty or unreadable."` shown |
| PyPDF2 fails to parse | `except Exception as e: self.error = f"Could not read PDF: {e}"` |
| OpenRouter API fails or key is wrong | `except Exception as e: self.error = f"Analysis failed: {e}"` |
| AI response missing a section | `parse_section()` returns `[]` (empty list), section renders empty |
| Score not found in AI response | `extract_score()` returns `0` as fallback |

---

## Limitations

- **Scanned PDFs not supported** — PDFs that are images (scanned documents) cannot have text extracted by PyPDF2. Users must use digitally-created PDFs.
- **English resumes recommended** — The prompt and parsing are optimized for English. Other languages may produce lower-quality results.
- **AI hallucination risk** — Like all LLMs, Claude may occasionally give generic or inaccurate advice. Results should be treated as guidance, not guaranteed fact.
- **No authentication** — There is no login system; this is a single-user demo app.
- **No history** — Previous analyses are not saved. Each session starts fresh.
- **API cost** — Each analysis consumes ~800–1,200 tokens. On OpenRouter's free tier, there are usage limits.
- **Location is text-only** — The location field is just a string passed to the AI; it does not use geolocation or maps APIs.

---

## Future Improvements

- [ ] **Export to PDF** — Allow users to download their career report as a formatted PDF
- [ ] **Multiple resume comparison** — Compare two versions of a resume side by side
- [ ] **Job board integration** — Connect to a live job API (JSearch / Adzuna) to show real job listings matching the analysis
- [ ] **Resume scoring history** — Save past analyses to a database so users can track improvement over time
- [ ] **Cover letter generator** — Auto-generate a tailored cover letter for a selected role
- [ ] **LinkedIn profile analyzer** — Accept a LinkedIn URL in addition to PDF
- [ ] **Multi-language support** — Support Malay, Mandarin, and other languages
- [ ] **User accounts** — Login system so users can save and revisit reports
- [ ] **Admin dashboard** — Track usage, popular locations, common skill gaps across all users
- [ ] **Mobile app** — Wrap in a mobile-friendly view or React Native app

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test that `reflex run` starts without errors
5. Commit: `git commit -m "Add: your feature description"`
6. Push: `git push origin feature/your-feature-name`
7. Open a Pull Request

### Code Style

- Follow existing naming conventions (snake_case for Python, descriptive variable names)
- Keep UI components as small, single-purpose functions
- Add comments for any non-obvious logic
- Test with at least 2-3 different resume PDFs before submitting

---

## License

This project is built for educational and demonstration purposes.

```
MIT License

Copyright (c) 2024 SkillGap AI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## Acknowledgements

- [Reflex](https://reflex.dev) — for making full-stack Python web apps possible
- [Anthropic](https://anthropic.com) — for building Claude, the AI model powering the analysis
- [OpenRouter](https://openrouter.ai) — for providing unified API access to multiple LLMs
- [PyPDF2](https://pypdf2.readthedocs.io) — for the PDF text extraction library
- [DM Sans](https://fonts.google.com/specimen/DM+Sans) — for the clean, modern typeface

---