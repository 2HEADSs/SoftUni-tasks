function solve(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let totalPercent = percent * 0.01
    let square = length * width * height;
    let water = square * 0.001;
    let total = water * (1-totalPercent);
    console.log(total);
}
solve(["85", "75", "47", "17"]);
solve(["105", "77", "89", "18.5"]);

// 1.	Дължина в см –число в интервала [10 … 500]
// 2.	Широчина в см –число в интервала [10 … 300]
// 3.	Височина в см –число в интервала [10… 200]
// 4.	Процент  –число в интервала [0.000 … 100.000]
