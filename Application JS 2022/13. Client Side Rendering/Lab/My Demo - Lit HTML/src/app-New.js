import { html, render } from '../node_modules/lit-html/lit-html.js';

const template = (items, styleClass) => html`
<h1>Hello from Lit HTML</h1>

${items.length == 0
    ? html`<p>No users</p>`
    : ''
}

<ul class=${styleClass}>
    ${items.map(x => html`<li>${x}</li>`)}
</ul>

<input type="text" value=${items[0]}>

<button ?disabled=${items.length> 6} @click=${() => onClick()}> Add</button>
`;

const names = ['Pesho', 'Gosho', 'Stamat', 'Valeri']
const root = document.getElementById('root');

render(template(names, 'vertical', false), root);

function onClick(item) {
    names.push('Pesho' + Math.random());
    render(template(names, 'vertical'), root);
}