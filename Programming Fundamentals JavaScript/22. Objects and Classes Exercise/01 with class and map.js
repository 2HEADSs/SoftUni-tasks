function solve(input) {

    class Employe {
      constructor(str) {
        (this.name = str), (this.id = str.length);
      }
  
      print() {
        return `Name: ${this.name} -- Personal Number: ${this.id}`;
      }
  
      
    }
  
    for (let el of input) {
      let obj = new Employe(el);
      console.log(obj.print());
    }
  
  }
  
  solve([
    "Silas Butler",
    "Adnaan Buckley",
    "Juan Peterson",
    "Brendan Villarreal",
  ]);
  