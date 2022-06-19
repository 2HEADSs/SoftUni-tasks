function solve(input) {
  let listOfCompany = {};

  for (let list of input) {
    let [company, employee] = list.split(" -> ");

    if (!listOfCompany.hasOwnProperty(company)) {
      listOfCompany[company] = [];
    }
    if (!listOfCompany[company].includes(employee)) {
      listOfCompany[company].push(employee);
    }
  }

  let entries = Object.entries(listOfCompany);
  let sorted = entries.sort((a, b) => a[0].localeCompare(b[0]));

  for(let singleCompany of sorted){
      console.log(`${singleCompany[0]}`);
      for(let singlePerson of singleCompany[1]){
          console.log(`-- ${singlePerson}`);
      }
  }
}
solve([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
