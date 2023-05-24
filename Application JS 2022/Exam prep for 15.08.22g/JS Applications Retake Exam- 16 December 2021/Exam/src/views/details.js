import { deleteDataById, getAllLikesById, getCurrentData, getLikeByIdByUser, makeLike } from "../api/data.js";
import { html } from "../lib.js";
import { getUser } from "../util.js";

const detailsTemplate = (event, isOwner, onDelete, likes, user, isLikedByUser, onLike) => html`
        <section id="detailsPage">
            <div id="detailsBox">
                <div class="detailsInfo">
                    <h1>Title: ${event.title}</h1>
                    <div>
                        <img src=${event.imageUrl} />
                    </div>
                </div>
        
                <div class="details">
                    <h3>Theater Description</h3>
                    <p>${event.description}</p>
                    <h4>Date: ${event.date}</h4>
                    <h4>Author: ${event.author}</h4>
                    <div class="buttons">
                        ${optionTemplate(event, onDelete, likes, user,isLikedByUser, onLike, isOwner )}
                    </div>
                    <p class="likes">Likes: ${likes}</p>
                </div>
            </div>
        </section>`;

const optionTemplate = (event, onDelete, likes, user,isLikedByUser, onLike, isOwner ) => {
    if (isOwner) {
        return html`<a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
<a class="btn-edit" href="/edit/${event._id}">Edit</a>`
    }
    if (!user) {
        return html`<p class="likes">Likes: ${likes}</p>`
    }

    if (user && !isLikedByUser) {
        return html`<a @click=${onLike} class="btn-like" href="#">Like</a>`
    }
}

export async function detailsPage(ctx) {
    const user = getUser()
    const event = await getCurrentData(ctx.params.id)
    const isOwner = user && user.id == event._ownerId;
    const likes = await getAllLikesById(ctx.params.id);
    const isLikedByUser = user ? await getLikeByIdByUser(ctx.params.id, user.id) : null;


    ctx.render(detailsTemplate(event, isOwner, onDelete, likes, user, isLikedByUser, onLike))

    async function onDelete() {
        const chois = confirm('Are you sure!!!')
        if (chois) {
            await deleteDataById(ctx.params.id)
            ctx.page.redirect('/')
        }
    };

    async function onLike() {
        await makeLike(ctx.params.id)
        console.log(likes);
        ctx.page.redirect(`/details/${ctx.params.id}`)
    }
}