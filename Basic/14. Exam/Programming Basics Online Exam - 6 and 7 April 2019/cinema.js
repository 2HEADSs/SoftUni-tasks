function StreamOfLetters(input) {
  let voucher = Number(input.shift());

  let price = 0;
  let tickets = 0;
  let other = 0;
  let purchase = 0;

  for (let i = 0; i < input.length; i++) {
    purchase = input[i];

    if (purchase !== "End") {
      if (purchase.length > 8) {
        price += purchase.charCodeAt(0) + purchase.charCodeAt(1);
        if (price > voucher) {
          break;
        }
        tickets++;
      } else {
        price += purchase.charCodeAt(0);
        if (price > voucher) {
          break;
        }
        other++;
      }
    }
  }

  console.log(tickets);
  console.log(other);
}
StreamOfLetters(["300", "Captain Marvel", "popcorn", "Pepsi"]);
StreamOfLetters([
  "1500",
  "Avengers: Endgame",
  "Bohemian Rhapsody",
  "Deadpool 2",
  "End",
]);
