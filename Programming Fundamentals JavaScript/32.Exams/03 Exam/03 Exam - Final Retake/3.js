function solve(input) {
    let n = Number(input.shift());
    let obj = {}
    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input.shift().split("|");
        mileage = Number(mileage);
        fuel = Number(fuel)
        obj[car] = {
            mileage: mileage,
            fuel: fuel,
        }
    }

    while (input[0] !== "Stop") {
        let [command, car, first, second] = input.shift().split(" : ");

        if (command === "Drive") {
            let distance = Number(first);
            let fuelNeed = Number(second);
            if (obj[car].fuel >= fuelNeed) {
                obj[car].mileage += distance;
                obj[car].fuel -= fuelNeed;
                console.log(`${car} driven for ${distance} kilometers. ${fuelNeed} liters of fuel consumed.`);
            } else {
                console.log(`Not enough fuel to make that ride`);
            }
            if (obj[car].mileage >= 100000) {
                console.log(`Time to sell the ${car}!`);
                delete obj[car];
            }
        } else if (command === "Refuel") {
            let fuelAdd = Number(first);
            if (obj[car].fuel + fuelAdd > 75) {
                fuelAdd = 75 - obj[car].fuel;
                obj[car].fuel = 75
                console.log(`${car} refueled with ${fuelAdd} liters`);
            } else {
                obj[car].fuel += fuelAdd;
                console.log(`${car} refueled with ${fuelAdd} liters`);
            }
        } else if (command === "Revert") {
            let kilometers = Number(first);
            if (obj[car].mileage - kilometers >= 10000) {
                obj[car].mileage -= kilometers;
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            } else {
                obj[car].mileage = 10000;
            }
        }
    }
    let keys = Object.keys(obj)
    let sorted = keys.sort((a, b) => {
        let mileageA = obj[a].mileage;
        let mileageB = obj[b].mileage;
        return mileageB - mileageA || a.localeCompare(b)
    });
    for(let el of sorted){
        console.log(`${el} -> Mileage: ${obj[el].mileage} kms, Fuel in the tank: ${obj[el].fuel} lt.`);
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