function solve(input) {
  let heroes = [];

  for (let every of input) {
    let [name, level, items] = every.split(" / ");
    let splitedItems = items
      .split(", ")
      .sort((a, b) => a.localeCompare(b))
      .join(", ");

    let hero = {
      name: name,
      level: level,
      items: splitedItems,
    };
    heroes.push(hero);
  }
  let sortedHeroes = heroes.sort((a,b) => a.level - b.level);
  for(singleHero of sortedHeroes){
      console.log(`Hero: ${singleHero.name}`);
      console.log(`level => ${singleHero.level}`);
      console.log(`items => ${singleHero.items}`);
  }
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
