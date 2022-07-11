let phoneBook = {
    'Ivan Petrov': '12232132132',
    'Georgi Georgiev': '81239874324', 
    'Pavel Pavlov': '321321009'
};
//if the key is made from two or more word we use quotes(''/"")
phoneBook['Ivan Petrov'] = '0896023054'
console.log(phoneBook['Ivan Petrov']);

//Iteration - FOR IN
for(key in phoneBook){
    // console.log(key);
    // console.log(phones[key]);
    console.log(`${key} - ${phoneBook[key]}`);

}

// Iterations = method
let names = Object.keys(phoneBook);
let phones = Object.values(phoneBook)
console.log(names);
console.log(phones);

Object.keys(phoneBook).forEach(x => {
    console.log(`${x} - ${phoneBook[x]}`);
})

let entries = Object.entries(phoneBook);
console.log(entries);