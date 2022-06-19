function solve(input) {
  let countries = {};

  for (let row of input) {
    let currentRow = row.split(" > ");
    let country = currentRow[0];
    let city = currentRow[1];
    let price = Number(currentRow[2]);

    if (!countries.hasOwnProperty(country)) {
      countries[country] = {};
    }
    if (!countries[country].hasOwnProperty(city)) {
      countries[country][city] = price;
    }
    if (countries[country][city] > price) {
      countries[country][city] = price;
    }
  }
  let keys = Object.keys(countries);
  //keys  са имената на държавите
  keys.sort((a, b) => a.localeCompare(b));
  
  for (let item of keys) {
    //item  са имената на сортираните държави
    let sortedCities = Object.entries(countries[item]);
    console.log(sortedCities[0]);
    // sortedCities са тупълите - на всяка държава тупълите - дестинация и цена
    sortedCities.sort((a,b) => a[1]- b[1])
    // сортиране според цена ( елемент на 1ви индеск е цената в масива)
    
    let result = [];
    for(let city of sortedCities){
        result.push(city.join(' -> '));
    }
    console.log(`${item} -> ${result.join(" ")}`);
  }
}
solve([
  "Bulgaria > Sofia > 500",
  "Bulgaria > Sopot > 800",
  "France > Paris > 2000",
  "Albania > Tirana > 1000",
  "Bulgaria > Sofia > 200",
]);
