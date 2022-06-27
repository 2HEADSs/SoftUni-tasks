function race(array) {
  let nameOfRacers = array.shift().split(", ");
  let racersObj = {};
  let places = {
    1: "1st",
    2: "2nd",
    3: "3rd",
  };
  let raceName = "";
  let tempKms = 0;
  let counter = 0;
  for (const str of array) {
    if (str === "end of race") {
      break;
    }
    let strArr = str.split("");
    for (let i = 0; i < strArr.length; i++) {
      let regex = /^[A-Za-z]+$/g;
      if (regex.test(strArr[i])) {
        // COLECT LETTERS TO NAME!
        raceName += strArr[i];
      } else if (Number.isInteger(Number(strArr[i]))) {
        //COLLECT KMS
        tempKms += Number(strArr[i]);
      }
      if (i + 1 == strArr.length) {
        // FINISH NA FOR CYCLE
        if (nameOfRacers.includes(raceName)) {
          // CHECK RACER IS ON LIST OR NOT!
          if (!racersObj.hasOwnProperty(raceName)) {
            // RACER CHECK!! Y/N
            racersObj[raceName] = tempKms;
            raceName = "";
            tempKms = 0;
          } else {
            racersObj[raceName] += tempKms;
            raceName = "";
            tempKms = 0;
          }
        } else {
          raceName = "";
          tempKms = 0;
        }
      }
    }
  }
  let sort = Object.entries(racersObj).sort((a, b) => b[1] - a[1]);
  let a = 1;
  for (const str of sort) {
    counter += 1;
    if (places.hasOwnProperty(counter)) {
      console.log(`${places[counter]} place: ${str[0]}`);
    }
    if (counter === 3) {
      break;
    }
  }
}
race([
    "George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@ ",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race",
  ]);