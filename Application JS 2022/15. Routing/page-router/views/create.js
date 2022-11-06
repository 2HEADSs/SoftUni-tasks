import { render, html } from "../node_modules/lit-html/lit-html.js";

const createArticleHandler = (e) => {
    e.preventDefault();

    let formdata = new FormData(e.currentTarget);

    let title = formdata.get('title');
    let content = formdata.get('content');
    let author = formdata.get('author');

    fetch(`http://localhost:3030/jsonstore/articles`, {
        method: 'post',
        headers: {
            'content-type': 'application.json'
        },
        body: JSON.stringify({ title, content, author })
    })
        .then(res => res.json())
        .then(article => {
            console.log(article);
        })
}

const createTemplate = (article) => html`
<form @submit=${createArticleHandler}>
    <div>
        <label for="title">Title</label>
        <input type="text" , id="title" , name="title" />
    </div>
    <div>
        <label for="content">Content</label>
        <textarea name="content" id="content"></textarea>
    </div>
    <div>
        <label for="author">Author</label>
        <input type="text" , id="author" , name="author" />
    </div>
    <div>
        <input type="submit" , value="Create">
    </div>
</form>
`


const root = document.getElementById('root');

export const createView = (ctx) => {
    render(createTemplate(), root)
};