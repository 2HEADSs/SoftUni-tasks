function solve (arr) {
    let countries = {};
 
    for (let el of arr) {
        let currentEl = el.split(' > ');
 
        if (countries.hasOwnProperty(currentEl[0])) {
            if (countries[currentEl[0]].hasOwnProperty(currentEl[1])) {
                if (countries[currentEl[0]][currentEl[1]] > currentEl[2]) {
                    countries[currentEl[0]][currentEl[1]] = currentEl[2];
                }
            } else {
                countries[currentEl[0]][currentEl[1]] = {};
                countries[currentEl[0]][currentEl[1]] = currentEl[2];
            }
        } else {
            countries[currentEl[0]] = {};
            countries[currentEl[0]][currentEl[1]] = currentEl[2];
        }
    }
 
    let countriesEntries = Object.entries(countries);
    let sortedCountries = countriesEntries.sort((a, b) => a[0].localeCompare(b[0]));
 
    for (let countries of sortedCountries) {
        let townEntries = Object.entries(countries[1]);
        let sortedTowns = townEntries.sort((a, b) => Number(a[1]) - Number(b[1]));
 
        let townsToString = sortedTowns.map((el) => {
            return el.join(' -> ');
        });
 
        let towns = townsToString.join(' ');
 
        console.log(`${countries[0]} -> ${towns}`);
    }
}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200",
  ]);