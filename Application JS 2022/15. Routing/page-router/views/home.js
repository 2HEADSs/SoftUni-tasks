import { render, html } from "../node_modules/lit-html/lit-html.js";


const homeTemplate = () => html `
<h1>Home</h1>
<p> Home page</p>
<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
`

const root = document.getElementById('root');

 export const homeView = (ctx) => {
    render(homeTemplate(), root)

};