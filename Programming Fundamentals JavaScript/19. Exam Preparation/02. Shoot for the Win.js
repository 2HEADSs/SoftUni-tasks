function shootForWinf(arr) {
  let targets = arr.shift().split(" ").map(Number);
  let index = 0;
  let currentIndex = arr[index];
  let shootTargets = 0;

  while (currentIndex !== "End") {
    currentIndex = Number(currentIndex);
    if (currentIndex < targets.length) {
      if (targets[currentIndex] !== -1) {
        //checked if target isn't already shoot
        let pointsBeforeShoot = targets[currentIndex];
        // save the points before shooting
        targets[currentIndex] = -1;
        shootTargets++;
        //shoot target and its value becomes "-1"
        for (let i = 0; i < targets.length; i++) {
          //pass thru the array to make the diffrences
          let currentTarget = targets[i];
          // initialize every target
          if (currentTarget !== -1) {
            //checked if target isn't already shoot
            let diffrences = 0;
            //initialize diffrence betweeen every point and the last shootOne
            if (currentTarget > pointsBeforeShoot) {
              diffrences = currentTarget - pointsBeforeShoot;
              targets[i] = diffrences;
            } else if (currentTarget <= pointsBeforeShoot) {
              diffrences = pointsBeforeShoot + currentTarget;
              targets[i] = diffrences;
            }
          }
          //change everu target with difrennces
        }
      }
    }
    index++;
    currentIndex = arr[index];
  }
  console.log(`Shot targets: ${shootTargets} -> ${targets.join(' ')}`);
}
// shootForWinf(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForWinf(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
