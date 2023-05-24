import { deleteDataById, getCurrentData } from "../api/data.js";
import { html } from "../lib.js";
import { getUser } from "../util.js";

const detailsTemplate = (album, isOwner, onDelete) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${album.imgUrl}>
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre: ${album.genre}</h4>
                <h4>Price: $${album.price}</h4>
                <h4>Date: ${album.releaseDate}</h4>
                <p>Description: ${album.description}</p>
            </div>

            ${isOwner
                ? html`
                    <div class="actionBtn">
                        <a href="/edit/${album._id}" class="edit">Edit</a>
                        <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                    </div>`
                : null
            }

        </div>
    </div>
</section>`

export async function detailsPage(ctx) {
    const user = getUser()
    const album = await getCurrentData(ctx.params.id)
    console.log(album._id);



    const isOwner = user && user.id == album._ownerId
    ctx.render(detailsTemplate(album, isOwner, onDelete))

    async function onDelete() {
        const chois = confirm('Are you sure!!!')
        if (chois) {
            await deleteDataById(ctx.params.id)
            ctx.page.redirect('/catalog')
        }
    }
}