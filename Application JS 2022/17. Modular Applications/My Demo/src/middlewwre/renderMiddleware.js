import { render, html } from '/../node_modules/lit-html/lit-html.js';
import { navigationTemplate } from "../views/navigationView.js";

const root = document.getElementById('root');
const ctxRender = (ctx, templateresult) => {
    let layout = html`
    <nav>
        ${navigationTemplate(ctx)}
    </nav>
    <main>
        ${templateresult}
    </main>
`

    render(layout, root);

}


export const renderMiddleware = (ctx, next) => {
    ctx.render = ctxRender.bind(null, ctx);
    next();
}