
import { navBarTemplate } from "./navbar.js";
import { contactListTemplate } from "./contactList.js";


export const mainTemplate = (data) => `
<header>
${navBarTemplate()}
/<header>
<main>
${contactListTemplate(data.contacts)}
</main>
`;