import reflex as rx

config = rx.Config(
    app_name="skillgap_ai",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ]
)