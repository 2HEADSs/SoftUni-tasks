// import { nothing } from "lit-html";
import { getAll } from "../api/data.js"
import { html } from "../lib.js"
import { getUser } from "../util.js";


const catalogTemplate = (albums,user) => html`
    <section id="catalogPage">
        <h1>All Albums</h1>
                ${albums.map(a => albumTmplate(a, user))}
                ${albums.length == 0
                    ? html`<p>No Albums in Catalog!</p>`
                    : null
                }        
    </section>`;

const albumTmplate = (album,user) =>{
    return   html`
         <div class="card-box">
            <img src=${album.imgUrl}>
            <div>
                <div class="text-center">
                    <p class="name">Name: ${album.name}</p>
                    <p class="artist">Artist: ${album.artist}</p>
                    <p class="genre">Genre: ${album.genre}</p>
                    <p class="price">Price: $${album.price}</p>
                    <p class="date">Release Date: ${album.releaseDate}</p>
                </div>
                ${user
                ? html`
                <div class="btn-group">
                    <a href="/details/${album._id}" id="details">Details</a>
                </div> `
                :null
                }
            </div>
        </div>` 
}



export async function catalogPage(ctx) {
    const albums = await getAll();
    const user = await getUser();
    ctx.render(catalogTemplate(albums,user))
}