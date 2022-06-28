function solve(input) {
    let n = Number(input.shift());
    let obj = {}
    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift().split("<->");
        obj[plant] = {
            rarity: Number(rarity),
            raitings: [],
            avgRaiting: 0
        }
    }
    while (input[0] !== "Exhibition") {
        let [command, plant] = input.shift().split(": ");
        if (command === "Rate") {
            let [name, raiting] = plant.split(" - ");
            if (!obj.hasOwnProperty(name)) {
                console.log(`error`);
            } else {
                raiting = Number(raiting)
                obj[name].raitings.push(raiting);

                let total = 0;
                for (let num of obj[name].raitings) {
                    total += num
                }
                obj[name].avgRaiting = total / obj[name].raitings.length
            }
        } else if (command === "Update") {
            let [name, newRarity] = plant.split(" - ");
            if (!obj.hasOwnProperty(name)) {
                console.log("error");
            } else {
                newRarity = Number(newRarity);
                obj[name].rarity = newRarity
            }
        } else if (command === "Reset") {
            let name = plant;
            if (!obj.hasOwnProperty(name)) {
                console.log("error");
            } else {
                obj[name].raitings.length = [];
                obj[name].avgRaiting = 0
            }
        }
    }
    let entries = Object.entries(obj);
    let sorted = entries.sort((a, b) => {
        let rarityA = a[1].rarity;
        let rarirtyB = b[1].rarity;

        let avgA = a[1].avgRaiting;
        let avgB = b[1].avgRaiting
        return rarirtyB - rarityA || avgB - avgA
    })
    console.log(`Plants for the exhibition:`);
    for (let el of sorted) {
        console.log(`- ${el[0]}; Rarity: ${obj[el[0]].rarity}; Rating: ${obj[el[0]].avgRaiting.toFixed(2)}`);
    }
}
// raitings:
//console.log(a[1].avgRaiting);
//console.log(b[1].avgRaiting);

//rarity:
// console.log(a[1].rarity);
// console.log(b[1].rarity);
solve(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
solve(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
