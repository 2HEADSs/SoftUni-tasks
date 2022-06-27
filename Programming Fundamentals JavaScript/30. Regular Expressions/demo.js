let text = 'Peter: 123 Mark: 456';
let regexp = /([A-Z][a-z]+): (\d+)/g;
let matches = text.match(regexp);
console.log(matches);

console.log(matches.length); // 2
console.log(matches[0]); // Peter: 123
console.log(matches[1]); // Mark: 456

let text = 'Peter: 123 Mark: 456';
let regexp = /([A-Z][a-z]+): (\d+)/g;
let firstMatch = regexp.exec(text);
let secondMatch = regexp.exec(text);
console.log(firstMatch);
console.log(secondMatch);
// console.log(firstMatch[0]) // Peter: 123 
// console.log(firstMatch[1]); // Peter
// console.log(firstMatch[2]); // 123