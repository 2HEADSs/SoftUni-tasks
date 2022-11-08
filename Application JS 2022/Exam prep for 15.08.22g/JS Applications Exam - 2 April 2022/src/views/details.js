import { deletePostById, getDonationById, getDonationByIdByUser, getPostById, makeDonation } from "../api/data.js";
import { html } from '../lib.js';
import { getUser } from "../util.js";

const detailsTemplate = (pet, isOwner, user, onDelete, onDonate, isDonatedByUser, countDonation) => html`
        <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src=${pet.image}>
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${pet.name}</h1>
                        <h3>Breed: ${pet.breed}</h3>
                        <h4>Age: ${pet.age}</h4>
                        <h4>Weight: ${pet.weight}</h4>
                        <h4 class="donation">Donation: ${Number(countDonation) * 100}$</h4>
                    </div>
                    <!-- if there is no registered user, do not display div-->
                    <div class="actionBtn">
                        ${donateTemplate(pet, user, isDonatedByUser, isOwner, onDelete, onDonate)}
                    </div>
                </div>
        </section>`;

const donateTemplate = (pet, user, isDonatedByUser, isOwner, onDelete, onDonate) => {
    if (user && isOwner) {
        return html`
        <a href="/edit/${pet._id}" class="edit">Edit</a>
        <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>`
    }

    if (user && isDonatedByUser) {
        return null;
    }

    if (user && !isDonatedByUser) {
        return html`<a @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>`
    }
}

export async function detailsPage(ctx) {
    const user = await getUser();
    const pet = await getPostById(ctx.params.id)
    const isDonatedByUser = user ? await getDonationByIdByUser(ctx.params.id, user.id) : 0
    const isOwner = user && user.id == pet._ownerId
    const countDonation = await getDonationById(ctx.params.id)
    ctx.render(detailsTemplate(pet, isOwner, user, onDelete, onDonate, isDonatedByUser, countDonation))


    async function onDelete() {
        const chois = confirm('Are you sure');
        if (chois) {
            await deletePostById(ctx.params.id);
            ctx.page.redirect('/')
        }
    };

    async function onDonate() {
        await makeDonation(ctx.params.id);
        ctx.page.redirect('/details/' + ctx.params.id)
    }
}
