function solve([input]) {
  let pattern = /([|#])([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d{1,5})\1/g;
  let match = pattern.exec(input);
  let allMatches = [];
  let sumOfKcal = 0;
  while (match !== null) {
    sumOfKcal += Number(match[4]);
    allMatches.push({ item: match[2], day: match[3], nustritions: match[4] });

    match = pattern.exec(input);
  }
  let days = Math.floor(sumOfKcal / 2000);
  console.log(`You have food to last you for: ${days} days!`);
  
  for (let el of allMatches) {
    console.log(
      `Item: ${el.item}, Best before: ${el.day}, Nutrition: ${el.nustritions}`
    );
  }
}
solve([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
solve(["Hello|#Invalid food#19/03/20#450|$5*(@"]);
solve([
  "$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|",
]);
//(\||\#)([A-Za-z,]+\s*[A-Za-z]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1
//  let pattern = /(\||\#)([A-Za-z]+\s*[A-Za-z]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)/g;
