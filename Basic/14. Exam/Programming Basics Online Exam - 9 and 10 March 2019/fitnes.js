function solve(input) {
  let index = 0;
  let visitors = Number(input[index]);
  index++;
  let back = 0;
  let chest = 0;
  let legs = 0;
  let abs = 0;
  let bar = 0;
  let shake = 0;
  let peopleTrain = 0;
  let peopleBuy = 0;

  for (let i = 1; i <= visitors; i++) {
    let current = input[index];
    index++;
    switch (current) {
      case "Back":
        back++;
        peopleTrain++;
        break;
      case "Chest":
        chest++;
        peopleTrain++;
        break;
      case "Legs":
        legs++;
        peopleTrain++;
        break;
      case "Abs":
        abs++;
        peopleTrain++;
        break;
      case "Protein bar":
        bar++;
        peopleBuy++;
        break;
      case "Protein shake":
        shake++;
        peopleBuy++;
        break;
    }
  }
  peopleTrain = (peopleTrain / visitors) * 100;
  peopleBuy = (peopleBuy / visitors) * 100;
  console.log(`${back} - back`);
  console.log(`${chest} - chest`);
  console.log(`${legs} - legs`);
  console.log(`${abs} - abs`);
  console.log(`${shake} - protein shake`);
  console.log(`${bar} - protein bar`);
  console.log(`${peopleTrain.toFixed(2)}% - work out`);
  console.log(`${peopleBuy.toFixed(2)}% - protein`);
}
solve([
  "10",
  "Back",
  "Chest",
  "Legs",
  "Abs",
  "Protein shake",
  "Protein bar",
  "Protein shake",
  "Protein bar",
  "Legs",
  "Abs",
]);
solve([
  "7",
  "Chest",
  "Back",
  "Legs",
  "Legs",
  "Abs",
  "Protein shake",
  "Protein bar",
]);
