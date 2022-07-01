function solve(input) {
  let countHeroes = Number(input.shift());
  let party = {};

  for (let i = 0; i < countHeroes; i++) {
    let [hero, hitPoints, manaPoints] = input.shift().split(" ");
    hitPoints = Number(hitPoints);
    manaPoints = Number(manaPoints);
    party[hero] = {
      hitPoints: hitPoints,
      manaPoints: manaPoints,
    };
  }

  while (input[0] !== "End") {

    let [command, heroName, first, second] = input.shift().split(" - ");

    if (command === "CastSpell") {
      let mPNeeded = Number(first);
      let spellName = second;
      if (party[heroName].manaPoints >= mPNeeded) {
        party[heroName].manaPoints -= mPNeeded;
        console.log(`${heroName} has successfully cast ${spellName} and now has ${party[heroName].manaPoints} MP!`);
      } else {
        console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
      }
    } else if (command === "TakeDamage") {
      let damage = Number(first);
      let attacker = second;
      party[heroName].hitPoints -= damage;
      if (party[heroName].hitPoints > 0) {
        console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${party[heroName].hitPoints} HP left!`);
      } else {
        delete (party[heroName])
        console.log(`${heroName} has been killed by ${attacker}!`);
      }
    } else if (command === "Recharge") {
      let amount = Number(first)
      if (party[heroName].manaPoints + amount > 200) {
        amount = 200 - party[heroName].manaPoints;
        party[heroName].manaPoints = 200;
      } else {
        party[heroName].manaPoints += amount
      }
      console.log(`${heroName} recharged for ${amount} MP!`);
    } else if (command === "Heal") {
      let healAmount = Number(first);
      if (party[heroName].hitPoints + healAmount > 100) {
        healAmount = 100 - party[heroName].hitPoints;
        party[heroName].hitPoints = 100;
      } else {
        party[heroName].hitPoints += healAmount
      }
      console.log(`${heroName} healed for ${healAmount} HP!`);
    }
  }
  let entries = Object.entries(party);
  let sorted = entries.sort((a, b) => {
    let nameA = entries[0][0];
    let nameB = entries[1][0];

    let hpA = entries[0][1].hitPoints;
    let hpB = entries[1][1].hitPoints;
    return  hpA - hpB || nameB.localeCompare(nameA)
  })
  console.log(party);
  // for (let singleHero of sorted) {
  //   console.log(`${singleHero[0]}`);
  //   console.log(`  HP: ${party[singleHero[0]].hitPoints}`);
  //   console.log(`  MP: ${party[singleHero[0]].manaPoints}`);
  // }
}
solve([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
solve(["4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End"
])
// probvai da gi sortirash s Object.keys
// taka:
// let sorted = Object.keys(allHeroes);
//     if (sorted.length < 0) return;

//     sorted.sort((a, b) => allHeroes[b].health - allHeroes[a].health || a.localeCompare(b));
//     sorted.forEach((el) => { console.log(${el}\n  HP: ${allHeroes[el].health}\n  MP: ${allHeroes[el].mana}); });