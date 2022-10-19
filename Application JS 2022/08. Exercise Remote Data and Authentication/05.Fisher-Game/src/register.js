window.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('section form');
    form.addEventListener('submit', register);
});

function register(e) {
    e.preventDefault()
    const formData = new FormData(e.target);
    let email = formData.get('email');
    let pass = formData.get('password');
    let rePass = formData.get('rePass');
    if (email !== '' && pass !== '' && rePass !== '') {
        if (pass == rePass) {
            let body = {
                email,
                pass,
            };
            fetch('http://localhost:3030/users/register', {
                method: 'POST',
                headers: {
                    'content-type': 'application.json'
                },
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(newUser => {
                    localStorage.setItem('id', newUser._id);
                    localStorage.setItem('username', newUser.email);
                    localStorage.setItem('accessToken', newUser.accessToken);
                })
                .catch(err => console.log(err))


        } else (alert('Use same Password'))
    } else {
        alert('All field must be with correct value')
    }
}

