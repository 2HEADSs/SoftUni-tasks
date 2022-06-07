function commonElements(firstArr, secondArr) {

  for (let firstElement of firstArr) {

    for (let secondElement of secondArr) {
        
      if (firstElement === secondElement) {
        console.log(firstElement);
      }
    }
  }
}
commonElements(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
