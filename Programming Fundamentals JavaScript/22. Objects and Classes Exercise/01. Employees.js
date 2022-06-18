function employee(arr) {
    for(let singleName of arr){
        let singlePerson = {
            name: singleName,
            personalNum: singleName.length
        }
        console.log(`Name: ${singlePerson.name} -- Personal Number: ${singlePerson.personalNum}`);
    }
}
employee([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
