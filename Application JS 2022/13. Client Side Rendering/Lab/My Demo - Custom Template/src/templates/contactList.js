import { conatctTemplate } from "./contact.js";

export const contactListTemplate = (contacts) => `
    <div class = "contact-list" style ="display: flex; justify-content: space-around;">
        ${contacts.map(x => conatctTemplate(x)).join('')}
    </div> `;

    