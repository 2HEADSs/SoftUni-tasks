function solve(input) {
  let type = input[0];
  let a = Number(input[1]);
  let b = Number(input[2]);
  let s = 0
  if(type === "square"){
      s = a * a;
  }else if(type === "rectangle"){
      s = a * b;
  }else if (type === "circle"){
      s = Math.PI * a * a;
  }else if(type === "triangle"){
      s = (a * b ) / 2;
  }
  console.log(s.toFixed(3));
}
solve(["square", "5"]);
solve(["rectangle", "7", "2.5"]);
solve(["circle", "6"]);
solve(["triangle", "4.5", "20"]);
