function solve(speed, area) {
  let difference = 0;
  let status;
  speed = Number(speed);
  if (area === 'motorway') {
    if (speed <= 130) {
      console.log(`Driving ${speed} km/h in a 130 zone`);
    } else {
      difference = speed - 130;
      if (difference <= 20) {
        status = 'speeding'; //break;
      } else if (difference <= 40) {
        status = 'excessive speeding';
      } else {
        status = 'reckless driving';
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of 130 - ${status}`
      );
    }
  } else if (area === 'interstate') {
    if (speed <= 90) {
      console.log(`Driving ${speed} km/h in a 90 zone`);
    } else {
      difference = speed - 90;
      if (difference <= 20) {
        status = 'speeding'; //break;
      } else if (difference <= 40) {
        status = 'excessive speeding';
      } else {
        status = 'reckless driving';
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of 90 - ${status}`
      );
    }
  } else if (area === 'city') {
    if (speed <= 50) {
      console.log(`Driving ${speed} km/h in a 50 zone`);
    } else {
      difference = speed - 50;
      if (difference <= 20) {
        status = 'speeding'; //break;
      } else if (difference <= 40) {
        status = 'excessive speeding';
      } else {
        status = 'reckless driving';
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of 50 - ${status}`
      );
    }
  } else if (area === 'residential') {
    if (speed <= 20) {
      console.log(`Driving ${speed} km/h in a 20 zone`);
    } else {
      difference = speed - 20;
      if (difference <= 20) {
        status = 'speeding'; //break;
      } else if (difference <= 40) {
        status = 'excessive speeding';
      } else {
        status = 'reckless driving';
      }
      console.log(
        `The speed is ${difference} km/h faster than the allowed speed of 20 - ${status}`
      );
    }
  }
}
solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');
