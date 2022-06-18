function solve(input) {
  let array1 = input[0];
  let array2 = input[1];
  let array3 = "Ready to fly"

  let airportObject = {};

  for (let el of array1) {
    let [flightNum, ...destination] = el.split(" ");
    destination = destination.join(" ")
    airportObject[flightNum] = {
      Destination: destination,
      Status: array3,
    };
  }
  for (let newElement of array2) {
    let [numOfFlight, newStatus] = newElement.split(" ");
    if (airportObject.hasOwnProperty(numOfFlight)) {
      airportObject[numOfFlight].Status = newStatus;
    }
}
for(let flight in airportObject){
    if(airportObject[flight].Status === array3){
        let output = JSON.stringify(airportObject[flight])
    console.log(output);
    }
}
}
solve([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK430 Cancelled",
  ],
  ["Cancelled"],
]);
solve([
  [
    "WN269 Delaware",
    "FL2269 Oregon",
    "WN498 Las Vegas",
    "WN3145 Ohio",
    "WN612 Alabama",
    "WN4010 New York",
    "WN1173 California",
    "DL2120 Texas",
    "KL5744 Illinois",
    "WN678 Pennsylvania",
  ],
  [
    "DL2120 Cancelled",
    "WN612 Cancelled",
    "WN1173 Cancelled",
    "SK330 Cancelled",
  ],
  ["Ready to fly"],
]);
