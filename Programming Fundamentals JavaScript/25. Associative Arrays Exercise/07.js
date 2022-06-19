function solve(input) {
  let obj = {};

  for (let line of input) {
    line = line.split(" -> ");
    let companyName = line[0];
    let employeeName = line[1];

    if (!obj.hasOwnProperty(companyName)) {
      obj[companyName] = [];
    }
    if (!obj[companyName].includes(employeeName)) {
      obj[companyName].push(employeeName);
    }
  }
  let keys = Object.keys(obj);
  let sorted = keys.sort((a, b) => {
    return a.localeCompare(b);
  });
  for(let singleCompany of sorted){
      console.log(singleCompany);
      for(let person of obj[singleCompany]){
          console.log(`-- ${person}`);
      }
  }
}
solve([
  "SoftUni -> AA12345",
  "SoftUni -> CC12344",
  "Lenovo -> XX23456",
  "SoftUni -> AA12345",
  "Movement -> DD11111",
]);
solve("--------------")
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )