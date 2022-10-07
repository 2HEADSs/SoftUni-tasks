window.addEventListener('load', solve);

function solve() {

    let [genre, name, author, date] = document.querySelectorAll('form input');
    let addBtn = document.getElementById('add-btn');
    let likesNum = 0;

    addBtn.addEventListener('click', addFn)

    function addFn(e) {
        e.preventDefault();

        if (genre.value && name.value && author.value && date.value) {

            let parrentDivCnteiner = document.querySelector('.all-hits-container');
            let divColection = document.createElement('div');
            divColection.className = 'hits-info';

            let imgCollection = document.createElement('img');
            imgCollection.src = "./static/img/img.png";


            let h2GenreCollection = document.createElement('h2');
            h2GenreCollection.textContent = `Genre: ${genre.value}`

            let h2NameCollection = document.createElement('h2');
            h2NameCollection.textContent = `Name: ${name.value}`;

            let h2AuthorCollection = document.createElement('h2');
            h2AuthorCollection.textContent = `Author: ${author.value}`

            let h3DateCollection = document.createElement('h3');
            h3DateCollection.textContent = `Date: ${date.value}`

            let saveBtn = document.createElement('button');
            saveBtn.className = 'save-btn';
            saveBtn.textContent = `Save song`;

            let likeBtn = document.createElement('button');
            likeBtn.className = `like-btn`;
            likeBtn.textContent = `Like song`;

            let deleteBtn = document.createElement('button');
            deleteBtn.className = `delete-btn`
            deleteBtn.textContent = `Delete`;

            divColection.appendChild(imgCollection);
            divColection.appendChild(h2GenreCollection);
            divColection.appendChild(h2NameCollection);
            divColection.appendChild(h2AuthorCollection);
            divColection.appendChild(h3DateCollection);
            divColection.appendChild(saveBtn);
            divColection.appendChild(likeBtn);
            divColection.appendChild(deleteBtn);
            parrentDivCnteiner.appendChild(divColection);


            genre.value = "";
            name.value = "";
            author.value = "";
            date.value = "";

            saveBtn.addEventListener('click', saveFn);
            likeBtn.addEventListener('click', likeFn);
            deleteBtn.addEventListener('click', deleteFn);

            function saveFn(e) {
                let savedContainerDiv = document.querySelector('.saved-container');
                savedContainerDiv.appendChild(divColection);
                saveBtn.remove();
                likeBtn.remove();
            }
            function likeFn(e) {

                let totalLikeSection = document.querySelector('#total-likes .likes p');
                likesNum += 1;
                totalLikeSection.textContent = `Total Likes: ${likesNum}`;
                e.currentTarget.disabled = true;

            }
            function deleteFn(e){
                e.currentTarget.parentNode.remove()
            }
        }

    }

}
