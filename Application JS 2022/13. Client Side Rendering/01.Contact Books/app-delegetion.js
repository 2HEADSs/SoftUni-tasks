import { html, render } from "./node_modules/lit-html/lit-html.js";
import { styleMap } from "./node_modules/lit-html/directives/style-map.js"
import { contacts } from "./contacts.js";

const contactTemplate = (data) => html`
        <div class="contact card">
            <div>
                <i class="far fa-user-circle gravatar"></i>
            </div>
            <div class="info">
                <h2>Name: ${data.name}</h2>
                <button class="detailsBtn">Details </button>
                <div class="details" id=${data.id}>
                    <p>Phone number: ${data.phoneNumber}</p>
                    <p>Email: ${data.email}</p>
                </div>
            </div>
        </div>
`
start()

function start() {
    const container = document.getElementById('contacts');
    container.addEventListener('click', onClick);

    function onClick(ev) {
        if (ev.target.tagName == 'BUTTON') {
            let divDetails = ev.target.parentElement.querySelector('.details');
            if (divDetails.style.display == 'block') {
                divDetails.style.display = 'none';
                ev.target.parentElement.querySelector('.detailsBtn').textContent = 'Details';
            } else {
                divDetails.style.display = 'block'
                ev.target.parentElement.querySelector('.detailsBtn').textContent = 'Hide';
            }
        }
    }
    onRender();


    function onRender() {
        render(contacts.map(contactTemplate), container)
    }
}