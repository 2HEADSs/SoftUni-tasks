const homeTemplate = () => `
<h1>Home</h1>
<p> Home page</p>
<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
`;

const articlesTemplate = () => `
<h1>Articles</h1>
<p> Articles page</p>
<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
`;

const aboutTemplate = () => `
<h1>About</h1>
<p> About page</p>
<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
`;

const routes = {
    '/': homeTemplate,
    '/home': homeTemplate,
    '/articles': articlesTemplate,
    '/about': aboutTemplate,
}

const notFoundTemplate = () => `
<h1>Not Found</h1>
`
const root = document.getElementById('root');

const navigate = (pathname) => {


    history.pushState({}, '', pathname)
    let template = routes[pathname]
    if (!template) {
        template = notFoundTemplate
    }
    root.innerHTML = template()
}

document.body.addEventListener('click', (e) => {
    if (e.target.tagName == 'A') {
        e.preventDefault();
        let url = new URL(e.target.href)
        navigate(url.pathname)

    }
});

window.addEventListener('popstate', (e) => {
    navigate(location.pathname)
});

navigate(location.pathname)