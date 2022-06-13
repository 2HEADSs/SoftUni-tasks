function radioCrystal(arr) {
  const targetThinkness = arr.shift();
  let currentThickness = 0;
  let counter = 0;
  let arrlength = arr.length;
  const comand = [
    function cut() {
      if (currentThickness / 4 < targetThinkness) {
        if (counter === 0) {
          return;
        }
        console.log(`Cut x${counter}`);
        console.log(`Transporting and washing`);
        counter = 0;
        return;
      } else {
        currentThickness /= 4;
        counter++;
      }
      cut();
    },
    function lap() {
      if (currentThickness * 0.8 < targetThinkness) {
        if (counter === 0) {
          return;
        }
        console.log(`Lap x${counter}`);
        console.log(`Transporting and washing`);
        counter = 0;
        return;
      } else {
        currentThickness *= 0.8;
        counter++;
      }
      lap();
    },
    function grind() {
      if (currentThickness - 20 < targetThinkness) {
        if (counter === 0) {
          return;
        }
        console.log(`Grind x${counter}`);
        console.log(`Transporting and washing`);
        counter = 0;
        return;
      } else {
        currentThickness -= 20;
        counter++;
      }
      grind();
    },
    function etch() {
      if (currentThickness - 1 < targetThinkness) {
        if (counter === 0) {
          return;
        }
        console.log(`Etch x${counter}`);
        console.log(`Transporting and washing`);
        counter = 0;
        return;
      } else {
        currentThickness -= 2;
        counter++;
      }
      etch();
    },
    function xray() {
      if (counter === 1) {
        console.log(`X-ray x${counter}`);
        counter = 0;
        return;
      } else {
        currentThickness += 1;
        counter++;
      }
      xray();
    },
    function final() {
      if (currentThickness === targetThinkness) {
        console.log(`Finished crystal ${targetThinkness} microns`);
      }
    },
  ];
  for (let i = 0; i < arrlength; i++) {
    currentThickness = arr[i];
    console.log(`Processing chunk ${currentThickness} microns`);

    for (let j = 0; j < comand.length; j++) {
      comand[j]();
      currentThickness = Math.floor(currentThickness);
      if (currentThickness === targetThinkness) {
        comand[5]();
        break;
      }
    }
  }
}
radioCrystal([100, 396]);
