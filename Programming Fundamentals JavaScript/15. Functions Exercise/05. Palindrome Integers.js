function palindrome(input) {
  let arrayOfNumbers = input;
  let inputL = arrayOfNumbers.length;

  let isPalindrome = (num) => {
    let startNum = num;
    let reversedNum = Number(num.toString().split("").reverse().join(""));
    let result = startNum === reversedNum;
    return result ? "true" : "false";
  };

  for (let i = 0; i < inputL; i++) {
    let currentNumber = arrayOfNumbers[i];
    console.log(isPalindrome(currentNumber));
  }
}
palindrome([123, 323, 421, 121]);
// palindrome([32, 2, 232, 1010]);
