// import { html } from "../lib.js"
// import { getMyPosts } from "../api/data.js"
// import { getUser } from "../util.js";
// const myPostsTemplate = (posts) => html`
//         <section id="my-posts-page">
//             <h1 class="title">My Posts</h1>

//             ${posts.length == 0
//         ? html`<h1 class="title no-posts-title">You have no posts yet!</h1>`
//         : html`<div class="my-posts">${posts.map(postTemplate)}</div>`
//             }        
//         </section>`;

// const postTemplate = (post) => html`
//                 <div class="post">
//                     <h2 class="post-title">${post.title}</h2>
//                     <img class="post-image" src=${post.imageUrl} alt="Kids clothes">
//                     <div class="btn-wrapper">
//                         <a href="/details/${post._id}" class="details-btn btn">Details</a>
//                     </div>
//                 </div>
// `

// export async function myPostPage(ctx) {
//     const user = await getUser()
//     const posts = await getMyPosts(user.id);
//     ctx.render(myPostsTemplate(posts))
// }
