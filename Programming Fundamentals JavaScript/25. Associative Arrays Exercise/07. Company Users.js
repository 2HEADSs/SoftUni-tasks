function solve(input) {
  let listofCompany = {};

  for (let item of input) {
    let [company, number] = item.split(" -> ");

    if (!listofCompany.hasOwnProperty(company)) {
      listofCompany[company] = [];
    }
    if (!listofCompany[company].includes(number)) {
      listofCompany[company].push(number);
    }
  }

  let sortedCompanies = Object.keys(listofCompany);
  sortedCompanies.sort((a, b) => a.localeCompare(b));

  for (let singleCompany of sortedCompanies) {
    console.log(singleCompany);

    for (person of listofCompany[singleCompany]) {
      console.log(`-- ${person}`);
    }
  }
}
solve([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
