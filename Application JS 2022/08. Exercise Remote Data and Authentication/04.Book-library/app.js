
const url = 'http://localhost:3030/jsonstore/collections/books';
const tbodylElement = document.querySelector('tbody');
const loadBtn = document.getElementById('loadBooks');
loadBtn.addEventListener('click', loadAllBooks);

const [titleInputElement, authorInputElement] = document.querySelectorAll('input')
const submitBtn = document.querySelector('form button');
submitBtn.addEventListener('click', submit);
let idForChange = ''

function loadAllBooks(e) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            tbodylElement.innerHTML = '';
            let keys = Object.keys(data)
            keys.map(x => {
                let newBook = document.createElement('tr');
                newBook.innerHTML = `<td>${data[x].title}</td>
                    <td>${data[x].author}</td>
                    <td>
                        <button id="${x}">Edit</button>
                        <button id="${x}">Delete</button>
                    </td>`
                tbodylElement.appendChild(newBook);
                let btns = newBook.querySelectorAll('button');
                const editBtn = btns[0];
                const deleteBtn = btns[1];
                editBtn.addEventListener('click', editData);
                deleteBtn.addEventListener('click', deleteData);
                titleInputElement.value = ''
                authorInputElement.value = ''
            })
        })
}

function deleteData(e) {
    e.preventDefault(e)
    const id = e.target.id
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application.json'
        },
        body: JSON.stringify()
    })
        .then(res => res.json())
        .then(data => {
            loadAllBooks()
        })
        .catch(err => alert(err.message))

}

function editData(e) {
    fetch(`${url}/${e.target.id}`)
        .then(res => res.json())
        .then(data => {
            authorInputElement.value = data.author;
            titleInputElement.value = data.title;
            submitBtn.textContent = 'Save';
            idForChange = e.target.id
        })
}
function submit(e) {
    e.preventDefault(e);
    let author = authorInputElement.value;
    let title = titleInputElement.value;
    const body = {
        author,
        title
    }

    if (e.target.textContent == "Submit") {
        if (author !== '' && title !== '') {
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application.json'
                },
                body: JSON.stringify(body)
            })
                .then(res => res.json())
                .then(data => loadAllBooks())

        }
    } else if (e.target.textContent == 'Save') {
        fetch(`${url}/${idForChange}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application.json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(data => loadAllBooks())
    }

    author = '';
    title = '';
    e.target.textContent = 'Submit'
}
