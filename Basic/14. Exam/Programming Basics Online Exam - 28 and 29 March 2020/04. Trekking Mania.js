function solve(input) {
  let countGroups = Number(input[0]);
  let musala = 0;
  let monblan = 0;
  let kilimandjaro = 0;
  let k2 = 0;
  let everest = 0;
  let total = 0;

  for (i = 1; i <= countGroups; i++) {
      let current = Number(input[i]);
      total += current;
      if(current<=5){
          musala+=current
      }else if(current<=12){
          monblan+=current
      }else if(current <=25){
          kilimandjaro+=current
      }else if(current <= 40){
          k2+=current
      }else{
          everest+=current
      }
  }
 musala = (musala/total)*100;
 monblan = (monblan/total)*100;
 kilimandjaro = (kilimandjaro/total)*100;
 k2 = (k2/total)*100;
 everest = (everest/total)*100;
  console.log(`${musala.toFixed(2)}%`);
  console.log(`${monblan.toFixed(2)}%`);
  console.log(`${kilimandjaro.toFixed(2)}%`);
  console.log(`${k2.toFixed(2)}%`);
  console.log(`${everest.toFixed(2)}%`);
}
solve(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
