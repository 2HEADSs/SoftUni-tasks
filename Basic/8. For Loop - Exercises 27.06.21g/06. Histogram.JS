function solve(input) {
  let numCount = Number(input[0]);
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;
  let p4 = 0;
  let p5 = 0;

  for (let i = 1; i <= numCount; i++) {
    let currentNum = Number(input[i]);

    if (currentNum < 200) {
      p1++;
    } else if (currentNum <= 399) {
      p2++;
    } else if (currentNum <= 599) {
      p3++;
    } else if (currentNum <= 799) {
      p4++;
    } else if (currentNum >= 800) {
      p5++;
    }
  }

  p1 = (p1 / numCount) * 100;
  p2 = (p2 / numCount) * 100;
  p3 = (p3 / numCount) * 100;
  p4 = (p4 / numCount) * 100;
  p5 = (p5 / numCount) * 100;
  console.log(`${p1.toFixed(2)}%`);
  console.log(`${p2.toFixed(2)}%`);
  console.log(`${p3.toFixed(2)}%`);
  console.log(`${p4.toFixed(2)}%`);
  console.log(`${p5.toFixed(2)}%`);
}
solve(["3", "1", "2", "999"]);
solve(["14","53","7","56","180","450","920","12","7","150","250","680","2","600","200"])

