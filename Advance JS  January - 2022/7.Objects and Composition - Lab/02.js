function solve(input) {
  let obj = {};
  for (let el of input) {
    let [city, townPopulation] = el.split(' <-> ');
    townPopulation = Number(townPopulation);
    if (!obj[city]) {
      obj[city] = townPopulation;
    } else {
      obj[city] += townPopulation;
    }
  }
  for(let town in obj){
      console.log(`${town} : ${obj[town]}`);
  }
}
solve([
  'Sofia <-> 1200000',
  'Montana <-> 20000',
  'New York <-> 10000000',
  'Washington <-> 2345000',
  'Las Vegas <-> 1000000',
]);
solve([
  'Istanbul <-> 100000',
  'Honk Kong <-> 2100004',
  'Jerusalem <-> 2352344',
  'Mexico City <-> 23401925',
  'Istanbul <-> 1000',
]);
