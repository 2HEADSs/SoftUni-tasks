function sumEvenNum(arr) {
    let sum = 0;

    for (const num of arr) {
        let current = Number(num)
        if(current % 2 === 0){
            sum += current
        }
    }
    console.log(sum);
}
sumEvenNum(["1", "2", "3", "4", "5", "6"]);
sumEvenNum(["3", "5", "7", "9"]);
sumEvenNum(["2", "4", "6", "8", "10"]);
