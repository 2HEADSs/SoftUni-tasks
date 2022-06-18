function convert(name, lastName, hairColor) {
  let obj = {
    name,
    lastName,
    hairColor,
  };
  let output = JSON.stringify(obj);
  console.log(output);
}
convert("George", "Jones", "Brown");
