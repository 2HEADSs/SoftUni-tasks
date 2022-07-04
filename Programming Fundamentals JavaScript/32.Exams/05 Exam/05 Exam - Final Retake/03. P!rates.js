function solve(input) {
  let obj = {};
  while (input[0] !== "Sail") {
    let [town, population, gold] = input.shift().split("||");
    if (obj.hasOwnProperty(town)) {
      obj[town].population += Number(population);
      obj[town].gold += Number(gold);
    } else {
      obj[town] = {
        population: Number(population),
        gold: Number(gold),
      };
    }
  }
  input.shift();
  while (input[0] !== "End") {
    let [command, town, num1, num2] = input.shift().split("=>");
    num1 = Number(num1);
    num2 = Number(num2);
    if (command === "Plunder") {
      console.log(
        `${town} plundered! ${num2} gold stolen, ${num1} citizens killed.`
      );
      obj[town].population -= num1;
      obj[town].gold -= num2;
      if (obj[town].population <= 0 || obj[town].gold <= 0) {
        console.log(`${town} has been wiped off the map!`);
        delete obj[town];
      }
    } else if (command === "Prosper") {
      if (num1 < 0) {
        console.log(`Gold added cannot be a negative number!`);
      } else {
        obj[town].gold += num1;
        console.log(
          `${num1} gold added to the city treasury. ${town} now has ${obj[town].gold} gold.`
        );
      }
    }
  }
  let entries = Object.entries(obj);

  let sorted = entries.sort((a, b) => {
    let nameA = a[0];
    let nameB = b[0];

    let goldA = a[1].gold;
    let goldB = b[1].gold;

    return goldB - goldA || nameA.localeCompare(nameB);
  });
  let count = sorted.length;
  if (count <= 0) {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
    for (let el of sorted) {
      console.log(
        `${el[0]} -> Population: ${el[1].population} citizens, Gold: ${el[1].gold} kg`
      );
    }
  } else {
    console.log(
      `Ahoy, Captain! There are ${count} wealthy settlements to go to:`
    );
    for (let el of sorted) {
      console.log(
        `${el[0]} -> Population: ${el[1].population} citizens, Gold: ${el[1].gold} kg`
      );
    }
  }
}

solve([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
solve([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
