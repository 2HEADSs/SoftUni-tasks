function solve(input) {
    let won = 0;
    let lost = 0;
    let drawn = 0;
    for(let i = 0; i < 3; i++) {
        let game = input[i].split(":");
        game[0] > game[1] ? won++ : game[0] < game[1] ? lost++ : drawn++;
    }
    console.log(`Team won ${won} games.\nTeam lost ${lost} games.\nDrawn games: ${drawn}`);
}
solve(["3:1", "0:2", "0:0"]);
console.log("---------------------");
solve(["4:2", "0:3", "1:0"]);
console.log("---------------------");
solve(["0:2", "0:1", "3:3"]);