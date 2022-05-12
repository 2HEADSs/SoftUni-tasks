function solve(input) {
  let degrees = Number(input[0]);
  let time = input[1];

  switch (time) {
    case "Morning":
      if (degrees <= 18) {
        console.log(
          `It's ${degrees} degrees, get your Sweatshirt and Sneakers.`
        );
      } else if (degrees <= 24) {
        console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
      } else {
        console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
      }
      break;
    case "Afternoon":
      if (degrees <= 18) {
        console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
      } else if (degrees <= 24) {
        console.log(`It's ${degrees} degrees, get your T-Shirt and Sandals.`);
      } else {
        console.log(
          `It's ${degrees} degrees, get your Swim Suit and Barefoot.`
        );
      }
      break;
    case "Evening":
      console.log(`It's ${degrees} degrees, get your Shirt and Moccasins.`);
      break;
  }
}
solve(["16", "Morning"]);
solve(["22", "Afternoon"]);
solve(["28", "Evening"]);
