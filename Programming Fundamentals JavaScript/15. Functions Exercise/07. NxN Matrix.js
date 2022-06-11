function matrix(input) {
  const rowGenerator = (num) => {
    let output = "";
    for (let i = 1; i <= num; i++) {
      output += `${num} `;
    }
    return output;
  };

  for (let j = 1; j <= input; j++) {
    console.log(rowGenerator(input));
  }
}
matrix(3);
matrix(7);
matrix(2);
