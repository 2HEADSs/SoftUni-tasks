function solve(input) {
  let string = input[0];
  let letters = [];

  for (ch of string) {
    if (!letters.includes(ch)) {
      letters.push(ch);
    }
  }
for(char of letters){
    let index = [];

    for(let i = 0; i < string.length; i ++){
        if(char === string[i]){
            index.push(i)
        }
    }
    console.log(`${char}:${index.join("/")}`);
}
}
solve(["abababa"]);
