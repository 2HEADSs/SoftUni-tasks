import { createPost, editPost, getPostById } from "../api/data.js";
import { html } from '../lib.js';

const editTemplate = (onSubmit, pet) => html`
                <section id="editPage">
            <form @submit=${onSubmit} class="editForm">
                <img src=${pet.image}>
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" .value=${pet.name}>
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" .value=${pet.breed}>
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" .value=${pet.age}>
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" .value=${pet.weight}>
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" .value=${pet.image}>
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>`;

export async function editPage(ctx) {
    const post = await getPostById(ctx.params.id)

    ctx.render(editTemplate(onSubmit, post))

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get('name').trim()
        const breed = formData.get('breed').trim();
        const age = formData.get('age').trim();
        const weight = formData.get('weight').trim();
        const image = formData.get('image').trim();




        if (name == '' || breed == '' || age == '' || weight == '' || image == '') {
            return alert('All fileds must be fulfilled');
        };

        await editPost(ctx.params.id, {
            name,
            breed,
            age,
            weight,
            image
        });
        ctx.updateUserNav();
        ctx.page.redirect(`/details/${ctx.params.id}`)
    }
}