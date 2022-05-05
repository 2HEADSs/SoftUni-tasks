function solve(input) {
    let deposit = Number(input[0]);
    let time = Number(input[1]);
    let percentPerYear = Number(input[2]);
    let percentPerMonths = ((deposit * percentPerYear)/100)/12;

    let sum = deposit + percentPerMonths*time;
    console.log(sum);
}
solve(["200", "3", "5.7"]);
solve(["2350", "6", "7"]);
