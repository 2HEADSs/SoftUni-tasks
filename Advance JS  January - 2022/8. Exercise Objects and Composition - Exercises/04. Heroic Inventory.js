function solve(input) {
  let output = [];

  while (input.length > 0) {
    let [name, level, items] = input.shift().split(' / ');
    level = Number(level);
    items = items ? items.split(', ') : [];
    output.push({ name, level, items: items });
  }
  console.log(JSON.stringify(output));
}
solve([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);
solve(['Jake / 1000 / Gauss, HolidayGrenade']);
