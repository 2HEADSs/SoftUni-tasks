import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from './catSeeder.js'
const root = document.getElementById('allCats')
const template = (cat) => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click=${()=> toggle(cat)}>${cat.info? 'Hide': 'Show'} status code</button>
            <div class="status" style="display: ${cat.info? 'block': 'none'}" id="100">
                <h4>${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>
`;
onRender()

function onRender() {
    render(html`<ul>${cats.map(template)}</ul>`, root);
}


function toggle(cat) {
cat.info = !cat.info
onRender()
}