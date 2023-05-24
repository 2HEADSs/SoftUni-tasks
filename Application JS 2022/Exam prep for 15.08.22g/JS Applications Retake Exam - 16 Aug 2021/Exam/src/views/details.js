import { deleteDataById, getCurrentComments, getCurrentData, makeComment } from "../api/data.js";
import { html } from "../lib.js";
import { getUser } from "../util.js";

const detailsTemplate = (game, isOwner, onDelete, comments,onComments,user) => html`
        <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">
        
                <div class="game-header">
                    <img class="game-img" src=${game.imageUrl} />
                    <h1>${game.title}</h1>
                    <span class="levels">MaxLevel: ${game.maxLevel}</span>
                    <p class="type">${game.category}</p>
                </div>
        
                <p class="text">${game.summary}</p>
                <!-- Bonus ( for Guests and Users ) -->
        
                <div class="details-comments">
                    <h2>Comments:</h2>
                    ${comments.length == 0
            ? html`<p class="no-comment">No comments.</p>`
            : html` <ul>${comments.map(commentTemplate)}</ul>`
                    };
                </div>
        
        
                ${isOwner
                        ? html`
                <div class="buttons">
                    <a href="/edit/${game._id}" class="button">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
                </div>`
                        : null
                        }
            </div>


                        ${bonusTemplate(user, onComments, isOwner)}
        </section>`;




const commentTemplate = (comment) => html`
                        <li class="comment">
                            <p>Content: ${comment.comment}</p>
                        </li>`;

const bonusTemplate = (user,onComments, isOwner) =>{
  if (user && !isOwner){
    return  html`             <article class="create-comment">
    <label>Add new comment:</label>
    <form @submit=${onComments} class="form">
        <textarea name="comment" placeholder="Comment......"></textarea>
        <input class="btn submit" type="submit" value="Add Comment">
    </form>
</article>`
  } else {
    return null;
  }
}




export async function detailsPage(ctx) {
    const user = getUser()
    const game = await getCurrentData(ctx.params.id);
    const comments = await getCurrentComments(ctx.params.id)

    let isOwner = user ? user.id == game._ownerId : null

    // if (user) {
    //     isOwner = user.id == game
    // }
    ctx.render(detailsTemplate(game, isOwner, onDelete, comments,onComments,user))

    async function onDelete() {
        const chois = confirm('Are you sure!!!')
        if (chois) {
            await deleteDataById(ctx.params.id)
            ctx.page.redirect('/')
        }
    };


    async function onComments(e){
        e.preventDefault()
        const formData =  new FormData(e.target);
        const comment = formData.get('comment');
        if(!comment ==''){
            await makeComment(ctx.params.id, comment);
            e.target.reset()
        ctx.page.redirect('/details/' + ctx.params.id)
        } 

    }
}