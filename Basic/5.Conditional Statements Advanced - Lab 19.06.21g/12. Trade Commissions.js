function solve(input) {
  let city = input[0];
  let sells = Number(input[1]);
  let sum = 0;
  switch (city) {
    case "Sofia":
      if (sells >= 0 && sells <= 500) {
        sum = sells * 0.05;
        console.log(sum.toFixed(2));
      } else if (sells > 500 && sells <= 1000) {
        sum = sells * 0.07;
        console.log(sum.toFixed(2));
      } else if (sells > 1000 && sells <= 10000) {
        sum = sells * 0.08;
        console.log(sum.toFixed(2));
      } else if (sells > 10000) {
        sum = sells * 0.12;
        console.log(sum.toFixed(2));
      } else {
        console.log("error");
      }
      break;
    case "Varna":
      if (sells >= 0 && sells <= 500) {
        sum = sells * 0.045;
        console.log(sum.toFixed(2));
      } else if (sells > 500 && sells <= 1000) {
        sum = sells * 0.075;
        console.log(sum.toFixed(2));
      } else if (sells > 1000 && sells <= 10000) {
        sum = sells * 0.1;
        console.log(sum.toFixed(2));
      } else if (sells > 10000) {
        sum = sells * 0.13;
        console.log(sum.toFixed(2));
      } else {
        console.log("error");
      }
      break;
    case "Plovdiv":
      if (sells >= 0 && sells <= 500) {
        sum = sells * 0.055;
        console.log(sum.toFixed(2));
      } else if (sells > 500 && sells <= 1000) {
        sum = sells * 0.08;
        console.log(sum.toFixed(2));
      } else if (sells > 1000 && sells <= 10000) {
        sum = sells * 0.12;
        console.log(sum.toFixed(2));
      } else if (sells > 10000) {
        sum = sells * 0.145;
        console.log(sum.toFixed(2));
      } else {
        console.log("error");
      }
      break;
    default :
    console.log("error");
  }
}
solve(["Sofia", "1500"]);
solve(["Plovdiv", "499.99"]);
solve(["Varna", "3874.50"]);
solve(["Kaspichan", "-50"]);
solve(["Varna", "500"]);
solve(["Plovdiv", "-20"]);
