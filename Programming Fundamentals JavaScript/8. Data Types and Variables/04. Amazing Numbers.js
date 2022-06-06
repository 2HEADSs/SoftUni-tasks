function amazing(a) {
  let num = a.toString();
  let isAmazing = Boolean;
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }

  sum = sum.toString();

  for (let i = 0; i < sum.length; i++) {
    let current = Number(sum[i]);
    if (current == 9) {
      isAmazing = true;
      break;
    } else {
      isAmazing = false;
    }
  }
  isAmazing
    ? console.log(`${a} Amazing? True`)
    : console.log(`${a} Amazing? False`);
}
amazing(1233);
amazing(999);
