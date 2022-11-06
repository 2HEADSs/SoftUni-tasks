import { render, html } from "../node_modules/lit-html/lit-html.js";

const aboutTemplate = () => html`
<h1>About</h1>
<p> About page</p>
<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
`;

const root = document.getElementById('root')

export const aboutView = (ctx) => {
    render(aboutTemplate(), root)

};