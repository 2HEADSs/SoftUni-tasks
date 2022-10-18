function solution() {
    let urlList = 'http://localhost:3030/jsonstore/advanced/articles/list';
    let urlDetails = 'http://localhost:3030/jsonstore/advanced/articles/details/';
    let mainSection = document.getElementById('main');

    fetch(urlList)
        .then(res => res.json())
        .then(data => {
            data.map(x => {
                mainSection.innerHTML += `
                <div class="accordion">
                <div class="head">
                    <span>${x.title}</span>
                    <button class="button" id=${x._id}>More</button>
                </div>
                <div class="extra">
                    <p></p>
                </div>
            </div>`
            });
        });
    mainSection.addEventListener('click', loadText);

    function loadText(e) {
        if (e.target.textContent == 'More') {
            let id = e.target.id;
            let button = e.target;
            let hiddenDiv = button.parentElement.parentElement.children[1];
            let p = hiddenDiv.children[0];
            fetch(`${urlDetails}${id}`)
                .then(res => res.json())
                .then(data => {
                    p.textContent = data.content
                })
                .catch(err => console.log(err))

            hiddenDiv.style.display = 'block';
            button.textContent = 'Less';
        } else if (e.target.textContent == 'Less') {
            let button = e.target;
            let hiddenDiv = button.parentElement.parentElement.children[1];
            hiddenDiv.style.display = 'none';
            button.textContent = 'More'

        }
    }
}
solution()