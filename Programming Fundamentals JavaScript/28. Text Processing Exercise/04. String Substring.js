function solve(word, str) {
    let searchingWord = word.toLowerCase();
    let text = str.toLowerCase().split(" ");
    if(text.includes(searchingWord)){
        console.log(searchingWord);
    } else {
        console.log(`${searchingWord} not found!`);
    }
  }
solve("Javascript", "JavaScript is the best programming language");
solve("python", "JavaScript is the best programming language");
