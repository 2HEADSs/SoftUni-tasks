function arraysDemo() {
  let arr = [5, 10, 20, 5];

  let newArr = arr.map((el) => {
    return el * 2;
  });

  let newArr2 = arr.map(function (el) {
    return el * 3;
  });

  let newArr3 = arr.filter((el) => {
    if (el % 2 === 0) {
      return el;
    }
  });

  let sum = arr.reduce((sum, el) => {
    return sum + el;
  }, 0);
  //0-те е началната стойност от която стартираме, можем да напишем друго число(може и без число)

  let array2 = [5, "#", ["1,2, 54"], {}, 10];
  let array3 = ["aaa", "bbb", "ccc", "ccccccc", "bbbbbbb"];

  let arrOfNumbers = array2.filter((el) => {
    if (typeof el == "number") {
      return el;
    }
  });

  let sortedArr = array3.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });

  // console.log(newArr);
  // console.log(newArr2);
  // console.log(newArr3);
  // console.log(sum);
  // console.log(arrOfNumbers);
  console.log(sortedArr);
}

arraysDemo();
