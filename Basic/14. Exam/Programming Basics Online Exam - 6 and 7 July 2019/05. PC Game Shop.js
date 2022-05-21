function solve(input) {
  let count = Number(input[0]);
  let hearthstone = 0;
  let fornite = 0;
  let overwatch = 0;
  let others = 0;
  for (let i = 1; i <= count; i++) {
    let current = input[i];
    if (current === "Hearthstone") {
      hearthstone++;
    } else if (current === "Fornite") {
      fornite++;
    } else if (current === "Overwatch") {
      overwatch++;
    } else {
      others++;
    }
  }
  hearthstone = (hearthstone / count) * 100;
  fornite = (fornite / count) * 100;
  overwatch = (overwatch / count) * 100;
  others = (others / count) * 100;
  console.log(`Hearthstone - ${hearthstone.toFixed(2)}%`);
  console.log(`Fornite - ${fornite.toFixed(2)}%`);
  console.log(`Overwatch - ${overwatch.toFixed(2)}%`);
  console.log(`Others - ${others.toFixed(2)}%`);
}
solve(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
solve(["3", "Hearthstone", "Diablo 2", "Star Craft 2"]);
