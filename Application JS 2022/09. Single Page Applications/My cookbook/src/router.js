import { showHomePage } from "./home.js";
import { showLoginPage } from "./login.js";
import { showRegisterPage } from "./register.js";
import { showCreatePage } from "./create.js";
import { logout } from "./logout.js";


const mainElement = document.querySelector('main');
const routes = {
    '/': showHomePage,
    '/login': showLoginPage,
    '/register': showRegisterPage,
    '/create': showCreatePage,
    '/logout': logout
}

export function router(path) {

    hideElements()

    const renderer = routes[path];
    renderer()
}

function hideElements() {
    for (let section of mainElement.children) {
        section.style.display = 'none'
    }
}