function jump(input) {
  let index = 0;
  let highWanted = Number(input[index]);
  index++;
  let currant = Number(input[index]);
  let start = highWanted - 30;
  let positiveJump = 0;
  let negativeJump = 0;
  let isSucced = true;
  let totalJump = 1;
  let jumpActual = 0;
  while (currant <= highWanted) {
    jumpActual = currant;
    if (jumpActual > start) {
      start += 5;
      positiveJump++;
      totalJump++;
    } else {
      negativeJump++;
      totalJump++;
    }
    if (negativeJump >= 3) {
      isSucced = false;
      break;
    }
    index++;
    currant = Number(input[index]);
  }

  if (!isSucced) {
    console.log(`Tihomir failed at ${jumpActual}cm after ${totalJump} jumps.`);
  } else {
    console.log(
      `Tihomir succeeded, he jumped over ${highWanted}cm after ${totalJump} jumps.`
    );
  }
}
jump(["231", "205", "212", "213", "228", "229", "230", "235"]);
jump(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);
