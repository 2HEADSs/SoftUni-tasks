function solve(input) {
  let capacity = Number(input[0]);
  let totalFans = Number(input[1]);
  let sectorA = 0;
  let sectorB = 0;
  let sectorV = 0;
  let sectorG = 0;
  let inputL = input.length;

  for (i = 2; i <= input.length; i++) {
    let currentFan = input[i];
    switch (currentFan) {
      case "A":
        sectorA++;
        break;
      case "B":
        sectorB++;
        break;
      case "V":
        sectorV++;
        break;
      case "G":
        sectorG++;
        break;
    }
  }
  sectorA = (sectorA / totalFans) * 100;
  sectorB = (sectorB / totalFans) * 100;
  sectorV = (sectorV / totalFans) * 100;
  sectorG = (sectorG / totalFans) * 100;
  totalFans = (totalFans / capacity) * 100;

  console.log(`${sectorA.toFixed(2)}%`);
  console.log(`${sectorB.toFixed(2)}%`);
  console.log(`${sectorV.toFixed(2)}%`);
  console.log(`${sectorG.toFixed(2)}%`);
  console.log(`${totalFans.toFixed(2)}%`);
}
solve(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
