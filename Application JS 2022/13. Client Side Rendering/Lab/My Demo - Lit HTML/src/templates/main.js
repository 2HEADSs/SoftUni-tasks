import { html } from "../../node_modules/lit-html/lit-html.js";
import { navBarTemplate } from "./navbar.js";
import { contactListTemplate } from "./contactList.js";


export const mainTemplate = (ctx) => html`
<header>
${navBarTemplate(ctx)}
/<header>
<main>
${contactListTemplate(ctx)}
</main>
`;