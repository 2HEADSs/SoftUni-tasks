function loadingBar(num) {
  let outputPercent = "";
  let index = 0;
  for (let i = 1; i <= num / 10; i++) {
    outputPercent += "%";
    index++;
  }
  while (index < 10) {
    outputPercent += ".";
    index++;
  }
  if (num < 100) {
    console.log(`${num}% [${outputPercent}]`);
    console.log(`Still loading...`);
  } else {
    console.log("100% Complete!");
    console.log(`[${outputPercent}]`);
  }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);
