import { html, render } from "./node_modules/lit-html/lit-html.js";

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const root = document.getElementById('menu');
document.querySelector('form').addEventListener('submit', addTown)
getData();
const template = (town) => html`
<option value=${town._id}>${town.text}</option>
`;

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    const towns = Object.values(data);

    render(towns.map(template), root)

}


async function addTown(e) {
    e.preventDefault()
    const text = document.getElementById('itemText').value;
    const res = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application.json'
        },
        body: JSON.stringify({ text })
    });
    if (res.ok) {
        getData()
    }

    document.getElementById('itemText').value = ''
}
