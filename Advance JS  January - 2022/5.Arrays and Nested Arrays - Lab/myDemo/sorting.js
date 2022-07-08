let arr = [];
//normal sorting
while (arr.length < 7) {
    let x = Math.random() * 2134;
    if (x > 1) {
        arr.push(Math.ceil(x));
    }
}
console.log(arr);

let sort = arr.sort((a, b) => a - b);

console.log(sort);
console.log(arr);
explanation


// sorting Alphabeticly
let names = ['Pavel', 'Anabel', 'Stefan', 'Zhivomir'];

let sortedNames = names.sort((a, b) => a.localeCompare(b));

console.log(names);

