function solve() {
    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', addMail);
    let resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', resetAll);

    let recipientField = document.getElementById('recipientName');
    let titleField = document.getElementById('title');
    let messageField = document.getElementById('message')

    let ulListOfMails = document.getElementById('list')
    ulListOfMails.addEventListener('click', options2);

    let ulSentMails = document.querySelector('.sent-list');
    ulSentMails.addEventListener('click', options)
    let ulDeleteMails = document.querySelector('.delete-list')

    function addMail(e) {
        e.preventDefault()
        if (recipientField.value != '' && titleField.value != '' && messageField.value != '') {
            ulListOfMails.innerHTML += `<li>
                    <h4>Title: ${titleField.value}</h4>
                    <h4>Recipient Name: ${recipientField.value}</h4>
                    <span>${messageField.value}</span>
                    <div id="list-action">
                        <button type="submit" id="send">Send</button>
                        <button type="submit" id="delete">Delete</button>
                    </div>
                </li>`


            recipientField.value = ''
            titleField.value = ''
            messageField.value = ''
        }
    }

    function resetAll(e) {
        e.preventDefault();
        recipientField.value = ''
        titleField.value = ''
        messageField.value = ''
    }

    function options(e) {
        e.preventDefault()
         if (e.target.textContent === 'Delete') {
            let li = e.target.parentElement.parentElement
            let title = e.target.parentElement.parentElement.children[0];
            title = title.textContent;
            title = title.replace('Title:', '');
            title = title.replace('To:','')
            console.log(title);
            let name = e.target.parentElement.parentElement.children[1];
            name = name.textContent;
            name = name.replace('To:', '')
            name = name.replace('Title:', '')

            ulDeleteMails.innerHTML += `<li>
                        <span>To: ${title}</span>
                        <span>Title: ${name}</span>
                    </li>`

            li.remove()
        }
    }

    function options2(e){
        e.preventDefault()
        if (e.target.textContent === 'Send') {
            let titleText = e.target.parentElement.parentElement.children[0];
            titleText = titleText.textContent;
            titleText = titleText.replace('Title:', '')
            let recipientText = e.target.parentElement.parentElement.children[1];
            recipientText = recipientText.textContent;
            recipientText = recipientText.replace('Recipient Name:', '')


            ulSentMails.innerHTML += `<li>
                        <span>To: ${recipientText}</span>
                        <span>Title: ${titleText}</span>
                        <div class="btn">
                            <button type="submit" class="delete">Delete</button>
                        </div>
                    </li>`
            let li = e.target.parentElement.parentElement
            li.remove()

        } else if (e.target.textContent === 'Delete'){
            let li = e.target.parentElement.parentElement
            let title = e.target.parentElement.parentElement.children[0];
            title = title.textContent;
            title = title.replace('Title:','')
            let name = e.target.parentElement.parentElement.children[1];
            name = name.textContent;
            name = name.replace('Recipient Name:', '')

            ulDeleteMails.innerHTML += `<li>
                        <span>To: ${name}</span>
                        <span>Title: ${title}</span>
                    </li>`

            li.remove()
        }
    }
}
solve()
