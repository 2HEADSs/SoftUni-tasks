import { html, render } from './node_modules/lit-html/lit-html.js';
const root = document.getElementById('root');
console.log(root);
const template = (city) => html`
<ul>
    <li>${city}</li>
</ul>
`;
document.getElementById('btnLoadTowns').addEventListener('click', (e) => {
    e.preventDefault();
    // const input = document.getElementById('towns').value.split(', ');
    render(document.getElementById('towns').value.split(', ').map(template), root);
    document.getElementById('towns').value = ''
})