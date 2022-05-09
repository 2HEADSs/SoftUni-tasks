function solve(input) {
  let distance = Number(input[0]);
  let entrance = input[1];
  let exit = input[2];
  if (entrance === "mm" && exit === "m") {
    distance /= 1000;
  } else if (entrance === "m" && exit === "cm") {
    distance *= 100;
  } else if (entrance === "cm" && exit === "mm") {
    distance *= 10;
  } else if (entrance === "mm" && exit === "cm") {
    distance /= 10;
  }else if (entrance === "cm" && exit === "m"){
      distance /= 100;
  }else if (entrance === "m" && exit === "mm"){
      distance *= 1000;
  }
  console.log(distance.toFixed(3));
}
solve(["12", "mm", "m"]);
solve(["150", "m", "cm"]);
solve(["45", "cm", "mm"]);
