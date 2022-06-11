function oddAndSum(input) {
  let inputAsString = input.toString();
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < inputAsString.length; i++) {
    let currentElement = Number(inputAsString[i]);
    if (currentElement % 2 == 0) {
      evenSum += currentElement;
    } else {
      oddSum += currentElement;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddAndSum(1000435);
oddAndSum(3495892137259234);
