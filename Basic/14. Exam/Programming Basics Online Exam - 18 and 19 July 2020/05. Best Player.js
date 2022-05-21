function solve(input) {
    let index = 0;
    let current = input[index];
    let bestPlayer = "";
    let score = 0;
    let player = "";
    let bestScore = 0;
    let isHetTrick = false;
  
    while (current !== "END") {
      player = input[index];
      index++;
      score = Number(input[index]);
      if (score > bestScore) {
        bestScore = score;
        bestPlayer = player;
        if (bestScore >= 3) {
          isHetTrick = true;
        }
        if (bestScore >= 10) {
          break;
        }
      }
      index++;
      current = input[index];
    }
    console.log(`${bestPlayer} is the best player!`);
    if (isHetTrick === true) {
      console.log(`He has scored ${bestScore} goals and made a hat-trick !!!`);
    } else {
      console.log(`He has scored ${bestScore} goals.`);
    }
  }
solve(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);
solve(["Silva", "5", "Harry Kane", "10"]);
solve(["Rooney", "1", "Junior", "2", "Paolinio", "2", "END"]);
