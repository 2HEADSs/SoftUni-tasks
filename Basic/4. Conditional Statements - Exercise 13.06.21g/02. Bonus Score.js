function solve(input) {
    let score = Number(input[0]);
    let bonus = 0;
    if(score <= 100){
        bonus = 5;
    }else if (score >100 && score <=1000){
        bonus = score * 0.20;
    }else if( score >1000){
        bonus = score * 0.10;
    }
    if(score % 2 === 0 ){
        bonus += 1;
    }else if( score % 10 === 5){
        bonus += 2;
    }
    total = score + bonus;
    console.log(bonus);
    console.log(total);
}
solve(["20"]);
solve(["175"]);
solve(["2703"]);
