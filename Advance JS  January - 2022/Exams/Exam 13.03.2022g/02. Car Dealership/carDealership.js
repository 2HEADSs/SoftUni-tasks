class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0
    }

    addCar(model, horsepower, price, mileage) {
        if (model == "" || !Number.isInteger(horsepower) || horsepower < 0 || mileage < 0 || price < 0) {
            throw new Error(`Invalid input!`)
        }
        this.availableCars.push({ model, horsepower, price, mileage });

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {
        let currentCar = this.availableCars.find(x => x.model == model);

        if (!currentCar) {
            throw new Error(`${model} was not found!`)
        }

        let mileageOfCar = currentCar.mileage;
        if (mileageOfCar > desiredMileage) {
            let difference = mileageOfCar - desiredMileage

            if (difference <= 40000) {
                currentCar.price *= 0.95
            } else {
                currentCar.price *= 0.90
            }
        }
        this.totalIncome += currentCar.price;
        let index = this.availableCars.findIndex(x => x.model == model);
        this.availableCars.splice(index, 1)

        this.soldCars.push({ model, horsepower: currentCar.horsepower, soldPrice: currentCar.price })

        return `${model} was sold for ${currentCar.price.toFixed(2)}$`

    }

    currentCar() {
        let output = []
        output.push('-Available cars:')
        if (this.availableCars.length == 0) {
            return `There are no available cars`
        } else {
            for (let car of this.availableCars) {
                output.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`)
            }
        }
        return output.join('\n')
    }

    salesReport(criteria) {
        let result = [];
        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`)
        let soldCars = this.soldCars.length;
        result.push(`-${soldCars} cars sold:`)
        if (criteria === 'horsepower') {
            let sorted = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
            sorted.forEach(x => {
                result.push(`---${x.model} - ${x.horsepower.toFixed(2)} HP - ${x.soldPrice.toFixed(2)}$`)
            })
        } else if (criteria === 'model'){
            let sorted = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
            sorted.forEach(x => {
                result.push(`---${x.model} - ${x.horsepower.toFixed(2)} HP - ${x.soldPrice.toFixed(2)}$`)
            })
        } else {
            return `There are no available cars`
        }

        return result.join('\n')
    }

}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));

'-SoftAuto has a total income of 29600.00$\n-2 cars sold:\n---Mercedes C63 - 300.00 HP - 26100.00$\n---Toyota Corolla - 100.00 HP - 3500.00$' 
'-SoftAuto has a total income of 29600.00$\n-2 cars sold:\n---Mercedes C63 - 300 HP - 26100.00$\n---Toyota Corolla - 100 HP - 3500.00$'