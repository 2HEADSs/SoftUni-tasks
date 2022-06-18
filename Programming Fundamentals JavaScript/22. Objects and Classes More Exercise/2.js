function solve(params) {
    let flights = params[0];
    let newFlightsStatus = params[1];
    let flightStatus = params[2].toString();
    let newFlights = {};
   
    for (let flight of flights) {
      let [sector, destination] = flight.split(" ");
      newFlights[sector] = {
        Destination: destination,
        Status: flightStatus
      };
    }
   
    for (let newFlight of newFlightsStatus) {
      let [sector, status] = newFlight.split(" ");
      if (newFlights.hasOwnProperty(sector)) {
        newFlights[sector].Status = status;
      }
    }
   
    for (let flight in newFlights) {
      if (newFlights[flight].Status === flightStatus) {
        console.log(newFlights[flight]);
      }
    }
  }