function solve(input) {
  let index = 0;
  let currant = input[index];
  let best = "";
  let maxPoint = 0;

  while (currant !== "END") {
    let player = currant;
    index++;
    currant = Number(input[index]);
    if (currant > maxPoint) {
      maxPoint = currant;
      best = player;
    }
    if (maxPoint >= 10) {
      break;
    }
    index++;
    currant = input[index];
  }
  console.log(`${best} is the best player!`);
  if(maxPoint>=3){
      console.log(`He has scored ${maxPoint} goals and made a hat-trick !!!`);
  }else{
      console.log(`He has scored ${maxPoint} goals.`);
  }
}
solve(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
solve(["Silva", "5", "Harry Kane", "10"]);
solve(["Petrov", "2", "Drogba", "11"]);
