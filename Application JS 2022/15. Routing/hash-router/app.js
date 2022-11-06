const homeTemplate = () => `
<h1>Home</h1>
<p> Home page</p>
<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
`

const articlesTemplate = () => `
<h1>Articles</h1>
<p> Articles page</p>
<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
`

const aboutTemplate = () => `
<h1>About</h1>
<p> About page</p>
<p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
`


const routes = {
    '#home': homeTemplate,
    '#articles': articlesTemplate,
    '#about': aboutTemplate,
}

const root = document.getElementById('root');

window.addEventListener('hashchange', (e) => {
    let template = routes[location.hash]
    root.innerHTML = template()
})