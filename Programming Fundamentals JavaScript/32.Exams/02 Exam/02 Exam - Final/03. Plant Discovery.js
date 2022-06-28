function solve(input) {
  // parse first part of input, creating initial plant catalog
  //-determinate how many elements of input represent the catalog
  //- for each element of the input, create new catalog entry or update existing entry
  let actions = {
    Rate: rate,
    Update: update,
    Reset: reset,
  };

  let catalog = {};
  let n = Number(input.shift());

  for (let i = 0; i < n; i++) {
    let [name, rarity] = input.shift().split("<->");
    catalog[name] = {
      rarity: Number(rarity),
      raitings: [],
      avgRaiting: 0,
    };
  }

  while (input[0] != "Exhibition") {
    let [command, params] = input.shift().split(": ");
    let action = actions[command];
    action(params);
  }
  // parse second part of input, updating the catalog, according to commands
  //- for each remaining input element until "Exhibition":
  //-parse input to determine command
  //-  perform gicen command with given parameters

  //sort catalog
  //- convert catalog to array
  // - pass compare function into sorting operation
  // - return difference between  plnat's rarity
  // - if rarity is same : return difference plants average rating
  let sorted = Object.entries(catalog).sort(comparePlants);

  //print result
  // -print static line
  //- for each plant of the sorted array print stats

  console.log(`Plants for the exhibition:`);
  for(let [name,plant] of sorted){
    console.log(`- ${name}; Rarity: ${plant.rarity}; Rating: ${plant.avgRaiting.toFixed(2)}`);
  }
  

  function comparePlants(a, b) {
    let rarityA = a[1].rarity;
    let rarityB = b[1].rarity;

    let raitingA = a[1].avgRaiting;
    let raitingB = b[1].avgRaiting;

    return rarityB - rarityA || raitingB - raitingA;
  }

  
  // Rate
  //- parse parameters  to determine plnat name and raiting
  // if the plant exist - add given raiting as Number
  function rate(line) {
    let [name, raiting] = line.split(" - ");
    if (catalog[name] !== undefined) {
      let plant = catalog[name];
      plant.raitings.push(Number(raiting));

      let total = 0;
      for (let raiting of plant.raitings) {
        total += raiting;
      }
      plant.avgRaiting = total / plant.raitings.length;
    } else {
      console.log("error");
    }
  }
  // Update
  // - parse parameters  to determine plnat name and raiting
  // - if the plant exist - update as Number
  function update(line) {
    let [name, rarity] = line.split(" - ");
    if (catalog[name] !== undefined) {
      let plant = catalog[name];
      plant.rarity = Number(rarity);
    } else {
      console.log("error");
    }
  }
  //Reset
  // - if the plant exist remove all raiting
  function reset(name) {
    if (catalog[name] !== undefined) {
      let plant = catalog[name];
      plant.raitings.length = 0;
      plant.avgRaiting = 0;
    } else {
      console.log("error");
    }
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
