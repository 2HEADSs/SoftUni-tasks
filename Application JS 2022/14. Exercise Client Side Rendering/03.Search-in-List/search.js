import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns as townNames } from './towns.js';
const towns = townNames.map(t => ({ name: t, match: false }))
const root = document.getElementById('towns');
const input = document.getElementById('searchText');
const result = document.getElementById('result')
document.querySelector('button').addEventListener('click', onSearch)


const template = (town) => html`
                <li class=${town.match ? 'active'  : '' }>${town.name}</li>
`

onRedner();


function onRedner() {
    render(html`<ul>${towns.map(template)}</ul>`, root)
};

function onSearch() {
    const match = input.value.trim().toLocaleLowerCase();
    let matches = 0;
    for (let town of towns) {
        if (match && town.name.toLocaleLowerCase().includes(match)) {
            town.match = true;
            matches++;
        } else {
            town.match = false
        }
        onRedner();
        document.getElementById('searchText').value = ''
    }
    if(matches > 0){
        
        result.textContent = `${matches} matches found`
    }
}

