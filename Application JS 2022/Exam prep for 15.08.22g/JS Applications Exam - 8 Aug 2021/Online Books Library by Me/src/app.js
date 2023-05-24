import { logout } from "./api/data.js";
import { page, render } from "./lib.js"
import { loginPage } from "./views/login.js";
import { getUser } from "./util.js";
import { homePage } from "./views/home.js";
import { registerPage } from "./views/register.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { myBooksPage } from "./views/my-books.js";
import { editPage } from "./views/edit.js";


const root = document.getElementById('site-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout)

page(renderingContext)
page('/', homePage);
page('/login', loginPage)
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/my-books', myBooksPage)
page('/edit/:id', editPage)

updateUserNav();
page.start()

function renderingContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    next()
}


function updateUserNav() {
    const user = getUser();

    if (user) {
        document.getElementById('user').style.display = 'inline-block';
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#user span').textContent = `Welcome, ${user.email}`
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'inline-block';
    }
};

function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/');
}