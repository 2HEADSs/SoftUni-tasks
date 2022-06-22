function solve(text, word) {
    let censored = "*".repeat(word.length);
    let newText = text.replace(word, censored);
  
    while (newText.includes(word)) {
      newText = newText.replace(word, censored);
    }
    console.log(newText);
    let output = ""
    for(ch of text){
        if(ch === " "){
            output += " "
        } else {
            output += "*"
        }
    }
    console.log(output);
  }
  solve("A small sentence with some words", "small");
  solve('Find the hidden word', 'hidden')
  