import reflex as rx
from skillgap_ai.state import State

# ── Design tokens ─────────────────────────────────────────────
PRIMARY      = "#2563EB"
PRIMARY_SOFT = "#EFF6FF"
ACCENT       = "#7C3AED"
SUCCESS      = "#059669"
WARN         = "#D97706"
DANGER       = "#DC2626"
TEXT_MAIN    = "#0F172A"
TEXT_MUTED   = "#64748B"
BORDER       = "#E2E8F0"
CARD_BG      = "#FFFFFF"
PAGE_BG      = "#F8FAFC"
TAG_BG       = "#F1F5F9"


# ── Small helpers ─────────────────────────────────────────────

def section_card(icon: str, title, accent: str, body: rx.Component) -> rx.Component:
    return rx.box(
        rx.vstack(
            rx.hstack(
                rx.cond(icon != "",rx.text(icon, font_size="20px"),),
                rx.text(title, font_weight="700", font_size="15px",
                        color=TEXT_MAIN, letter_spacing="-0.01em"),
                align="center", spacing="2",
            ),
            rx.divider(border_color=BORDER, margin_y="2px"),
            body,
            align="start", spacing="3", width="100%",
        ),
        background=CARD_BG,
        border=f"1.5px solid {BORDER}",
        border_radius="14px",
        padding="22px 24px",
        box_shadow="0 1px 4px rgba(0,0,0,0.06)",
        width="100%",
        _hover={"box_shadow": "0 4px 16px rgba(0,0,0,0.10)", "border_color": accent},
        transition="box-shadow 0.2s, border-color 0.2s",
    )


def bullet_item(text, color: str = PRIMARY) -> rx.Component:
    return rx.hstack(
        rx.box(width="7px", height="7px", background=color,
               border_radius="50%", flex_shrink="0", margin_top="6px"),
        rx.text(text, color=TEXT_MAIN, font_size="14px", line_height="1.6"),
        align="start", spacing="2",
    )


def numbered_item(num, text) -> rx.Component:
    return rx.hstack(
        rx.center(
            rx.text(num.to_string(), font_size="11px", font_weight="700", color=CARD_BG),
            background=ACCENT, border_radius="50%",
            width="22px", height="22px", flex_shrink="0",
        ),
        rx.text(text, color=TEXT_MAIN, font_size="14px", line_height="1.6"),
        align="center", spacing="3",
    )


# ── Score ring ────────────────────────────────────────────────

def score_ring() -> rx.Component:
    return rx.center(
        rx.box(
            rx.vstack(
                rx.text(
                    State.score.to_string() + "%",
                    font_size="32px", font_weight="800",
                    color=PRIMARY, letter_spacing="-0.04em",
                ),
                rx.text(
                    "Job Readiness", font_size="11px", font_weight="600",
                    color=TEXT_MUTED, letter_spacing="0.06em",
                    text_transform="uppercase",
                ),
                spacing="0", align="center",
            ),
            background=(
                f"conic-gradient(from 0deg, {PRIMARY} calc(var(--score)*1%), "
                f"{BORDER} 0%)"
            ),
            border_radius="50%",
            width="150px", height="150px",
            display="flex", align_items="center", justify_content="center",
            style={"--score": State.score},
            position="relative",
            _before={
                "content": '""', "position": "absolute",
                "border_radius": "50%", "background": CARD_BG,
                "width": "110px", "height": "110px",
            },
        ),
    )


# ── Upload zone ───────────────────────────────────────────────

def upload_zone() -> rx.Component:
    return rx.upload(
        rx.vstack(
            rx.text("Drop your resume PDF here", font_weight="600",
                    color=TEXT_MAIN, font_size="15px"),
            rx.text("or click to browse", color=TEXT_MUTED, font_size="13px"),
            spacing="1", align="center",
        ),
        accept={"application/pdf": [".pdf"]},
        on_drop=State.handle_upload,
        border=f"2px dashed {PRIMARY}",
        border_radius="14px",
        padding="40px 24px",
        background=PRIMARY_SOFT,
        width="100%",
        cursor="pointer",
        _hover={"background": "#DBEAFE"},
        transition="background 0.2s",
    )


