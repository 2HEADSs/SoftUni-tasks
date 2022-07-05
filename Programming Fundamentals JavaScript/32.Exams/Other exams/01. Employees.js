function solve(input) {
  let obj = {};
  for (let el of input) {
    obj[el] = el.length
  }
  let keys = Object.keys(obj);

  for(let key of keys){
      console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
  }
}
solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
