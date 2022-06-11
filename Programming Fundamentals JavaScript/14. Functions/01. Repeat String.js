function repeatString(string, num) {
  let result = "";

  for (let i = 1; i <= num; i++) {
    result += string;
  }
  console.log(result);
}
repeatString("abc", 3);
repeatString("String", 2);
