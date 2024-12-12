import markdown

def markdown_to_html(markdown_file_path, html_file_path):
    # Markdown-Datei öffnen und lesen
    with open(markdown_file_path, 'r', encoding='utf-8') as file:
        markdown_text = file.read()

    # Markdown in HTML konvertieren
    html_text = markdown.markdown(markdown_text)

    # HTML in eine neue Datei schreiben
    with open(html_file_path, 'w', encoding='utf-8') as file:
        file.write(html_text)

# Pfad zur Markdown-Datei und Ziel-HTML-Datei
markdown_file_path = 'task-3.md'
html_file_path = 'task-3.html'

# Funktion aufrufen
markdown_to_html(markdown_file_path, html_file_path)
