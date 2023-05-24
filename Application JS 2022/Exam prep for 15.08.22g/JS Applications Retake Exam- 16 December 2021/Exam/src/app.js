import { logout } from "./api/data.js";
import { page, render } from "./lib.js"
import { loginPage } from "./views/login.js";
import { getUser } from "./util.js";
import { homePage } from "./views/home.js";
import { registerPage } from "./views/register.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js"; 
import { profilePage } from "./views/profile.js";


const root = document.getElementById('content');
document.getElementById('logoutBtn').addEventListener('click', onLogout)

page(renderingContext)
page('/', homePage);
page('/login', loginPage)
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/profile', profilePage)
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
        document.getElementById('profileBtn').style.display = 'inline-block';
        document.getElementById('createBtn').style.display = 'inline-block';
        document.getElementById('logoutBtn').style.display = 'inline-block';
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('registerBtn').style.display = 'none';
    } else {
        document.getElementById('profileBtn').style.display = 'none';
        document.getElementById('createBtn').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'none';
        document.getElementById('loginBtn').style.display = 'inline-block';
        document.getElementById('registerBtn').style.display = 'inline-block';
    }
};

function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/');
}