/** Escape HTML, then turn **bold** markers into <strong> tags. */
export function richText(text: string): string {
    const escaped = text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    return escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}
