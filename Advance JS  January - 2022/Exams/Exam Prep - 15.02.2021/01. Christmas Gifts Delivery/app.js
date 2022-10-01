function solution() {
    let addField = document.querySelector('div.container section.card:nth-of-type(1) input');
    let giftBtn = document.querySelector('div.container section.card:nth-of-type(1) button');

    let giftListUl = document.querySelector('div.container section.card:nth-of-type(2) ul')

    giftBtn.addEventListener('click', onclick);


    function onclick(e) {
        e.preventDefault()
        let liOfList = document.createElement('li');
        let sendBtn = document.createElement('button');
        let discardButton = document.createElement('button');
        let value = addField.value;

        sendBtn.textContent = 'Send';
        sendBtn.id = 'sendButton'

        discardButton.textContent = 'Discard'
        discardButton.id = 'discardButton'
        liOfList.className = 'gift'



        liOfList.textContent = value;
        liOfList.appendChild(sendBtn);
        liOfList.appendChild(discardButton);
        giftListUl.appendChild(liOfList)

        let allGifts = document.querySelectorAll('div.container section.card:nth-of-type(2) ul li');
        Array.from(allGifts).sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => giftListUl.appendChild(li))

        console.log(value);
        addField.value = ''

        sendBtn.addEventListener('click', send);

        function send(e) {
            e.preventDefault;

            let sentUl = document.querySelector('div.container section.card:nth-of-type(3) ul');
            sentUl.appendChild(e.currentTarget.parentElement)
            sendBtn.remove();
            discardButton.remove()
        }

        discardButton.addEventListener('click', discard);

        function discard(e) {
            e.preventDefault;

            let discardUl = document.querySelector('div.container section.card:nth-of-type(4) ul');
            discardUl.appendChild(e.currentTarget.parentElement)
            sendBtn.remove();
            discardButton.remove()
        }
    }
}