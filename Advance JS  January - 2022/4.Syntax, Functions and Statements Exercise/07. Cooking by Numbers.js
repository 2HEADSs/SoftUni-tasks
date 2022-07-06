function solve(num, p1, p2, p3, p4, p5) {
  let inputNumber = Number(num);
  let arrOfCommand = [p1, p2, p3, p4, p5];

  let chop = function (a) {
    return inputNumber / 2;
  };
  let dice = function (a) {
    return Math.sqrt(inputNumber);
  };
  let spice = function (a) {
    return inputNumber+1;
  };
  let bake = function (a) {
    return inputNumber * 3;
  };
  let fillet = function (a) {
    return inputNumber * 0.8;
  };

  for (let command of arrOfCommand) {
    switch (command) {
      case 'chop':
        inputNumber = chop(inputNumber);
        break;
      case 'dice':
        inputNumber = dice(inputNumber);
        break;
      case 'spice':
        inputNumber = spice(inputNumber);
        break;
      case 'bake':
        inputNumber = bake(inputNumber);
        break;
      case 'fillet':
        inputNumber = fillet(inputNumber);
        break;
    }
    console.log(inputNumber);
  }
}
// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
