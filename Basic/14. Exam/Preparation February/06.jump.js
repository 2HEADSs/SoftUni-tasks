function highJump(input) {
  let index = 0;
  let desiredHight = Number(input[index]);
  let currentHight = desiredHight - 30;
  let totalJump = 0;
  let positiveJump = 0;
  let negativeJump = 0;
  let isFall = false;
  index++;
  let jump = Number(input[index]);

  while (currentHight <= desiredHight) {
    if (jump > currentHight) {
      totalJump++;
      positiveJump++;
      currentHight += 5;
      if (currentHight > desiredHight) {
        currentHight -= 5;
        break;
      }
      negativeJump = 0;
    } else {
      totalJump++;
      negativeJump++;
      if (negativeJump === 3) {
        isFall = true;
        break;
      }
    }
    index++;
    jump = Number(input[index]);
  }
  if (isFall) {
    console.log(`Tihomir failed at ${currentHight}cm after ${totalJump} jumps.`);
  } else {
    console.log(
      `Tihomir succeeded, he jumped over ${currentHight}cm after ${totalJump} jumps.`
    );
  }
}
highJump(["231", "205", "212", "213", "228", "229", "230", "235"]);
highJump(["250", "225", "224", "225", "228", "231", "235", "234", "235"]);
