function solve() {
    let infoElement = document.getElementById('info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');
    let url = 'http://localhost:3030/jsonstore/bus/schedule/';
    let stop = 'depot'
    function depart() {
        fetch(`${url}${stop}`)
            .then(res => res.json())
            .then(data => {
                infoElement.textContent = `Next stop ${data.name}`
                departBtn.setAttribute('disabled', 'true');
                arriveBtn.removeAttribute('disabled');
            })
    }

    function arrive() {
        fetch(`${url}${stop}`)
            .then(res => res.json())
            .then(data => {
                infoElement.textContent = `Arriving at ${data.name}`;
                departBtn.removeAttribute('disabled');
                arriveBtn.setAttribute('disabled', 'true');
                stop = data.next;

            })
            .catch(err => infoElement.textContent = 'Error')
    }

    return {
        depart,
        arrive
    };
}

let result = solve();