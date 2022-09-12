function solve(input, criteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }

  let result = [];
  for (let line of input) {
    let [destination, price, status] = line.split('|');
    price = Number(price);
    result.push(new Ticket(destination, price, status));
  }

  let sorted = result.sort((a, b) => {
    if (criteria !== 'price') {
      return a[criteria].localeCompare(b[criteria]);
    } else {
      return a[criteria] - b[criteria];
    }
  });
  return sorted;
}
solve(
  [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed',
  ],
  'destination'
);
