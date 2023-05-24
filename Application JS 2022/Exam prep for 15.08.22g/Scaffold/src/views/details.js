import { deleteDataById, getCurrentDaata } from "../api/data.js";
import { html } from "../lib.js";
import { getUser } from "../util.js";
const detailsTemplate = (book, isOwner, user, onDelete) => html`
        <section id="details-page" class="details">
            <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">Type: ${book.type}</p>
                <p class="img"><img src="${book.imageUrl}"></p>
                <div class="actions">
                        ${isOwner
                            ? html`<a class="button" href="/edit/${book._id}">Edit</a>
                                   <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
                            : null
                        }
                        ${user && !isOwner
                        ? html`<a class="button" href="#">Like</a>`
                        : null
                        }
                    
                        
                    <!-- ( for Guests and Users )  -->
                    <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: 0</span>
                    </div>
                    <!-- Bonus -->
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>
            </div>
        </section>`

export async function detailsPage(ctx) {
    const user = getUser()
    const book = await getCurrentDaata(ctx.params.id)
    let isOwner

    if(user){
        isOwner = user.id == book._ownerId
    }
    ctx.render(detailsTemplate(book, isOwner, user, onDelete))

    async function onDelete(){
        const chois = confirm('Are you sure!!!')
        if(chois){
            await deleteDataById(ctx.params.id)
            ctx.page.redirect('/')
        }
    }
}