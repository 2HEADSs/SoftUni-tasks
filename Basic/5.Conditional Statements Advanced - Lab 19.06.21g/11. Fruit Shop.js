function solve(input) {
  let fruit = input[0];
  let day = input[1];
  let count = Number(input[2]);
  let sum = 0;
  if (
    day === "Monday" ||
    day === "Tuesday" ||
    day === "Wednesday" ||
    day === "Thursday" ||
    day === "Friday"
  ) {
    switch (fruit) {
      case "banana":
        sum = count * 2.5;
        console.log(sum.toFixed(2));
        break;
      case "apple":
        sum = count * 1.2;
        console.log(sum.toFixed(2));
        break;
      case "orange":
        sum = count * 0.85;
        console.log(sum.toFixed(2));
        break;
      case "grapefruit":
        sum = count * 1.45;
        console.log(sum.toFixed(2));
        break;
      case "kiwi":
        sum = count * 2.7;
        console.log(sum.toFixed(2));
        break;
      case "pineapple":
        sum = count * 5.5;
        console.log(sum.toFixed(2));
        break;
      case "grapes":
        sum = count * 3.85;
        console.log(sum.toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else if (day === "Saturday" || day === "Sunday") {
    switch (fruit) {
      case "banana":
        sum = count * 2.7;
        console.log(sum.toFixed(2));
        break;
      case "apple":
        sum = count * 1.25;
        console.log(sum.toFixed(2));
        break;
      case "orange":
        sum = count * 0.9;
        console.log(sum.toFixed(2));
        break;
      case "grapefruit":
        sum = count * 1.6;
        console.log(sum.toFixed(2));
        break;
      case "kiwi":
        sum = count * 3;
        console.log(sum.toFixed(2));
        break;
      case "pineapple":
        sum = count * 5.6;
        console.log(sum.toFixed(2));
        break;
      case "grapes":
        sum = count * 4.2;
        console.log(sum.toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  }else{
    console.log("error");
  }
}
solve(["apple", "Tuesday", "2"]);
solve(["orange", "Sunday", "3"]);
solve(["kiwi", "Monday", "2.5"]);
solve(["grapes", "Saturday", "0.5"]);
solve(["tomato", "Monday", "0.5"]);
