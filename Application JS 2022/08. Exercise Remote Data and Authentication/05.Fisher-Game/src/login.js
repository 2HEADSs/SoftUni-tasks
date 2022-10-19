window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', onLogin);
    console.log(form);
});

function onLogin(e) {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');


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
        .then(data => {
            const userData = {
                email: data.email,
                id: data._id,
                token: data.accessToken
            }
            sessionStorage.setItem('userData', JSON.stringify(userData));
            window.location = './index.html'
        })
        .catch(err => alert(err.message))
}
