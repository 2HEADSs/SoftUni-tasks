function solve(input){
    let regexp = /([A-Z][a-z]+): (\d+)/g;
    let matches = input.match(regexp);
    console.log(matches);
    console.log(input);
    
    console.log(matches.length); // 2
    console.log(matches[0]); // Peter: 123
    console.log(matches[1]); // Mark: 456
}
solve('Peter: 123 Mark: 456')