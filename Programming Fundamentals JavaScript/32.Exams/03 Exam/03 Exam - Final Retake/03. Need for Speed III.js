function solve(input) {
  let n = Number(input.shift());
  let obj = {};

  for (let i = 0; i < n; i++) {
    let [car, mileage, fuel] = input.shift().split("|");
    obj[car] = {
      mileage: Number(mileage),
      fuel: Number(fuel),
    };
  }
  while (input[0] !== "Stop") {
    let [command, car, num1, num2] = input.shift().split(" : ");
    num1 = Number(num1);
    num2 = Number(num2);
    if (command === "Drive") {
      if (num2 <= obj[car].fuel) {
        obj[car].mileage += num1;
        obj[car].fuel -= num2;
        console.log(
          `${car} driven for ${num1} kilometers. ${num2} liters of fuel consumed.`
        );
      } else {
        console.log(`Not enough fuel to make that ride`);
      }
      if (obj[car].mileage >= 100000) {
        console.log(`Time to sell the ${car}!`);
        delete obj[car];
      }
    } else if (command === "Refuel") {
      let maximumCapacity = 75;
      if (obj[car].fuel + num1 > maximumCapacity) {
        let difference = maximumCapacity - obj[car].fuel;
        console.log(`${car} refueled with ${difference} liters`);
        obj[car].fuel = maximumCapacity;
      } else {
        console.log(`${car} refueled with ${num1} liters`);
        obj[car].fuel += num1;
      }
    } else if (command === "Revert") {
      if (obj[car].mileage - num1 < 10000) {
        obj[car].mileage = 10000;
      } else {
        obj[car].mileage -= num1;
        console.log(`${car} mileage decreased by ${num1} kilometers`);
      }
    }
  }
  let entries = Object.entries(obj);
  let sorted = entries.sort((a, b) => {
    let nameA = a[0];
    let nameB = b[0];

    let mileageA = a[1].mileage;
    let mileageB = b[1].mileage;

    return mileageB - mileageA || nameA.localeCompare(nameB);
  });
  for (let el of sorted) {
    console.log(
      `${el[0]} -> Mileage: ${el[1].mileage} kms, Fuel in the tank: ${el[1].fuel} lt.`
    );
  }
}
solve([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
