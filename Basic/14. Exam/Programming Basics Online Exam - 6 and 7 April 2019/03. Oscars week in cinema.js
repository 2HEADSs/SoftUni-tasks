function solve(input) {
  let movie = input[0];
  let type = input[1];
  let count = Number(input[2]);
  let sum = 0;

  switch (movie) {
    case "A Star Is Born":
      switch (type) {
        case "normal":
          sum = count * 7.5;
          break;
        case "luxury":
          sum = count * 10.5;
          break;
        case "ultra luxury":
          sum = count * 13.5;
          break;
      }
      break;
    case "Bohemian Rhapsody":
      switch (type) {
        case "normal":
          sum = count * 7.35;
          break;
        case "luxury":
          sum = count * 9.45;
          break;
        case "ultra luxury":
          sum = count * 12.75;
          break;
      }
      break;
    case "Green Book":
      switch (type) {
        case "normal":
          sum = count * 8.15;
          break;
        case "luxury":
          sum = count * 10.25;
          break;
        case "ultra luxury":
          sum = count * 13.25;
          break;
      }
      break;
    case "The Favourite":
      switch (type) {
        case "normal":
          sum = count * 8.75;
          break;
        case "luxury":
          sum = count * 11.55;
          break;
        case "ultra luxury":
          sum = count * 13.95;
          break;
      }
      break;
  }
  console.log(`${movie} -> ${sum.toFixed(2)} lv.`);
}
solve(["A Star Is Born", "luxury", "42"]);
solve(["Green Book", "normal", "63"]);
solve(["The Favourite", "ultra luxury", "34"]);
