class List {
  constructor() {
    this.collection = [];
    this.size = this.collection.length;
  }

  add(el) {
    this.collection.push(el);
    this.size = this.collection.length;
    this.collection.sort((a, b) => a - b);
  }

  remove(index) {
    if (index >= 0 && index < this.collection.length) {
      this.collection.splice(index, 1);
      this.size = this.collection.length;
    } else {
      throw new Error('Invalid index at remove');
    }
  }

  get(index) {
    if (index >= 0 && index < this.collection.length) {
      return this.collection[index];
    } else {
      throw new Error('Invalid index at get');
    }
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
