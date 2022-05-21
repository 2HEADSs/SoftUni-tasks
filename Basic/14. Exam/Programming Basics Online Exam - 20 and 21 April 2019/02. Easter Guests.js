function solve(input) {
    let guest = Number(input[0]);
    let budget = Number(input[1]);
    let needCakes = Math.ceil(guest/3);
    let eggs = guest * 2;
    let priceCakes = needCakes * 4;
    let priceEggs = eggs * 0.45;
    let sum = priceCakes + priceEggs;
    let difference = Math.abs(budget - sum);

    if(budget >= sum){
        console.log(`Lyubo bought ${needCakes} Easter bread and ${eggs} eggs.`);
        console.log(`He has ${difference.toFixed(2)} lv. left.`);
    }else{
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${difference.toFixed(2)} lv. more.`);
    }
}
solve(["10", "35"]);
solve(["9", "12"]);