# ── Report panel ──────────────────────────────────────────────

def report_panel() -> rx.Component:
    return rx.cond(
        State.analyzed,
        rx.vstack(

            # score + advice
            rx.hstack(
                rx.box(
                    rx.vstack(score_ring(), align="center", spacing="2"),
                    background=CARD_BG,
                    border=f"1.5px solid {BORDER}",
                    border_radius="14px",
                    padding="24px",
                    box_shadow="0 1px 4px rgba(0,0,0,0.06)",
                    min_width="180px",
                ),
                rx.box(
                    rx.vstack(
                        rx.text("AI Advice", font_weight="700",
                                font_size="15px", color=TEXT_MAIN),
                        rx.divider(border_color=BORDER),
                        rx.text(State.ai_advice, color=TEXT_MAIN,
                                font_size="14px", line_height="1.75"),
                        align="start", spacing="3", width="100%",
                    ),
                    background=CARD_BG,
                    border=f"1.5px solid {BORDER}",
                    border_radius="14px",
                    padding="22px 24px",
                    box_shadow="0 1px 4px rgba(0,0,0,0.06)",
                    flex="1",
                    _hover={"box_shadow": "0 4px 16px rgba(0,0,0,0.10)"},
                    transition="box-shadow 0.2s",
                ),
                spacing="4", width="100%", align="stretch", wrap="wrap",
            ),

            # suitable roles + skill gaps
            rx.hstack(
                section_card(
                    "", "Suitable Roles", PRIMARY,
                    rx.vstack(
                        rx.foreach(State.suitable_roles,
                                   lambda r: bullet_item(r, PRIMARY)),
                        spacing="2", width="100%",
                    ),
                ),
                section_card(
                    "", "Skill Gaps", WARN,
                    rx.vstack(
                        rx.foreach(State.skill_gaps,
                                   lambda s: bullet_item(s, WARN)),
                        spacing="2", width="100%",
                    ),
                ),
                spacing="4", width="100%", align="stretch", wrap="wrap",
            ),

            # learning path
            section_card(
                "", "Learning Path", ACCENT,
                rx.vstack(
                    rx.foreach(
                        State.learning_path,
                        lambda step: numbered_item(step["num"], step["text"]),
                    ),
                    spacing="2", width="100%",
                ),
            ),

            # AI job suggestions
            rx.box(
                rx.vstack(
                    rx.hstack(
                        rx.text(
                            "AI Job Suggestions · ", State.location,
                            font_weight="700", font_size="15px",
                            color=TEXT_MAIN, letter_spacing="-0.01em",
                        ),
                        align="center", spacing="2",
                    ),
                    rx.divider(border_color=BORDER, margin_y="2px"),
                    rx.vstack(
                        rx.foreach(State.job_suggestions,
                                   lambda j: bullet_item(j, SUCCESS)),
                        spacing="2", width="100%",
                    ),
                    align="start", spacing="3", width="100%",
                ),
                background=CARD_BG,
                border=f"1.5px solid {BORDER}",
                border_radius="14px",
                padding="22px 24px",
                box_shadow="0 1px 4px rgba(0,0,0,0.06)",
                width="100%",
                _hover={"box_shadow": "0 4px 16px rgba(0,0,0,0.10)",
                        "border_color": SUCCESS},
                transition="box-shadow 0.2s, border-color 0.2s",
            ),

            # reset button
            rx.button(
                "↩ Analyze Another Resume",
                on_click=State.reset_all,
                background="transparent", color=TEXT_MUTED,
                border=f"1.5px solid {BORDER}",
                border_radius="8px", padding="8px 20px",
                font_size="13px", cursor="pointer",
                _hover={"color": TEXT_MAIN, "border_color": TEXT_MAIN},
            ),

            spacing="4", width="100%", align="start",
        ),
    )


# ── Loading ───────────────────────────────────────────────────

