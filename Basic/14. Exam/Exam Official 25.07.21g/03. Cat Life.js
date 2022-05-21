function cat(input) {
  let type = input[0];
  let sex = input[1];
  let period = 0;
  let isValid = false;
  switch (sex) {
    case "m":
      switch (type) {
        case "British Shorthair":
          period = 13;
          isValid = true;
          break;
        case "Siamese":
          period = 15;
          isValid = true;
          break;
        case "Persian":
          period = 14;
          isValid = true;
          break;
        case "Ragdoll":
          period = 16;
          isValid = true;
          break;
        case "American Shorthair":
          period = 12;
          isValid = true;
          break;
        case "Siberian":
          period = 11;
          isValid = true;
          break;
      }
      break;
    case "f":
      switch (type) {
        case "British Shorthair":
          period = 14;
          isValid = true;
          break;
        case "Siamese":
          period = 16;
          isValid = true;
          break;
        case "Persian":
          period = 15;
          isValid = true;
          break;
        case "Ragdoll":
          period = 17;
          isValid = true;
          break;
        case "American Shorthair":
          period = 13;
          isValid = true;
          break;
        case "Siberian":
          period = 12;
          isValid = true;
          break;
      }
      break;
  }
  period = (period * 12) / 6;
  if (isValid) {
    console.log(`${period} cat months`);
  } else {
    console.log(`${type} is invalid cat!`);
  }
}
cat(["Persian", "m"]);
cat(["Siamese", "f"]);
cat(["Siberian", "m"]);
cat(["Tom", "m"]);
