class ChristmasDinner {
    constructor(budget) {
        budget = Number(budget);
        if (budget < 0) {
            throw new Error(`The budget cannot be a negative number`)
        }
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guest = {}
    }

    shopping(product) {
        let [type, price] = product;
        if (this.budget < price) {
            throw new Error(`Not enough money to buy this product`)
        }
        this.products.push(type)
        this.budget -= price;
        return `You have successfully bought ${type}!`
    }
    recipes(recipe) {
        recipe.productsList.forEach(product => {
            let isAvailable = this.products.some(x => x === product);

            if (!isAvailable) {
                throw new Error(`We do not have this product`)
            }
        });

        this.dishes.push(recipe);
        return `${recipe.recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        let isAvailableDish = this.dishes.some(x => x.recipeName === dish)
        if (!isAvailableDish) {
            throw new Error(`We do not have this dish`)
        }

        if (this.guest[name]) {
            throw new Error(`This guest has already been invited`)
        }

        this.guest[name] = dish;
        return `You have successfully invited ${name}!`
    }
    showAttendance() {
        let output = [];

        for (let guestKey in this.guest) {
            let name = guestKey;
            let dish = this.guest[name];
            let products = this.dishes.find(x => x.recipeName === dish).productsList

            output.push(`${name} will eat ${dish}, which consists of ${products.join(', ')}`)
        }
        return output.join('\n')
    }

}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

