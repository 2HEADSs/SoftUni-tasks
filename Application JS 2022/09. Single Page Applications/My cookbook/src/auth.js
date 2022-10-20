const guestNav = document.querySelector('#guest');
const userNav = document.querySelector('#user');
// guestNav.style.display = 'inline';
// userNav.style.display = 'inline';
export function updateAuth() {
    let user = localStorage.getItem('user');
    if(user){
        userNav.style.display = 'inline';
        guestNav.style.display = 'none';
    } else {
    guestNav.style.display = 'inline';
    userNav.style.display = 'none';

    }
}

export function getToken() {
    let serializedUser = localStorage.getItem('user');

    if (serializedUser) {
        let user = JSON.parse(serializedUser);
        return user.accessToken;
    }
}