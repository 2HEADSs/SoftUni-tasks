class ChristmasDinner {
    constructor(budget) {
        if (budget < 0) {
            throw new Error(`The budget cannot be a negative number`);
        }

        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {}

    }

    shopping(product) {
        let [qurrentProduct, price] = product;
        price = Number(price);

        if (this.budget < price) {
            throw new Error(`Not enough money to buy this product`);
        } else {
            this.products.push(qurrentProduct);
            this.budget -= price;
            return `You have successfully bought ${qurrentProduct}!`
        }

    }
    recipes(recipe) {
        let isTrue = false;
        let { recipeName, productsList } = recipe;
        productsList.forEach(element => {
            if (this.products.includes(element)) {
                isTrue = true;
            }
        });
        if (isTrue) {
            this.dishes.push(recipe);
            return `${recipeName} has been successfully cooked!`
        } else {
            throw new Error(`We do not have this product`)
        }
    }
    inviteGuests(name, dish) {
        if (!this.guests[name]) {
            throw new Error(`We do not have this dish`);
        } else if (this.guests.hasOwnProperty(name)) {
            return "This guest has already been invited"
        } else {
            this.guests[name] = dish
            return `You have successfully invited ${name}!`

        }
    }
    showAttendance() {
        let keys = Object.entries(this.guests);
        for (let [firstName, currentDish] of keys) {
            `${firstName} will eat ${currentDish}, which consists of ${this.guests[firstName].products}`
        }
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

