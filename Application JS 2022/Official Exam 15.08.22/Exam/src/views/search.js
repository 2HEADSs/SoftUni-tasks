import { searchCurrentData } from "../api/data.js";
import { html } from "../lib.js";
import { getUser } from "../util.js";

const searchTemplate = (onSearch, shoes, user) => html`
        <section id="search">
            <h2>Search by Brand</h2>
        
            <form @submit=${onSearch} class="search-wrapper cf">
                <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
                <button type="submit">Search</button>
            </form>
        
            <h3>Results:</h3>
            ${resultsTemplate(shoes, user)}
        </section>
`;

const resultsTemplate = (shoes, user) => {
    if (shoes.length > 0) {
        return html`
                <div id="search-container">
                    <ul class="card-wrapper">
                        <!-- Display a li with information about every post (if any)-->
                        ${shoes.map(s => signleShoesTemplate(s, user))})}
                    </ul>
                </div>
        `
    } else {
        return html`
                <div id="search-container">
                    <!-- Display an h2 if there are no posts -->
                    <h2>There are no results found.</h2>
                </div>
        `
    }
};

const signleShoesTemplate = (shoe, user) => html`
                        <li class="card">
                            <img src=${shoe.imageUrl} alt="travis" />
                            <p>
                                <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
                            </p>
                            <p>
                                <strong>Model: </strong><span class="model">${shoe.model}</span>
                            </p>
                            <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
                            ${user
                            ? html`<a class="details-btn" href="/details/${shoe._id}">Details</a>`
                            : null
                            }  
                        </li>
`

export async function searchPage(ctx) {
    let shoes = [];
    let user = getUser()
    const onSearch = async (e) => {
        e.preventDefault()
        const searchText = document.getElementById('#search-input')
        console.log(searchText.value);

        if (searchText != '') {
            // const query = encodeURIComponent(`name LIKE "${searchText.value}"`)
            shoes = await searchCurrentData(searchText.value);
            searchText.value = ''
        }
        ctx.render(searchTemplate(onSearch, shoes, user))
    }

    ctx.render(searchTemplate(onSearch, shoes, user))

}