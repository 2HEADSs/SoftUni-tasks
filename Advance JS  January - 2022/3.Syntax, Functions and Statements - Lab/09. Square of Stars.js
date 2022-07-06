function stars(count) {
  let output = '';

  for (let i = 0; i < count; i++) {
      output = ''
    for (let j = 0; j < count; j++) {
      output += '*' + ' ';
    }
    console.log(output);
  }
}
// stars(1);
// stars(2);
stars(5);
// stars(7);
