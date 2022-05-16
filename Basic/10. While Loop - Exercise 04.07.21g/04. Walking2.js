function solve(input) {
  let stepsGoal = 10000;
  let steps = 0;
  let i = 0;
  let isReached = true;
  while (i < input.length) {
    let current = input[i];
    if (current === "Going home") {
      i++;
      current = Number(input[i]);
      steps += current;
      if (steps >= stepsGoal) {
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - stepsGoal} steps over the goal!`);
      } else {
        console.log(`${stepsGoal - steps} more steps to reach goal.`);
      }
      isReached = false;
      break;
    }
    current = Number(input[i]);
    steps += current;
    i++;
  }
  if (isReached) {
    if (steps >= stepsGoal) {
      console.log(`Goal reached! Good job!`);
      console.log(`${steps - stepsGoal} steps over the goal!`);
    } else {
      console.log(`${stepsGoal - steps} more steps to reach goal.`);
    }
  }
}
solve(["1000", "1500", "2000", "6500"]);
solve(["1500", "300", "2500", "3000", "Going home", "200"]);
solve(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
