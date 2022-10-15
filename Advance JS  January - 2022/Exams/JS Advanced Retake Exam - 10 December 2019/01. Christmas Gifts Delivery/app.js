function solution() {
    let giftInputElement = document.querySelector('[type="text"]');
    let addBtn = document.querySelector('.container .card div button')
    addBtn.addEventListener('click', addGift);

    let listOfGuest = document.querySelectorAll('.container .card')[1].children[1];

    let arr = [];

    let sectionListOfGifts = document.querySelectorAll('.container .card')[1]
    sectionListOfGifts.addEventListener('click', option);

    let sectionSentUl = document.querySelectorAll('.container .card')[2].children[1];
    let sectionDiscardUl = document.querySelectorAll('.container .card')[3].children[1];


    function addGift(e) {
        e.preventDefault()
        let giftName = giftInputElement.value;
        if (giftName !== '') {
            arr.push(giftName);
            listOfGuest.innerHTML = ''
            arr.sort((a, b) => a.localeCompare(b));



            arr.map(x => {
                let li = document.createElement('li');
                li.setAttribute('class', 'gift')
                li.textContent = x;
                let sendBtn = document.createElement('button');
                sendBtn.setAttribute('id', 'sendButton');
                sendBtn.textContent = 'Send';

                let discardBtn = document.createElement('button');
                discardBtn.setAttribute('id', 'discardButton');
                discardBtn.textContent = 'Discard'

                li.appendChild(sendBtn);
                li.appendChild(discardBtn);
                listOfGuest.appendChild(li)
            });
        }

        giftInputElement.value = ''

    }
    function option(e) {
        if (e.target.textContent == "Send") {
            let li = document.createElement('li');
            li.setAttribute('class', 'gift');
            li.textContent = e.target.parentElement.childNodes[0].textContent

            let index = arr.indexOf(li.textContent)
            arr.splice(index, 1);
            console.log(arr);
            sectionSentUl.appendChild(li)
            e.target.parentElement.remove()

        } else if (e.target.textContent == "Discard") {

            // let li = document.createElement('li');
            // li.setAttribute('class', 'gift');
            // li.textContent = e.target.parentElement.childNodes[0].textContent

            let index = arr.indexOf(e.target.parentElement.childNodes[0].textContent)
            arr.splice(index, 1);

            sectionDiscardUl.innerHTML += `<li class="gift">${e.target.parentElement.childNodes[0].textContent}</li>`
            e.target.parentElement.remove()
        }
    }
}