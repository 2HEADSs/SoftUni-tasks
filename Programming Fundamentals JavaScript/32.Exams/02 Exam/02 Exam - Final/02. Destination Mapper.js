function solve(input) {
  let pattern = /(=|\/)([A-Z][A-Za-z]{2,})(\1)/g;
  let result = [];
  let points = 0;

  let match = pattern.exec(input);

  while (match !== null) {
    result.push(match[2]);
    points += match[2].length;
    match = pattern.exec(input);
  }
  console.log(`Destinations: ${result.join(", ")}`);
  console.log(`Travel Points: ${points}`);
  // Destinations: {destinations joined by ', '}"
  //"Travel Points: {travel_points}".

  //(=|\/)([A-Z][A-Za-z]{2,})(\1)
  // regex с две групи - едната е за символите около търсената дума, другата е самата търсена дума
  //правим го за да можем да изкараме само думата

  //=([A-Z][A-Za-z]{2,})=|\/([A-Z][A-Za-z]{2,})\/
  //regex с алтернатива - или единия вид("=") или другия вид("/")

    //([\=/])([A-Z][A-Za-z]{2,})(\1)
    //regex с множество за символите
}
solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
