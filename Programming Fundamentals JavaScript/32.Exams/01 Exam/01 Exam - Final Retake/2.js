function solve(input) {
  let string = input.shift();
  let items = [];
  let pattern = /([|#])([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g
  let totalCal = 0
  let regex = pattern.exec(string);
  while (regex) {
    items.push({ item: regex[2], day: regex[3], cal: regex[4] });
    totalCal += Number(regex[4])
    regex = pattern.exec(string)
  }
  console.log(`You have food to last you for: ${Math.floor(totalCal / 2000)} days!`);
  for (let i = 0; i < items.length; i++) {
    console.log(`Item: ${items[i].item}, Best before: ${items[i].day}, Nutrition: ${items[i].cal}`);
  }
}
solve([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
solve(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
solve([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);