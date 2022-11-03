import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";
const rootElement = document.getElementById('allCats');


const loadCats = (cat) => html`<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button @click=${()=> toggleInfo(cat)} class="showBtn">${cat.info ? 'Hide' : 'Show'} status code</button>
        ${cat.info ? html` <div class="status"  id="cat.id">
            <h4>${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>` : null}
        </div>
    </div>
</li>`
cats.forEach(c => c.info = false)
update()

function update() {
    render(html`<ul>${cats.map(loadCats)}</ul>`, rootElement)

}

function toggleInfo(cat) {
    cat.info = !cat.info;
    update()
}


// render(loadCats(cats), rootElement)
// rootElement.addEventListener('click', (e) => {
//     if (e.target.tagName == 'BUTTON') {
//         let btn = e.target;
//         let parent = e.target.parentNode;
//         let statusDiv = parent.querySelector('.status');
//         if (btn.textContent == 'Show status code') {
//             statusDiv.style.display = 'block';
//             btn.textContent = 'Hide status code'
//         } else if (btn.textContent == 'Hide status code') {
//             statusDiv.style.display = 'none';
//             btn.textContent = 'Show status code'
//         }
//     }
// })