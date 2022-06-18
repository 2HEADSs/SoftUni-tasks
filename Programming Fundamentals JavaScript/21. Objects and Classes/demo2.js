let myObj = {
  'name': "Pavel",
  //няма  значение дали "property"-то го пишем с кавички
  age: 29,
  lastName: "Dimitrov",
  // стойността задължително с кавички ако е стринг
};
console.log(myObj);

let dataForMe = "age";
//задаване на променлива която държи стринг идентичен с таакъв от масива
console.log(myObj[dataForMe]);
//при извикаване .... интерпретатора търси еднаква/равна променлива в обекта ,

console.log(myObj["n" + "ame"]); // масив съдържащ стринг еднакъв с ключ от обекта
//при извикаване .... интерпретатора търси еднаква/равна променлива(стринг) в обекта
function getValue(propName) {
  console.log(myObj[propName]);
}
getValue("lastName");
getValue("name");
