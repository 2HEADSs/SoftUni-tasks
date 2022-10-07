window.addEventListener('load', solve);

function solve() {
    let productType = document.querySelector('#type-product');
    let [name, phoneNumber] = Array.from(document.querySelectorAll('form input'));
    let description = document.getElementById('description');
    let recievdField = document.getElementById('received-orders');
    let completedField = document.getElementById('completed-orders')
    let submitBtn = document.querySelector('button');
    let clearBtn = document.querySelector('.clear-btn')
    clearBtn.addEventListener('click', clear)

    submitBtn.addEventListener('click', toSend);

    function toSend(e) {
        e.preventDefault()
        if (description.value && [name, phoneNumber].every(el => el.value)) {
            let divRecievedElement = createAnElement('div', '', 'container', '');
            createAnElement('h2', `Product type for repair: ${productType.value}`, '', divRecievedElement)
            createAnElement('h3', `Client information: ${name.value}, ${phoneNumber.value}`, '', divRecievedElement)
            createAnElement('h4', `Description of the problem: ${description.value}`, '', divRecievedElement)

            let startBtn = createAnElement('button', 'Start repair', 'start-btn', divRecievedElement)
            let finishBtn = createAnElement('button', 'Finish repair', 'finish-btn', divRecievedElement);
            finishBtn.disabled = true;

            recievdField.appendChild(divRecievedElement)

            name.value = '';
            phoneNumber.value = '';
            description.value = '';

            startBtn.addEventListener('click', service)
            finishBtn.addEventListener('click', finish)
        }

    }
    function service(e) {
        e.target.disabled = true;
        e.target.nextSibling.disabled = false

    }
    
    function finish(e){
        let div = e.target.parentElement;
        Array.from(div.querySelectorAll('button')).map(x => x.remove());
        completedField.appendChild(div)
    }
    function clear(e){
        Array.from(completedField.querySelectorAll('div')).map(x => x.remove())
    }


    function createAnElement(type, content, attribute, appender) {
        const el = document.createElement(type);
        if (attribute) {
            el.setAttribute('class', attribute);
            el.textContent = content;
        } else if (content) {
            el.textContent = content;
        }
        if (appender) {
            appender.appendChild(el);
        }
        return el;
    }
}
