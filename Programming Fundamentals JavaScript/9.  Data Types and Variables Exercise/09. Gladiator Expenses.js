function gladiatorExpenses(
  lostFight,
  helmetPrice,
  swordPrice,
  shieldPrice,
  armorPrice
) {
  let expenses = 0;
  let brokenShield = 0;

  for (let i = 1; i <= lostFight; i++) {
    let brokenHelmet = 0;
    let brokenSword = 0;
    if (i % 2 === 0) {
      expenses += helmetPrice;
      brokenHelmet++;
    }
    if (i % 3 === 0) {
      expenses += swordPrice;
      brokenSword++;
    }
    if (brokenHelmet === 1 && brokenSword === 1) {
      expenses += shieldPrice;
      brokenShield++;
    }
    if (brokenShield % 2 === 0 && brokenShield > 0) {
      expenses += armorPrice;
    }
  }
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.5, 21.5, 40, 200);
