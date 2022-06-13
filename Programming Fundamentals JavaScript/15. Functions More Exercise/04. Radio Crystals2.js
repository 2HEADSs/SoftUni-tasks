function radioCrystal(input) {
  let desiredThickness = input[0];
  let inputL = input.length;

  for (let i = 1; i < inputL; i++) {
    let currentThickness = input[i];
    console.log(`Processing chunk ${currentThickness} microns`);

    currentThickness = cutting(desiredThickness, currentThickness);
    currentThickness = lapping(desiredThickness, currentThickness);
    currentThickness = grinding(desiredThickness, currentThickness);
    currentThickness = etching(desiredThickness, currentThickness);
    currentThickness = xRay(desiredThickness, currentThickness);

    console.log(`Finished crystal ${currentThickness} microns`);
  }
  //---------------------------------------------------------------//
  function transportingAndWashing(currentThickness) {
    console.log("Transporting and washing");
    return Math.floor(currentThickness);
  }
  //---------------------------------------------------------------//
  function cutting(inputDesiredThickness, InputCurrentThickness) {
    let cuts = 0;
    while (InputCurrentThickness > inputDesiredThickness) {
      if (InputCurrentThickness / 4 >= inputDesiredThickness) {
        InputCurrentThickness /= 4;
        cuts++;
      } else {
        break;
      }
    }
    if (cuts !== 0) {
      console.log(`Cut x${cuts}`);
      InputCurrentThickness = transportingAndWashing(InputCurrentThickness);
    }
    return InputCurrentThickness;
  }
  //---------------------------------------------------------------//
  function lapping(inputDesiredThickness, InputCurrentThickness) {
    let laps = 0;
    while (InputCurrentThickness > inputDesiredThickness) {
      if (InputCurrentThickness * 0.8 >= inputDesiredThickness) {
        InputCurrentThickness *= 0.8;
        laps++;
      } else {
        break;
      }
    }
    if (laps !== 0) {
      console.log(`Lap x${laps}`);
      InputCurrentThickness = transportingAndWashing(InputCurrentThickness);
    }
    return InputCurrentThickness;
  }
  //---------------------------------------------------------------//
  function grinding(inputDesiredThickness, InputCurrentThickness) {
    let grinds = 0;
    while (InputCurrentThickness > inputDesiredThickness) {
      if (InputCurrentThickness - 20 >= inputDesiredThickness) {
        InputCurrentThickness -= 20;
        grinds++;
      } else {
        break;
      }
    }
    if (grinds !== 0) {
      console.log(`Grind x${grinds}`);
      InputCurrentThickness = transportingAndWashing(InputCurrentThickness);
    }
    return InputCurrentThickness;
  }
  //---------------------------------------------------------------//
  function etching(inputDesiredThickness, InputCurrentThickness) {
    let etches = 0;
    while (InputCurrentThickness > inputDesiredThickness) {
      if (InputCurrentThickness - 2 >= inputDesiredThickness) {
        InputCurrentThickness -= 2;
        etches++;
      } else {
        break;
      }
    }
    if (etches !== 0) {
      console.log(`Etch x${etches}`);
      InputCurrentThickness = transportingAndWashing(InputCurrentThickness);
    }
    return InputCurrentThickness;
  }
  //---------------------------------------------------------------//
  function etching(inputDesiredThickness, InputCurrentThickness) {
    let etches = 0;
    while (InputCurrentThickness > inputDesiredThickness) {
      InputCurrentThickness -= 2;
      etches++;
    }
    if (etches !== 0) {
      console.log(`Etch x${etches}`);
      InputCurrentThickness = transportingAndWashing(InputCurrentThickness);
    }
    return InputCurrentThickness;
  }
  // ---------------------------------------------------------------//
  function xRay(inputDesiredThickness, InputCurrentThickness) {
    if (InputCurrentThickness + 1 <= inputDesiredThickness) {
      InputCurrentThickness += 1;
      console.log(`X-ray x1`);
    }
    return InputCurrentThickness;
  }
}
radioCrystal([100, 396]);
