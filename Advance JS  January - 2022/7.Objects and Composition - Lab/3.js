function cityTaxes(name, population, treasury) {
  let obj = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      obj.treasury += population * obj.taxRate;
    },
    applyGrowth(percentage) {
      percentage /= 100;
      obj.population *= percentage  + 1;
    },
    applyRecession(percentage) {
      percentage /= 100;
      obj. treasury *= 1 - percentage ;
    },
  };
  return obj
}
// const city = cityTaxes('Tortuga', 7000, 15000);
// console.log(city);

const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
