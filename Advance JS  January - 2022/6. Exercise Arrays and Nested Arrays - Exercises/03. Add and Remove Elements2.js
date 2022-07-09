function solve(commands) {
  let output = [];
  for (let i = 0; i < commands.length; i++) {
    let currentCommand = commands[i];
    if (currentCommand === 'add') {
      output.push(i + 1);
    } else if (currentCommand === 'remove') {
      output.pop();
    }
  }
  if(output.length > 0){
    output.forEach((el) => console.log(el));
  } else {
      console.log(`Empty`);
  }

}
// solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add']);
// solve(['remove', 'remove', 'remove']);
