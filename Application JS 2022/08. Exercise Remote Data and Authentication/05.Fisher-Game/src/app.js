let userData = null

window.addEventListener('DOMContentLoaded', () => {
    userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData !== null) {
        document.querySelector('.email span').textContent = userData.email
        document.getElementById('guest').style.display = 'none';
        document.querySelector('#addForm .add').disabled = false;
        document.getElementById('logout').addEventListener('click', logOut)
    } else {
        document.getElementById('user').style.display = 'none';
    };

    document.querySelector('.load').addEventListener('click', loadData);
    document.getElementById('addForm').addEventListener('submit', onCreateSubmit)
});

function logOut(e) {
    e.preventDefault();
    sessionStorage.clear();
    window.location = './index.html';
    // http://localhost:3030/users/logout
    //must send empty fetch
}

function onCreateSubmit(e) {
    e.preventDefault();

    if (!userData) {
        window.location = './login.html';
        return;
    }

    const formData = new FormData(e.target);
    const data = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});

    if (Object.values(data).some(x => x == '')) {
        throw new Error('All fields are required!')
    }

    fetch('http://localhost:3030/data/catches/', {
        method: 'POST',
        headers: {
            'content-type': 'application.json',
            'X-Authorization': userData.token
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            loadData();
            e.target.reset()
        })
        .catch(err => alert(err.message))
}



function loadData() {
    fetch('http://localhost:3030/data/catches/')
        .then(res => res.json())
        .then(data => {
            document.getElementById('catches').replaceChildren(...data.map(createPreview))
        });
};

function createPreview(x) {
    const isOwner = (userData && x._ownerId == userData.id);
    const element = document.createElement('div');
    element.className = 'catch';

    element.innerHTML = `
        <label>Angler</label>
        <input type="text" class="angler" value="${x.angler}" ${!isOwner ? 'disabled' : ''}>
        <label>Weight</label>
        <input type="text" class="weight" value="${x.weight}" ${!isOwner ? 'disabled' : ''}>
        <label>Species</label>
        <input type="text" class="species" value="${x.species}" ${!isOwner ? 'disabled' : ''}>
        <label>Location</label>
        <input type="text" class="location" value="${x.location}" ${!isOwner ? 'disabled' : ''}>
        <label>Bait</label>
        <input type="text" class="bait" value="${x.bait}" ${!isOwner ? 'disabled' : ''}>
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${x.captureTime}" ${!isOwner ? 'disabled' : ''}>
        <button class="update" data-id="${x._id}" ${!isOwner ? 'disabled' : ''}>Update</button>
        <button class="delete" data-id="${x._id}" ${!isOwner ? 'disabled' : ''}>Delete</button>`

    return element;
}