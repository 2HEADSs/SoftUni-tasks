function solve(input) {
  let photoTime = Number(input[0]);
  let countCsenes = Number(input[1]);
  let time = Number(input[2]);
  let preparation = photoTime * 0.15;
  let total = countCsenes * time + preparation;
  let difference = 0;
  if (photoTime >= total) {
    difference = photoTime - total;
    console.log(
      `You managed to finish the movie on time! You have ${Math.ceil(
        difference
      )} minutes left!`
    );
  } else {
    difference = total - photoTime;
    console.log(
      `Time is up! To complete the movie you need ${Math.ceil(
        difference
      )} minutes.`
    );
  }
}
solve(["120", "10", "11"]);
solve(["60", "15", "3"]);
