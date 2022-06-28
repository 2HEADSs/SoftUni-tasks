function solve(input) {
  let numPlants = input.shift();
  let plantsArr = {};

  for (let i = 0; i < numPlants; i++) {
    let [plant, rarity] = input.shift().split("<->");

    plantsArr[plant] = {
      rarity: rarity,
      rating: 0,
    };
  }
  let ratingCount = 0;
  while (input[0] !== "Exhibition") {
    let tokens = input.shift().split(" ");
    let command = tokens[0];

    if (tokens[1]) {
      if (tokens[0] === "Rate:") {
        rate(tokens[1], Number(tokens[3]));
      } else if (tokens[0] === "Update:") {
        update(tokens[1], Number(tokens[3]));
      } else if (tokens[0] === "Reset:") {
        reset(tokens[1]);
      }
    } else {
      console.log("error");
    }
  }

  function rate(plant, rating) {
    if (plantsArr[plant].rating == 0) {
      plantsArr[plant].rating += rating;
    } else {
      plantsArr[plant].rating = (plantsArr[plant].rating + rating) / 2;
    }
  }
  function update(plant, rarity) {
    plantsArr[plant].rarity = rarity;
  }
  function reset(plant) {
    plantsArr[plant].rating = 0.0;
  }

  let sorted = Object.entries(plantsArr).sort(
    (a, b) => b[1].rarity - a[1].rarity || b[1].rating - a[1].rating
  );

  console.log("Plants for the exhibition:");
  for (kvp of sorted) {
    console.log(
      `- ${kvp[0]}; Rarity: ${kvp[1].rarity}; Rating: ${kvp[1].rating.toFixed(
        2
      )}`
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
