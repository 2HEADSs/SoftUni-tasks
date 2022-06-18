function solve(input) {
  for (let el of input) {
    let employeeObj = {
      employeeName: el,
      personalNum: el.length,
    };
    console.log(`Name: ${employeeObj.employeeName} -- Personal Number: ${employeeObj.personalNum}`);
  }
}
solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
