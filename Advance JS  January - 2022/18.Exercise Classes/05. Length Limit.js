class Stringer {
  constructor(str, length) {
    this.innerString = str;
    this.innerLength = length;
  }

  increase(value) {
    this.innerLength += value;
    if (this.innerLength < 0) {
      this.innerLength = 0;
    }
  }
  decrease(value) {
    this.innerLength -= value;
    if (this.innerLength < 0) {
      this.innerLength = 0;
    }
  }

  toString() {
    if (this.innerString.length > this.innerLength) {
      return this.innerString.substring(0, this.innerLength) + '...';
    } else if (this.innerLength === 0) {
      return '...';
    } else {
      return this.innerString;
    }
  }
}
let test = new Stringer('Test', 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
