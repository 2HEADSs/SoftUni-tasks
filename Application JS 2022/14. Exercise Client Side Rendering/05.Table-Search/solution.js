import { html, render } from './node_modules/lit-html/lit-html.js';
const url = `http://localhost:3030/jsonstore/advanced/table`
const root = document.querySelector('tbody');
getData()
document.getElementById('searchBtn').addEventListener('click', onSearch)
let persons;

const template = (person) => html`
            <tr class=${person.match ? "select" : ''}>
                <td>${person.data.firstName}${person.data.lastName}</td>
                <td>${person.data.email}</td>
                <td>${person.data.course}</td>
                <td>${person.match}</td>
            </tr>
`;

function show() {
    render(persons.map(template), root)
}

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    persons = Object.values(data).map(p => ({ data: p, match: false }));
    persons.forEach(p => p.match = false)
    show()
}

function onSearch() {
    const input = document.getElementById('searchField').value.toLowerCase().trim();
    for (let person of persons) {
        person.match = Object.values(person.data).some(p => input && p.toLowerCase().includes(input));
    }
    show()
}