import { html, render } from "./node_modules/lit-html/lit-html.js";

const divElement = document.getElementById('root');

document.getElementById('btnLoadTowns').addEventListener('click', (e) => {
    e.preventDefault();
    const result = document.getElementById('towns').value.split(',').map(x => x.trim())
    // .map(el => el.trim());
    render(listeRender(result), divElement)

});

function listeRender(result) {
    return html`
    <ul>
        ${result.map(town => html`<li>${town}</li>`)}
    </ul>
    `
}