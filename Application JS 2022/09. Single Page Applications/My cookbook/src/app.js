import { router } from "./router.js";
import { updateAuth } from "./auth.js";

const navigation = document.querySelector('.navigation')
// const guestNav = document.querySelector('#guest');
// guestNav.style.display = 'inline';
updateAuth()
navigation.addEventListener('click',(e) => {
    e.preventDefault();

    if(e.target.tagName =='A'){
        let url = new URL(e.target.href);
        router(url.pathname)
    }


})