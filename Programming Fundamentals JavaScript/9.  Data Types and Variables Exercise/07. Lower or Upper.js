function lowerOrUpper(letter) {
  let output = letter.charCodeAt(0);
  if (output >= 65 && output <= 90) {
    console.log(`upper-case `);
  } else {
    console.log(`lower-case`);
  }
}
lowerOrUpper("L");
lowerOrUpper('f')
