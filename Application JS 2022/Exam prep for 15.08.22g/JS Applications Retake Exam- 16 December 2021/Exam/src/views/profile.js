import {getMyData } from "../api/data.js";
import { html } from "../lib.js";
import { getUser } from "../util.js";

const myProfileTemplate = (events,user) => html`
        <section id="profilePage">
            <div class="userInfo">
                <div class="avatar">
                    <img src="./images/profilePic.png">
                </div>
                <h2>${user.email}</h2>
            </div>
            <div class="board">
                <!--If there are event-->

                ${events.length == 0 
                ? html`<div class="no-events">
                    <p>This user has no events yet!</p>
                        </div>`
                : html `${events.map(bookCard)}`
                }

            </div>
        </section>`

const bookCard = (event) => html`
                <div class="eventBoard">
                    <div class="event-info">
                        <img src=${event.imageUrl}>
                        <h2>${event.title}</h2>
                        <h6>${event.date}</h6>
                        <a href="/details/${event._id}" class="details-button">Details</a>
                    </div>
                </div>
        `

export async function profilePage(ctx) {
    const user = await getUser()
    const events = await getMyData(user.id)
    ctx.render(myProfileTemplate(events,user));
}