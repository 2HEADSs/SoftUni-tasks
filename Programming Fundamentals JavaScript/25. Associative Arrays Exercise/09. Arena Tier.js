function solve(input) {
  let mainObject = {};

  let line = input.shift();
  while (line !== "Ave Cesar") {
    if (line.includes("vs")) {
      let [firstHero, secondHero] = line.split(" vs ");
      if (mainObject[firstHero] && mainObject[secondHero]) {
        for (let firstHeroPoints of Object.entries(mainObject[firstHero])) {
          for (let secondHeroPoints of Object.entries(mainObject[secondHero])) {
            if (firstHeroPoints[0] === secondHeroPoints[0]) {
              if (firstHeroPoints[1] > secondHeroPoints[1]) {
                delete mainObject[secondHero];
              } else if (firstHeroPoints[1] < secondHeroPoints[1]) {
                delete mainObject[firstHero];
              }
            }
          }
        }
      }
    } else {
      let [gladiator, technique, skill] = line.split(" -> ");
      skill = Number(skill);
      if (!mainObject[gladiator]) {
        mainObject[gladiator] = {};
        mainObject[gladiator][technique] = skill;
      } else {
        if (mainObject[gladiator].skill < skill) {
          mainObject[gladiator].skill = skill;
        } else if (!mainObject[gladiator][technique]) {
          mainObject[gladiator][technique] = skill;
        }
      }
    }
    line = input.shift();
  }
  let totalSkill = 0;
  let mainEntries = Object.entries(mainObject);

  for (let entry of mainEntries) {
    let sumOfSkills = 0;
    let splittedSkils = Object.entries(entry[1]);
    for (let skill of splittedSkils) {
      sumOfSkills += +skill[1];
    }
    entry.push(sumOfSkills);
  }
  mainEntries = mainEntries.sort(
    (a, b) => b[2] - a[2] || b[0].localeCompare(a[0])
  );

  for(let hero of mainEntries){
    console.log(`${hero[0]}: ${hero[2]} skill `);
    let data = Object.entries(hero[1]);
    for(let skills of data){
      console.log(`- ${skills[0]} <!> ${skills[1]}`);
    }

  }

}
solve([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
]);
solve([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);
