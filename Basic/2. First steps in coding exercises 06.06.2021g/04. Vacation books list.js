function solve(input) {
  let pagesPerBook = Number(input[0]);
  let pagesPerHour = Number(input[1]);
  let days = Number(input[2]);
  let timeForBook = pagesPerBook / pagesPerHour;
  let hoursPerDay = timeForBook / days;

  console.log(hoursPerDay);
}
solve(["212", "20", "2"]);
solve(["432", "15", "4"]);
// 1.	Брой страници в текущата книга – цяло число в интервала [1…1000];
// 2.	Страници, които може да прочита за 1 час – цяло число в интервала [1…1000];
// 3.	Броя на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000];
