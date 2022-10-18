function attachEvents() {
    let inputElement = document.getElementById('location');
    let getWeatherBtn = document.getElementById('submit');
    let currentWeatherDiv = document.getElementById('current');
    let upcomingWeatherDiv = document.getElementById('upcoming');
    let forecastDiv = document.getElementById('forecast')
    let allLocationUrl = 'http://localhost:3030/jsonstore/forecaster/locations';
    let currentWeatherUrl = 'http://localhost:3030/jsonstore/forecaster/today/';
    let threeDaysWeatherUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming/';

    getWeatherBtn.addEventListener('click', loadWeather,);

    function loadWeather() {

        fetch(`${allLocationUrl}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                let currentTown = data.find(x => x.name === inputElement.value);
                let code = currentTown.code
                loadCurrentWeather(code);
                loadUpcomigWeather(code);
            })
            .catch(err => {
                forecastDiv.style.display = 'block';
                forecastDiv.innerHTML = `<p>Error</p>`
            })

    }

    function loadCurrentWeather(code) {
        fetch(`${currentWeatherUrl}${code}`)
            .then(res => res.json())
            .then(data => {
                let symbol;
                let highDegree = data.forecast.high;
                let lowDegree = data.forecast.low;
                let cityName = data.name;
                let condition = data.forecast.condition
                switch (condition) {
                    case 'Sunny': symbol = '☀'; break;
                    case 'Partly sunny': symbol = '⛅'; break;
                    case 'Overcast': symbol = '☁'; break;
                    case 'Rain': symbol = '☂'; break;
                }
                currentWeatherDiv.innerHTML = `<div class="label">Current conditions</div>`
                forecastDiv.style.display = 'block';
                let forecastsSpan = createElement('span', 'forecasts');

                let symbolSpan = createElement('span', 'condition symbol', symbol);
                forecastsSpan.appendChild(symbolSpan);

                let conditionSpan = createElement('span', 'condition');
                let citySpan = createElement('span', 'forecast-data', cityName);
                let tempSpan = createElement('span', 'forecast-data', `${lowDegree}°/${highDegree}`);
                let typeWeatherSpan = createElement('span', 'forecast-data', condition);
                conditionSpan.appendChild(citySpan);
                conditionSpan.appendChild(tempSpan);
                conditionSpan.appendChild(typeWeatherSpan);
                forecastsSpan.appendChild(conditionSpan);
                currentWeatherDiv.appendChild(forecastsSpan)
                inputElement.value = ''

            })
            .catch(err => {
                forecastDiv.style.display = 'block';
                forecastDiv.innerHTML = `<p>Error</p>`
            })
    }

    function loadUpcomigWeather(code) {

        fetch(`${threeDaysWeatherUrl}${code}`)
            .then(res => res.json())
            .then(data => {
                let allDays = data.forecast;
                let infoDiv = createElement('div', 'forecast-info');
                upcomingWeatherDiv.innerHTML = '<div class="label">Three-day forecast</div>'
                allDays.map(x => {
                    let symbol;
                    let highDegree = x.high;
                    let lowDegree = x.low;
                    let condition = x.condition
                    switch (condition) {
                        case 'Sunny': symbol = '☀'; break;
                        case 'Partly sunny': symbol = '⛅'; break;
                        case 'Overcast': symbol = '☁'; break;
                        case 'Rain': symbol = '☂'; break;
                    }

                    let upcomingSpan = createElement('span', 'upcoming');
                    let symbolSpan = createElement('span', 'symbol', symbol);
                    let tempSpan = createElement('span', 'forecast-data', `${lowDegree}°/${highDegree}`);
                    let typeWeatherSpan = createElement('span', 'forecast-data', condition);

                    upcomingSpan.appendChild(symbolSpan);
                    upcomingSpan.appendChild(tempSpan);
                    upcomingSpan.appendChild(typeWeatherSpan);
                    infoDiv.appendChild(upcomingSpan);
                })
                upcomingWeatherDiv.appendChild(infoDiv)
            })
    }



    function createElement(type, clas, text) {
        let element = document.createElement(type);
        if (clas !== '') {
            element.setAttribute('class', clas);
        }
        if (text != '') {
            element.textContent = text;
        }
        return element;
    }

}



attachEvents();