function parsingJason(text) {
  let obj = JSON.parse(text);
  let entries = Object.entries(obj);
  for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
}
parsingJason('{"name": "George", "age": 40, "town": "Sofia"}');
parsingJason('{"name": "Peter", "age": 35, "town": "Plovdiv"}')
