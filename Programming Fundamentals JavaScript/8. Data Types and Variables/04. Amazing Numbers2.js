function amazing(num) {
  num = num.toString();
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }

  let isContaining9 = sum.toString().includes("9");
  console.log(isContaining9 ? `${num} Amazing? True` : `${num} Amazing? Flase`);
}
amazing(1233);
amazing(999);