def loading_state() -> rx.Component:
    return rx.cond(
        State.loading,
        rx.center(
            rx.vstack(
                rx.spinner(color=PRIMARY, size="3"),
                rx.text(
                    "Analyzing your resume...",
                    font_size="15px",
                    font_weight="600",
                    color=TEXT_MAIN,
                ),
                rx.text(
                    "This may take a few seconds. Please wait.",
                    font_size="13px",
                    color=TEXT_MUTED,
                ),
                align="center",
                spacing="2",
            ),
            padding="60px",
        ),
    )

# ── Uploaded Card ───────────────────────────────────────────────────
def uploaded_card() -> rx.Component:
    return rx.cond(
        State.file_uploaded,
        rx.box(
            rx.hstack(
                rx.vstack(
                    rx.text(State.resume_filename, font_weight="600", font_size="14px"),
                    rx.text("Ready to analyze", font_size="12px", color=TEXT_MUTED),
                    spacing="1",
                    align="start",
                ),
                rx.spacer(),
                rx.button(
                    "Remove",
                    on_click=State.reset_all,
                    background="transparent",
                    color=TEXT_MUTED,
                    border=f"1px solid {BORDER}",
                    font_size="12px",
                ),
                align="center",
            ),
            padding="14px",
            border=f"1.5px solid {PRIMARY}",
            border_radius="12px",
            background=PRIMARY_SOFT,
            width="100%",
        ),
    )

# ── Analyze Button ─────────────────────────────────────────────────
def analyze_button() -> rx.Component:
    return rx.cond(
        State.file_uploaded & ~State.loading,
        rx.button(
            "Analyze Resume",
            on_click=State.start_analysis,
            background=PRIMARY,
            color="white",
            padding="10px 18px",
            border_radius="10px",
            width="100%",
            _hover={"background": "#1D4ED8"},
        ),
    )


# ── Main page ─────────────────────────────────────────────────

def index() -> rx.Component:
    return rx.box(
        rx.center(
            rx.vstack(

                # nav
                rx.hstack(
                    rx.text("SkillGap AI", font_size="20px", font_weight="800",
                            color=TEXT_MAIN, letter_spacing="-0.03em"),
                    rx.text("Career Analyzer", color=TEXT_MUTED,
                            font_size="13px", font_weight="500"),
                    justify="between", width="100%",
                    padding_bottom="20px",
                    border_bottom=f"1px solid {BORDER}",
                    margin_bottom="8px",
                ),

                # location input
                rx.box(
                    rx.text("Location", font_size="12px", font_weight="600",
                            color=TEXT_MUTED, margin_bottom="6px",
                            letter_spacing="0.04em", text_transform="uppercase"),
                    rx.input(
                        placeholder="e.g. Kuala Lumpur, Singapore, Seoul",
                        value=State.location,
                        on_change=State.set_location,
                        border=f"1.5px solid {BORDER}",
                        border_radius="8px", padding="10px 14px",
                        font_size="14px", width="100%",
                        _focus={"border_color": PRIMARY, "outline": "none",
                                "box_shadow": f"0 0 0 3px {PRIMARY_SOFT}"},
                    ),
                    width="100%",
                ),
                rx.cond(
                    ~State.analyzed & ~State.loading,
                    rx.vstack(
                        upload_zone(),

                        uploaded_card(),

                        analyze_button(),

                        rx.cond(
                            State.error != "",
                            rx.text(
                                State.error,
                                color=DANGER,
                                font_size="13px",
                                padding="8px 12px",
                                background="#FEF2F2",
                                border_radius="6px",
                                width="100%",
                            ),
                        ),
                        spacing="3",
                        width="100%",
                    ),
                ),

                rx.cond(
                    State.loading,
                    loading_state(),
                    rx.cond(
                        State.analyzed,
                        report_panel(),
                        None
                    )
                ),

                spacing="5", width="100%", max_width="820px",
                padding="32px 24px",
            ),
            width="100%", min_height="100vh",
            background=PAGE_BG, align="start",
        ),
        background=PAGE_BG,
        font_family="'DM Sans', sans-serif",
    )


# ── App ───────────────────────────────────────────────────────

app = rx.App(
    stylesheets=[
        "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&display=swap"
    ]
)
app.add_page(index)