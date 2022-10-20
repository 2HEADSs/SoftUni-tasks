//all steps
// showView('#home-page')

// import { showView } from "./util.js";
import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { createPage } from "./create.js";
import { updateNav } from "./util.js";

const routes = {
    '/': homePage,
    '/login': loginPage,
    '/logout': logout,
    '/register': registerPage,
    '/create': createPage,

};




document.querySelector('nav').addEventListener('click', onNavigate);
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);

function onNavigate(e) {
    e.preventDefault();

    if (e.target.tagName == 'A' && e.target.href) {
        const url = new URL(e.target.href)
        const path = url.pathname;
        const view = routes[path];
        if (typeof view == 'function') {
            view()
        }
    }
}




function logout() {
    localStorage.removeItem('user');
    updateNav()
}

//Start application in home view
updateNav();
homePage()