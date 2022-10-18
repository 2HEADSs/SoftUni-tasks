function getInfo() {
    let inputElementValue = document.getElementById('stopId').value;
    let stopNameElement = document.getElementById('stopName');
    let ulForAllBuses = document.getElementById('buses');
    let url = 'http://localhost:3030/jsonstore/bus/businfo/';

    ulForAllBuses.innerHTML = '';

    fetch(`${url}${inputElementValue}`)
        .then(res => res.json())
        .then(data => {
            stopNameElement.textContent = data.name;
            let stops = Object.entries(data.buses)
                .map(x => {
                    let liElement = document.createElement('li');
                    liElement.textContent = `Bus ${x[0]} arrives in ${x[1]} minutes`;
                    ulForAllBuses.appendChild(liElement);
                })

        })
        .catch(err => stopNameElement.textContent = 'Error')

}