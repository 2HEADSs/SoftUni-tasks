function roundings(num, fix) {
  if (fix > 15) {
    fix = 15;
  }
  num = parseFloat(num.toFixed(fix));
  console.log(num);
}
roundings(3.1415926535897932384626433832795, 2);
roundings(10.5, 3);
