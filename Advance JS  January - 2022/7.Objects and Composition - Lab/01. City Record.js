function solve(name, population, treasury) {
  //First way
    let record = {
      name: name,
      population: population,
      treasury: treasury,
    };

  //Second way

  //   let record = {};

  //   record.name = name;
  //   record.population = population;
  //   record.treasury = treasury;

  //Short way = shortHand
//   let record = { name, population, treasury };

  return record;
}
solve('Tortuga', 7000, 15000);
