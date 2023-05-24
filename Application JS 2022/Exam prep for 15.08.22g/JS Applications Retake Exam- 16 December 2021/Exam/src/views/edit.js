import { editData, getCurrentData } from "../api/data.js";
import { html } from "../lib.js";


const editTemplate = (event, onSubmit) => html`
        <section id="editPage">
            <form @submit=${onSubmit} class="theater-form">
                <h1>Edit Theater</h1>
                <div>
                    <label for="title">Title:</label>
                    <input id="title" name="title" type="text" placeholder="Theater name" .value=${event.title}>
                </div>
                <div>
                    <label for="date">Date:</label>
                    <input id="date" name="date" type="text" placeholder="Month Day, Year" .value=${event.date}>
                </div>
                <div>
                    <label for="author">Author:</label>
                    <input id="author" name="author" type="text" placeholder="Author"
                    .value=${event.author}>
                </div>
                <div>
                    <label for="description">Theater Description:</label>
                    <textarea id="description" name="description"
                        placeholder="Description">${event.description}</textarea>
                </div>
                <div>
                    <label for="imageUrl">Image url:</label>
                    <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
                    .value=${event.imageUrl}>
                </div>
                <button class="btn" type="submit">Submit</button>
            </form>
        </section>
        `;

export async function editPage(ctx) {
    const event = await getCurrentData(ctx.params.id)
    ctx.render(editTemplate(event, onSubmit))

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const title = formData.get('title').trim()
        const date = formData.get('date').trim();
        const author = formData.get('author').trim();
        const description = formData.get('description').trim();
        const imageUrl = formData.get('imageUrl').trim();

        if (title == '' || date == '' || author == '' || description == '' || imageUrl == '') {
            return alert('All fileds must be fulfilled')
        };

        await editData(ctx.params.id, {
            title,
            date,
            author,
            description,
            imageUrl
        }
        );
        ctx.page.redirect('/details/' + ctx.params.id);
    }
}