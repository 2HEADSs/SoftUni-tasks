function myDEMO() {
    let formElement = document.getElementById('login-form');

    formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let formData = new FormData(e.currentTarget);

        // let { username, password } = Object.fromEntries(formData);

        let username = formData.get('email');
        let password = formData.get('password');
        let data = {
            email: username,
            password
        };

        fetch('http://localhost:3030/users/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(user => {
                localStorage.setItem('_id', user._id);
                localStorage.setItem('username', user.username);
                localStorage.setItem('accessToken', user.accessToken);
                console.log(user._id);
                console.log(user.username);
                console.log(user.accessToken);
            })
            .catch(err => {
                console.error(err);
            })
    });
}
myDEMO()