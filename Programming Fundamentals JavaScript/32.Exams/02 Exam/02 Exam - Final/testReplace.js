let text = "ababababababab";

while(text.includes("a")){
    text = text.replace("a","c")
}
console.log(text);