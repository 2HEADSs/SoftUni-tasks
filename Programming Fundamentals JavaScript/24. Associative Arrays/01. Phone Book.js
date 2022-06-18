function phoneBook(arr) {
    
    let phoneList = {};

    for (let el of arr) {
      el = el.split(" ");
      phoneList[el[0]] = el[1];
    }

    for(let keyOfList in phoneList){
        console.log(`${keyOfList} -> ${phoneList[keyOfList]}`);
    }
  }
solve([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
solve(["George 0552554", "Peter 087587", "George 0453112", "Bill 0845344"]);
