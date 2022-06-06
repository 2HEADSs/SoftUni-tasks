function rightPlace(firstString, char, secondString) {
  let newString = "";
  for (let i = 0; i < firstString.length; i++) {
    let current = firstString[i];
    if (current === "_") {
      newString += char;
    } else {
      newString += current;
    }
  }
  let result = newString === secondString ? "Matched" : "Not Matched";
  console.log(result);
}
rightPlace("Str_ng", "I", "Strong");
rightPlace("Str_ng", "i", "String");
