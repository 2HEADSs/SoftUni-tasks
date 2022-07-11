function solve(input) {
  let towns = {};
  for (let info of input) {
    let [town, populationText] = info.split(' <-> ');
    let population = Number(populationText);

    if (!towns[town]) {
      //достъпваме град в обекта - ако го няма ще върне undefined
      towns[town] = 0;
    }

    towns[town] += population;
  }
  for (let town in towns) {
    console.log(`${town} : ${towns[town]}`);
  }
}
// solve([
//   'Sofia <-> 1200000',
//   'Montana <-> 20000',
//   'New York <-> 10000000',
//   'Washington <-> 2345000',
//   'Las Vegas <-> 1000000',
// ]);
solve([
  'Istanbul <-> 100000',
  'Honk Kong <-> 2100004',
  'Jerusalem <-> 2352344',
  'Mexico City <-> 23401925',
  'Istanbul <-> 1000',
]);
