function solve(input) {
    let countJuniors = Number(input[0]);
    let countSeniors = Number(input[1]);
    let type = input[2];
    let sum = 0;

    switch(type){
        case "trail":
            sum = countJuniors * 5.50 + countSeniors * 7;
            break;
        case "cross-country":
            sum = countJuniors * 8 + countSeniors * 9.50;
            break;
        case "downhill":
            sum = countJuniors * 12.25 + countSeniors * 13.75;
            break;
        case "road":
            sum = countJuniors * 20 + countSeniors * 21.50;
            break;
    }
    if(countJuniors + countSeniors >= 50 && type === "cross-country"){
        sum *= 0.75;
    }
let total = sum * 0.95;
console.log(total.toFixed(2));
}
solve(["10", "20", "trail"]);
solve(["21", "26", "cross-country"]);
solve(["10", "10", "downhill"]);
solve(["3", "40", "road"]);
