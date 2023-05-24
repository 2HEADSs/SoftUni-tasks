import { logout } from "./api/api.js";
import { page, render } from './lib.js'
import { getUser } from "./util.js";
import { createPage } from "./views/create.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { myPostPage } from "./views/my-posts.js";
import { registerPage } from "./views/register.js";


const root = document.getElementById('main-content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);


page(renderingContext)
updateUserNav()
page('/', homePage)
page('/login', loginPage)
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
page('/my-posts', myPostPage)

page.start();

function renderingContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    next()
};

function updateUserNav() {
    const user = getUser();

    if (user) {
        document.getElementById('user').style.display = 'block';
        document.getElementById('guest').style.display = 'none';
    } else {
        document.getElementById('user').style.display = 'none';
        document.getElementById('guest').style.display = 'block';
    }
};

function onLogout(){
    logout();
    updateUserNav();
    page.redirect('/')
}