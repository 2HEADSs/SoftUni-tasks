import { logout } from "./api/api.js";
import { page, render } from './lib.js'
import { getUser } from "./util.js";
import { createPage } from "./views/create.js";
import { dashBoardPage } from "./views/dashboard.js";
import { detailsPage } from "./views/details.js";
import { editPage } from "./views/edit.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";



const root = document.getElementById('content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);


page(renderingContext)
updateUserNav()
page('/', homePage)
page('/dashboard', dashBoardPage)
page('/login', loginPage)
page('/register', registerPage)
page('/create', createPage)
page('/details/:id', detailsPage)
page('/edit/:id', editPage)
// page('/my-posts', myPostPage)

page.start();

function renderingContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    next()
};

function updateUserNav() {
    const user = getUser();

    document.getElementById('homeBtn').style.display = 'block';
    document.getElementById('dashboardBtn').style.display = 'block';


    if (user) {
        document.getElementById('createBtn').style.display = 'block';
        document.getElementById('logoutBtn').style.display = 'block';
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('registerBtn').style.display = 'none';
    } else {
        document.getElementById('loginBtn').style.display = 'block';
        document.getElementById('registerBtn').style.display = 'block';
        document.getElementById('createBtn').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'none';
    }
};

function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/')
}