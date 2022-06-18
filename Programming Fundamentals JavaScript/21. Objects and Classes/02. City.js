function solve(input) {
    let entries = Object.entries(input);
    for(let[key, value] of entries){
        console.log(`${key} -> ${value}`);
    }
}
solve({
  name: "Plovdiv",
  area: 389,
  population: 1162358,
  country: "Bulgaria",
  postCode: "4000",
});
