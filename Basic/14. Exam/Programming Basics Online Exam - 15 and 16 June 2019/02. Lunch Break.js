function solve(input) {
  let name = input[0];
  let timeEpisod = Number(input[1]);
  let timeBreak = Number(input[2]);
  let difference = 0;

  let lunchTime = timeBreak / 8;
  let timeRest = timeBreak / 4;
  let freeTime = timeBreak - lunchTime - timeRest;
  if (freeTime >= timeEpisod) {
    difference = freeTime - timeEpisod;
    console.log(
      `You have enough time to watch ${name} and left with ${Math.ceil(
        difference
      )} minutes free time.`
    );
  } else {
    difference = timeEpisod - freeTime;
    console.log(
      `You don't have enough time to watch ${name}, you need ${Math.ceil(
        difference
      )} more minutes.`
    );
  }
}
solve(["Game of Thrones", "60", "96"]);
solve(["Teen Wolf", "48", "60"]);
