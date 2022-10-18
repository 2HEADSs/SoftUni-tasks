function attachEvents() {
    let urlPosts = 'http://localhost:3030/jsonstore/blog/posts/';
    let urlComments = 'http://localhost:3030/jsonstore/blog/comments/'
    let loadBtn = document.getElementById('btnLoadPosts');
    let viewBtn = document.getElementById('btnViewPost');
    viewBtn.addEventListener('click', loadPosts)
    loadBtn.addEventListener('click', loadComents);
    let selectElement = document.getElementById('posts');
    let ulForPosts = document.getElementById('post-comments')

    function loadComents() {
        fetch(urlPosts)
            .then(res => res.json())
            .then(data => {
                let keys = Object.keys(data);
                keys.map(x => {
                    let option = document.createElement('option');
                    option.text = data[x].title;
                    option.value = data[x].id
                    selectElement.add(option)
                    // console.log(x);
                });
            })
    }
    function loadPosts(e) {

        let id = selectElement.value;

        fetch(`${urlComments}`)
            .then(res => res.json())
            .then(data => {
                let keys = Object.keys(data)
                keys.map(x => {
                    if (data[x].postId === id) {
                        let currentObject = data[x];
                        let currentPostId = data[x].postId
                        let li = document.createElement('li');
                        li.textContent = currentObject.text;
                        ulForPosts.appendChild(li);
                        fetch(`${urlPosts}${currentPostId}`)
                            .then(res => res.json())
                            .then(data => {
                                document.getElementById('post-body').textContent = data.body
                            })
                            .catch(err => console.log(err))
                    }
                })
            })
            .catch(err => console.log(err))
    }

}

attachEvents();