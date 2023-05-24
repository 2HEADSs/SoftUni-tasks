import { logout } from "./api/data.js";
import { page, render } from "./lib.js"
import { loginPage } from "./views/login.js";
import { getUser } from "./util.js";
import { homePage } from "./views/home.js";
import { registerPage } from "./views/register.js";
import { catalogPage } from "./views/catalog.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { searchPage } from "./views/search.js";


const root = document.getElementById('main-content');
document.getElementById('logout').addEventListener('click', onLogout)

page(renderingContext)
page('/', homePage);
page('/login', loginPage)
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/catalog', catalogPage)
page('/edit/:id', editPage)
page('/search', searchPage) 

updateUserNav();
page.start()

function renderingContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    next()
}


function updateUserNav() {
    const user = getUser();
    if (user  ) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('register').style.display = 'none';
        document.getElementById('create').style.display = 'inline-block';
        document.getElementById('logout').style.display = 'inline-block';
    } else {
        document.getElementById('login').style.display = 'inline-block';
        document.getElementById('register').style.display = 'inline-block';
        document.getElementById('create').style.display = 'none';
        document.getElementById('logout').style.display = 'none';
    }
};

function onLogout() {
    logout();
    updateUserNav();
    console.log(ctx);
    ctx.page.redirect('/');
}