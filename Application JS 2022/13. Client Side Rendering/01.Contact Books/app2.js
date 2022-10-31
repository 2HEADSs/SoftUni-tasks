import { contacts } from "./contacts.js";
import { html, render } from "./node_modules/lit-html/lit-html.js";


const template = (contact, onDetails) => html`
<div class="contact card">
    <div>
        <i class="far fa-user-circle gravatar"></i>
    </div>
    <div class="info">
        <h2>Name: ${contact.name}</h2>
        <button class="detailsBtn" @click=${() => onDetails(contact)}>${contact.details ? "Hide" : "Details"}</button>
        <div class=${contact.details ? 'show' : 'details' } id=${contact.id}>
            <p>Phone number: ${contact.phoneNumber}</p>
            <p>Email: ${contact.email}</p>
        </div>
    </div>
</div>
`;
start()
function start() {
    const root = document.getElementById('contacts');

    onRender();

    function onDetails(contact) {
        contact.details = !contact.details
        onRender()
    }


    function onRender() {
        render(contacts.map(c => template(c, onDetails)), root);
    }

};

