function solve(input) {
  let heroes = [];
  for (let info of input) {
    let [name, level, items] = info.split(" / ");
    items = items
      .split(", ")
      .sort((a, b) => a.localeCompare(b))
      .join(", ");
    let hero = {
      name: name,
      level: +level,
      items: items,
    };
    heroes.push(hero);
  }
  let sorted = heroes.sort((a, b) => a.level - b.level);
  sorted.forEach((hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  });
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
