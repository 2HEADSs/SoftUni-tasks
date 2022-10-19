function attachEvents() {
    const refreshBtn = document.getElementById('refresh');
    refreshBtn.addEventListener('click', refresh);
    const textArea = document.getElementById('messages');
    let baseUrl = 'http://localhost:3030/jsonstore/messenger'

    const sendBtn = document.getElementById('submit');
    sendBtn.addEventListener('click', send);



    function send(e) {
        e.preventDefault();
        const [nameElement, messageElement] = document.querySelectorAll('input');

        const name = nameElement.value;
        const message = messageElement.value;
        console.log(e);
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application.json'
            },
            body: JSON.stringify(
                {
                    author: name,
                    content: message,
                })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => alert(err.message))

        nameElement.value = '';
        messageElement.value = '';
        refresh()
    }

    function refresh() {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                textArea.textContent = '';
                let info = []
                Object.values(data).map(x => info.push(
                    `${x.author}: ${x.content}`
                ));
                textArea.textContent = info.join('\n')
            })
    }

}

attachEvents();