function solve(input) {
  let heroes = [];

  for (let heroData of input) {
    let [name, level, items] = heroData.split(" / ");
    let splitted = items
      .split(", ")
      .sort((a, b) => a.localeCompare(b))
      .join(", ");

    let hero = {
        name: name,
        level: level,
        items: splitted
    };
    heroes.push(hero);
}
let sortedHeroesByLevel = heroes.sort((a,b) => a.level - b.level);
sortedHeroesByLevel.forEach((el) =>{
    console.log(`Hero: ${el.name}`);
    console.log(`level => ${el.level}`);
    console.log(`items => ${el.items}`);
})
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
