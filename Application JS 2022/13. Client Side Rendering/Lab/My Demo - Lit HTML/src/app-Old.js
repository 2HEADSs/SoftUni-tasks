import { html, render } from '../node_modules/lit-html/lit-html.js';

const template = (items, styleClass, isDisabled) => html`
<h1>Hello from Lit HTML</h1>

${items.length == 0
    ? html`<p>No users</p>`
    : ''
}

<ul class=${styleClass}>
    ${items.map(x => html`<li>${x}</li>`)}
</ul>

<!-- <ul class=${styleClass}>
    <li>${items[0]}</li>
    <li>${items[1]}</li>
    <li>${items[2]}</li>
</ul> -->

<input type="text" value=${items[0]}>
<!-- <button ?disabled=${isDisabled} @click=${onClick}> Add</button> -->

<button ?disabled=${items.length> 6} @click=${() => onClick()}> Add</button>
 `;

const root = document.getElementById('root');

const names = ['Pesho', 'Gosho', 'Stamat', 'Valeri']
//  const templateResult = template(['Pesho', 'Gosho', 'Stamat'], 'vertical',true)
//  render(templateResult, root)
// render(template([], 'vertical', false), root);
render(template(names, 'vertical', false), root);

// function onClick(item) {
//     console.log(item);
// }

function onClick(item) {
    names.push('Pesho' + Math.random());
    render(template(names, 'vertical', false), root);
}