import { html, render } from '../../node_modules/lit-html/lit-html.js'
import * as movieServices from "../services/movieServices.js";

const movieTemplate = (movie) => html`
<div class="card movie-card" style="width: 200px;">
    <img src=${movie.posterUrl} class="card-img-top" alt=${movie.title}>
    <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <a href="/movies/${movie._id}" class="btn btn-primary">Details</a>
    </div>
</div>
`

const homeTemplate = (movies) => html`
<h1>Movie List</h1>
<div class="movie-list">
    ${movies.map(x => movieTemplate(x))}
</div>
`

export const homeView = (ctx) => {
    let searchParams = new URLSearchParams(ctx.querystring);

    movieServices.getAll(searchParams.get('search'))
        .then(movies => {
            ctx.render(homeTemplate(movies));
        });
};