function solve(input) {
  let totalDays = Number(input[0]);
  let totalFood = Number(input[1]);
  let dogFood = 0;
  let catFood = 0;
  let buscuits = 0;
  let dayFood = 0;
  let day = 0;
  for (let i = 2; i < input.length - 1; i++) {
    let current = Number(input[i]);
    dogFood += current;
    dogFoodDay = current;
    i++;
    current = Number(input[i]);
    catFood += current;
    catFoodDay = current;
    day++;

    dayFood = dogFoodDay + catFoodDay;
    if (day % 3 === 0) {
      buscuits += dayFood * 0.1;
    }
  }
  let sumFood = dogFood + catFood;
  let percentAll = (sumFood / totalFood) * 100;
  let percentDog = (dogFood / sumFood) * 100;
  let percentCat = (catFood / sumFood) * 100;
  console.log(`Total eaten biscuits: ${Math.floor(buscuits)}gr.`);
  console.log(`${percentAll.toFixed(2)}% of the food has been eaten.`);
  console.log(`${percentDog.toFixed(2)}% eaten from the dog.`);
  console.log(`${percentCat.toFixed(2)}% eaten from the cat.`);
}
solve(["3", "1000", "300", "20", "100", "30", "110", "40"]);
solve(["3", "500", "100", "30", "110", "25", "120", "35"]);
