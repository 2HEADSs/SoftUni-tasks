function attachEvents() {
    let baseUrl = 'http://localhost:3030/jsonstore/phonebook';

    let loadBtn = document.getElementById('btnLoad');
    loadBtn.addEventListener('click', loadPhoneBook);

    let createBtn = document.getElementById('btnCreate');
    createBtn.addEventListener('click', createContact);

    let ulElement = document.getElementById('phonebook');

    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');


    function loadPhoneBook(e) {
        ulElement.textContent = '';
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                let details = Object.values(data)
                details.map(x => {
                    let li = document.createElement('li');
                    li.textContent = `${x.person}: ${x.phone}`;

                    let deleteBtn = document.createElement('button');
                    deleteBtn.id = x._id;
                    deleteBtn.textContent = 'Delete';
                    deleteBtn.addEventListener('click', deleteContact);

                    li.appendChild(deleteBtn);
                    ulElement.appendChild(li);
                })
            })
            .catch(err => alert(err.message))
    }

    function deleteContact(e) {

        let id = e.currentTarget.id
        fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application.json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => alert(err.message));

    }

    function createContact(e) {
        let name = personInput.value;
        let phone = phoneInput.value;
        if (name !== '' && phone !== '' && typeof phone !== Number) {
            fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application.json'
                },
                body: JSON.stringify({
                    person: name,
                    phone

                })
            })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(err => alert(err.message))
        } else {
            personInput.value = 'add correct input' 
            phoneInput.value = 'add correct input' 
        }
    }

    // loadPhoneBook()
    personInput.value = '';
    phoneInput.value = '';
}

attachEvents();