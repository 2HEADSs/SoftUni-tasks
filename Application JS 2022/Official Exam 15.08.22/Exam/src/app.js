import { page, render } from './lib.js'
import { getUser } from "./util.js";
import { logout } from "./api/api.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { dashBoardPage } from "./views/dashboard.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { searchPage } from "./views/search.js";



const root = document.getElementById('main');
document.getElementById('logoutBtn').addEventListener('click', onLogout);


page(renderingContext)
page('/', homePage)
page('/dashboard', dashBoardPage)
page('/login', loginPage)
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/search', searchPage)


updateUserNav()
page.start();

function renderingContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    next()
};

function updateUserNav() {
    const user = getUser();


    if (user) {
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';

    }
};

function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/dashboard');
}