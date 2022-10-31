import { mainTemplate } from "./templates/main.js";
import { getContacts } from "./api.js";
import { render } from "./render.js";

const rootElement = document.getElementById('root');

const contacts = await getContacts();
// contactListTemplate(contacts)

render(mainTemplate({contacts}), rootElement);

window.addContact = function () {
    fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ person: 'Kris', phone: '0999111808' })
    })
        .then(res => res.json())
        .then(contact => {
            console.log(contact);
            render(mainTemplate({contacts: [...contacts, contact]}), rootElement)
        })
}