function solve(input) {
  let output = [];
  for (let el of input) {
    let [name, level, items] = el.split(' / ');
    level = Number(level);
    items = items ? items.split(', ') : [];
    output.push({ name, level, items });
  }
  console.log(JSON.stringify(output));
}
solve([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);
solve(['Jake / 1000 / Gauss, HolidayGrenade']);
solve(['Jake / 1000 / ']);
