import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns as townNames } from './towns.js';
const towns = townNames.map(t => ({ name: t, match: false }));
const divRoot = document.getElementById('towns');
const input = document.getElementById('searchText');
const output = document.getElementById('result');

document.querySelector('button').addEventListener('click', onSearch);

// create Template
const createList = (towns) => html`
<ul>
   ${towns.map(t => html`<li class=${t.match ? 'active' : '' }>${t.name}</li>`)}
</ul>`;



update()

function update() {
   render(createList(towns), divRoot)
}


function onSearch() {
   const match = input.value.trim().toLocaleLowerCase();
   let matches = 0;
   for (let town of towns) {
      if (match && town.name.toLocaleLowerCase().includes(match)) {
         town.match = true;
         matches++
      } else {
         town.match = false;
      }

   }
   // const matches = towns.filter(t => .length;
   output.textContent = `${matches} matches found`;
   update()
}