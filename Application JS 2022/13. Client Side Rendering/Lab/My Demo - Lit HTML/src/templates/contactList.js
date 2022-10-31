import { html } from "../../node_modules/lit-html/lit-html.js";

import { conatctTemplate } from "./contact.js";

export const contactListTemplate = (ctx) => html`
    <div class="contact-list" style="display: flex; justify-content: space-around;">
        ${ctx.contacts.map(x => html`${conatctTemplate(x)}`)}
    </div>
`;

