function solve(input) {
  let tabCount = Number(input[0]);
  let salary = Number(input[1]);
  let inputL = input.length;

  for (let i = 2; i <= input.length; i++) {
    let currentTab = input[i];
    switch (currentTab) {
      case "Facebook":
        salary -= 150;
        break;
      case "Instagram":
        salary -= 100;
        break;
      case "Reddit":
        salary -= 50;
        break;
    }
  }

  if (salary <= 0) {
    console.log(`You have lost your salary.`);
  } else {
    console.log(Math.floor(salary));
  }
}
// solve([
//   "10",
//   "750",
//   "Facebook",
//   "Dev.bg",
//   "Instagram",
//   "Facebook",
//   "Reddit",
//   "Facebook",
//   "Facebook",
// ]);
// solve(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
solve[("3", "500", "Facebook", "Stackoverflow.com", "softuni.bg")];
