export function render(html, parent) {
    const template = document.createElement('template');
    template.innerHTML = html;
    parent.replaceChildren(template.content)

    // const div = document.createElement('div');
    // div.innerHTML = html;
    // parent.appendChild(div)
}