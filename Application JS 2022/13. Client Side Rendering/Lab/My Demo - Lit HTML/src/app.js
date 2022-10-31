import { render } from "../node_modules/lit-html/lit-html.js";
import { getContacts } from "./api.js";
import { mainTemplate } from "./templates/main.js";

const rootElement = document.getElementById('root');

const contacts = await getContacts();
// contactListTemplate(contacts)

render(mainTemplate({ contacts, addContactHandler }), rootElement);

//Do not do this at home
function addContactHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let person = formData.get('person');
    let phone = formData.get('phone');


    fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ person, phone })
    })
        .then(res => res.json())
        .then(contact => {
            console.log(contact);

            let currentContacts = [...contacts, contact]
            render(mainTemplate({ contacts: currentContacts, addContactHandler }), rootElement);
        })
}