function solve(input) {
  let name = input[0];
  let countSeason = Number(input[1]);
  let countEpisodes = Number(input[2]);
  let time = Number(input[3]);

  let timeCommercial = time * 0.2;
  let extraTime = countSeason * 10;
  let sumTimeEpisod = time + timeCommercial;
  let total = countSeason * countEpisodes * sumTimeEpisod + extraTime;
  console.log(
    `Total time needed to watch the ${name} series is ${Math.floor(
      total
    )} minutes.`
  );
}
solve(["Lucifer", "3", "18", "55"]);
solve(["Game of Thrones", "7", "10", "50"]);
