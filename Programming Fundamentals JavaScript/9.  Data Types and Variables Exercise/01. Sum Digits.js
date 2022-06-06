function sumDigits(num){
    let numAsString = num.toString()
    let sum = 0;
    let stringL = numAsString.length
    for (let i = 0; i < stringL; i++) {
        let current = +numAsString[i];
        sum += current;
    }
    console.log(sum);
}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);