function ticketSorter(tickets, sortingType) {
  class Tickets {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  let result = [];

  tickets.map((el) => {
    let [destination, price, status] = el.split('|');
    price = Number(price);
    result.push(new Tickets(destination, price, status));
  });
  //firstWay
  //   let sortedArr = result.sort((x, y) =>
  //     typeof x[sortingType] === 'string'
  //       ? x[sortingType].localeCompare(y[sortingType])
  //       : x[sortingType] - y[sortingType]
  //   );
  //   return sortedArr;
  //secondWay
  return result.sort((a, b) => {
    if (typeof a[sortingType] === 'number') {
      return a[sortingType] - b[sortingType];
    } else {
      return a[sortingType].localeCompare(b[sortingType]);
    }
  });
}

ticketSorter(
  [
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed',
  ],
  'destination'
);
