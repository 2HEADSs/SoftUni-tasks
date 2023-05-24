export async function searchPage(ctx) {
    const params = ctx.querystring.split('=')[1];
    let data = [];

    if (params) {
        data = await searchCurrentData(decodeURIComponent(params))
    };
    ctx.render(searcTemplate(book, onSearch, params))

    function onSearch(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const search = formData.get('search');

        if (search) {
            ctx.page.redirect('/search?query=' + encodeURIComponent(search))
        }
    }

};

export async function searchCurrentData(query) {

    return ap.get('/data/books?where=' + encodeURIComponent(`title LIKE "${query}"`))
}
