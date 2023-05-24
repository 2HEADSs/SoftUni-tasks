import { deletePostById, getPostById } from "../api/data.js";
import { html } from '../lib.js';
import { getUser } from "../util.js";

const detailsTemplate = (post, isOwner, onDelete) => html`
                <section id="details-page">
                    <h1 class="title">Post Details</h1>
                
                    <div id="container">
                        <div id="details">
                            <div class="image-wrapper">
                                <img src=${post.imageUrl} alt="Material Image" class="post-image">
                            </div>
                            <div class="info">
                                <h2 class="title post-title">${post.title}</h2>
                                <p class="post-description">Description: ${post.description}</p>
                                <p class="post-address">Address: ${post.address}</p>
                                <p class="post-number">Phone number: ${post.phone}</p>
                                <p class="donate-Item">Donate Materials: 0</p>
                
                                <!--Edit and Delete are only for creator-->
                                <div class="btns">
                                    ${isOwner
                                    ? html`
                                    <a href="/edit/${post._id}" class="edit-btn btn">Edit</a>
                                    <a @click=${onDelete} href="javascript:void(0)" class="delete-btn btn">Delete</a>`
                                    : html`<a href="#" class="donate-btn btn">Donate</a>`
                                    }
                
                                </div>
                
                            </div>
                        </div>
                    </div>
                </section>`;

export async function detailsPage(ctx) {
    const user = await getUser();
    const post = await getPostById(ctx.params.id)
    const isOwner = user && user.id == post._ownerId
    ctx.render(detailsTemplate(post, isOwner,onDelete))


    async function onDelete() {
        const chois = confirm('Are you sure');
        if (chois) {
            await deletePostById(ctx.params.id);
            ctx.page.redirect('/')
        }
    }
}