function solve(input) {
  let n = Number(input.shift());
  let catalog = {};

  for (let i = 0; i < n; i++) {
    let [name, rarity] = input.shift().split("<->");
    catalog[name] = {
      rarity: rarity,
      raitings: [],
      avgRaiting: 0,
    };
  }

  while (input[0] !== "Exhibition") {
    let [command, plant] = input.shift().split(": ");

    if (command === "Rate") {
      let [name, raiting] = plant.split(" - ");
      if (catalog[name] !== undefined) {
        catalog[name].raitings.push(Number(raiting));

        let total = 0;
        for (let singleRate of catalog[name].raitings) {
          total += singleRate;
        }
        catalog[name].avgRaiting = total / catalog[name].raitings.length;
      } else {
        console.log("error");
      }
    } else if (command === "Update") {
      let [name, rarity] = plant.split(" - ");
      if (catalog[name] !== undefined) {
        catalog[name].rarity = Number(rarity);
      } else {
        console.log("erroe");
      }
    } else if (command === "Reset") {
      if (catalog[plant] !== undefined) {
        catalog[plant].raitings.length = 0;
        catalog[plant].avgRaiting = 0;
      } else {
        console.log("error");
      }
    }
  }
  let entries = Object.entries(catalog);
  let sorted = entries.sort((a, b) => {
    let rarityA = a[1].rarity;
    let rarityB = b[1].rarity;

    let raitingA = a[1].avgRaiting;
    let raitingB = b[1].avgRaiting;;

    return rarityB - rarityA || raitingB - raitingA;
  });
  console.log("Plants for the exhibition:");
  for (let plant of sorted) {
    console.log(
      `- ${plant[0]}; Rarity: ${
        plant[1].rarity
      }; Rating: ${plant[1].avgRaiting.toFixed(2)}`
    );
  }
}
solve([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);
solve([
  "2",
  "Candelabra<->10",
  "Oahu<->10",
  "Rate: Oahu - 7",
  "Rate: Candelabra - 6",
  "Exhibition",
]);
