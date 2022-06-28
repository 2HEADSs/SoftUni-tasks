function solve(input){
    let regexp = /([A-Z][a-z]+): (\d+)/g;
    let firstMatch = regexp.exec(input);
    let secondMatch = regexp.exec(input);
    console.log(firstMatch);
    console.log(secondMatch);
    console.log(firstMatch[0]) // Peter: 123 
    console.log(firstMatch[1]); // Peter
    console.log(firstMatch[2]); // 123
    console.log(input);
}
solve('Peter: 123 Mark: 456')