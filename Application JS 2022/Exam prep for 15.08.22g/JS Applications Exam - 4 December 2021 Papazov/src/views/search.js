import { searchCurrentData } from "../api/data.js";
import { html } from "../lib.js";
import { getUser } from "../util.js";


const searchTemplate = (onSearch, albums, user) => html`
        <section id="searchPage">
            <h1>Search by Name</h1>
        
            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button @click=${onSearch} class="button-list">Search</button>
            </div>
        
            <h2>Results:</h2>
        
            ${resultTemplate(albums, user)}
        
        </section>`;

const resultTemplate = (albums, user) => {
    if (albums.length > 0) {
        return html`
            <div class="search-result">
            ${albums.map(a => sngleAlbumTemplate(a, user))}
            </div>`
    } else {
        return html`
        <div class="search-result">
            <p class="no-result">No result.</p>
        </div>`
    }

};

const sngleAlbumTemplate = (album, user)=> html`
            
            <div class="card-box">
                    <img src=${album.imgUrl}>
                    <div>
                        <div class="text-center">
                            <p class="name">Name: ${album.name}</p>
                            <p class="artist">Artist: ${album.artist}</p>
                            <p class="genre">Genre: ${album.genre}</p>
                            <p class="price">Price: ${album.price}</p>
                            <p class="date">Release Date: ${album.releaseDate}</p>
                        </div>
                        ${user
                        ? html`<div class="btn-group">
                            <a href="/details/${album._id}" id="details">Details</a>
                        </div>`
                        : null
                        }
            
                    </div>
                </div>
`

export async function searchPage(ctx) {
    let albums = [];
    let user = getUser()
    const onSearch = async () => {
        const searchText = document.getElementById('search-input')

        if (searchText != '') {
            const query = encodeURIComponent(`name LIKE "${searchText.value}"`)
            albums = await searchCurrentData(query);
            searchText.value = ''
        }
        ctx.render(searchTemplate(onSearch, albums, user))
    }

    ctx.render(searchTemplate(onSearch, albums, user))

}