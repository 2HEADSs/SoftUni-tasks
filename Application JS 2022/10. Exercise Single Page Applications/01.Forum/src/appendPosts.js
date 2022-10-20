const divContainerElement = document.querySelector('.topic-title');
let x = Date()

export function appendPost(id) {

    fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${id}`)
        .then(res => res.json())
        .then(data => {
            const div = document.createElement('div');
            div.classList.add('topic-name-wrapper');
            div.innerHTML = `<div class="topic-name">
    <a href="#" class="normal">
        <h2>${data.topicText} 10</h2>
    </a>
    <div class="columns">
        <div>
            <p>Date: <time>${x}</time></p>
            <div class="nick-name">
                <p>Username: <span>${data.user}</span></p>
            </div>
        </div>


    </div>
</div>`;

            divContainerElement.appendChild(div)
        })



}
