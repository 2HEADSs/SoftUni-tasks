import { updateAuth } from "./auth.js";
const loginSection = document.querySelector('.login');
const loginForm = loginSection.querySelector('form');


export function showLoginPage() {
    loginSection.style.display = 'block';
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = new FormData(e.currentTarget);
    let email = formData.get('email');
    let password = formData.get('password');
    fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application.json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(res => res.json())
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user));
            updateAuth()
        })
})
