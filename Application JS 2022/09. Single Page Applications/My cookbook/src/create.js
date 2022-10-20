import { getToken } from "./auth.js";


const createSection = document.querySelector('.create');
const createForm = createSection.querySelector('form');

createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);

    let name = formData.get('name');
    let img = formData.get('img');
    let ingredients = formData.get('ingredients').split('\n');
    let preparation = formData.get('steps').split('\n');

    let data = {
        name,
        img,
        ingredients,
        preparation
    }

    fetch('http://localhost:3030/jsonstore/cookbook/recipes/', {
        method: 'POST',
        headers: {
            'content-type': 'application.json.',
            'X-Authorization': getToken()
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        alert('successful added recipe')
    })
})


export function showCreatePage() {
    createSection.style.display = 'block';
    console.log(createForm);
}