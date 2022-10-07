class VegetableStore {
    constructor(owner, location) {
        this.owner = owner,
            this.location = location,
            this.availableProducts = []
    }

    loadingVegetables(vegetables) {
        let vegyType = []
        for (let line of vegetables) {
            let [type, quantity, price] = line.split(' ');
            quantity = Number(quantity)
            price = Number(price)
            let qurrentAvailableProduct = this.availableProducts.find(x => x.type === type);

            if (!qurrentAvailableProduct) {
                this.availableProducts.push({ type, quantity, price })
                vegyType.push(type)
            }
            if (qurrentAvailableProduct) {
                qurrentAvailableProduct.quantity += quantity;
                if (qurrentAvailableProduct.price < price) {
                    qurrentAvailableProduct.price = price
                }
            }

        }
        return `Successfully added ${vegyType.join(', ')}`

    }
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;

        selectedProducts.forEach((el) => {
            let [type, quantity] = el.split(' ')

            let qurrentAvailableProduct = this.availableProducts.find((x) => x.type === type);

            if (!qurrentAvailableProduct) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            if (quantity > qurrentAvailableProduct.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }

            totalPrice += qurrentAvailableProduct.price * quantity

            qurrentAvailableProduct.quantity -= quantity;

        })
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable(type, quantity) {
        let isAvailableProduct = this.availableProducts.find((x) => x.type == type)

        if (!isAvailableProduct) {
            throw new Error(`${type} is not available in the store.`)
        }

        if (quantity > isAvailableProduct.quantity) {
            isAvailableProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        }

        isAvailableProduct.quantity -= quantity;
        return `Some quantity of the ${type} has been removed.`

    }
    revision() {
        let result = this.availableProducts.sort((a, b) => a.price - b.price)
            .reduce((acc, element) => {
                acc.push(`${element.type}-${element.quantity}-$${element.price}`);
                return acc;
            }, []);
        return `Available vegetables:\n${result.join('\n')}\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`
    }
}

'Available vegetables:\nCelery - 4.5 - $2.5\nBeans - 2 - $2.8\nOkra - 0 - $3.5\nThe owner of the store is Jerrie Munro, and the location is 1463 Pette Kyosheta, Sofia.'
'Available vegetables:\nCelery-4.5-$2.5\nBeans-2-$2.8\nOkra-0-$3.5\nThe owner of the store is Jerrie Munro, and the location is 1463 Pette Kyosheta, Sofia.'

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

