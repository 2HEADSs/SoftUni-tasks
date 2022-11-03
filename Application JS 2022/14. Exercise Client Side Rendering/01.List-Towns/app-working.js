import { html, render } from './node_modules/lit-html/lit-html.js'
const root = document.getElementById('root')
//on click
//parse input
//render template

//template
//ul with li  for each array item
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.getElementById('towns').value.split(',').map(x => {x.trim()});
    const result = listTemplate(input);
    render(result, root)
});


const listTemplate = (input) => html`
<ul>
    ${input.map(t => html`<li>${t}</li>`)}
</ul>
`;