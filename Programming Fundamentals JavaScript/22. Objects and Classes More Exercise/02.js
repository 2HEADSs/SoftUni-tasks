function solve(input) {
  let flights = input[0];
  let newStatus = input[1];
  let command = input[2][0];

  let Obj = {};
  for (let el of flights) {
    let [flightNum, ...destination] = el.split(" ");
    destination = destination.join(" ");
    Obj[flightNum] = {
      destination: destination,
      status: command,
    };
  }
  for (let newEl of newStatus) {
    let [flightNum, ...tempStatus] = newEl.split(" ");
    tempStatus = tempStatus.join(" ");

    if (Obj.hasOwnProperty(flightNum)) {
      Obj[flightNum].status = tempStatus;
    }
  }

  for (let k in Obj) {
    if (Obj[k].status === command) {
      console.log(`{ Destination: '${Obj[k].destination}', Status: '${Obj[k].status}' }`);
    }
  }
}
solve([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]
);
