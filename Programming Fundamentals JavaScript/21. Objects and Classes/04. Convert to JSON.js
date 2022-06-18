function objToJson(name, lastName, hairColor) {
  let obj = {
    name,
    lastName,
    hairColor,
  };
  let output = JSON.stringify(obj);
  console.log(output);
}
objToJson("George", "Jones", "Brown");
