class Circle {
  constructor(r) {
    this.radius = r;
  }
  get area() {
    return Math.PI * this.radius ** 2;
  }
  set area(value) {
    this.radius = Math.sqrt(value / Math.PI);
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(value) {
    if (value < 0) {
      throw new Error('Diameter cannot be less then 0');
    }

    this.radius = value / 2;
  }
}

const circle = new Circle(5);
const secondCircle = new Circle(3);
console.log(circle.area); // 78.5398…
console.log(secondCircle.area); // 78.5398…

circle.area = 2;
console.log(circle.radius);//0.79788...

circle.diameter = 100;
 console.log(circle.radius);//50 -> 100/2
console.log(circle.area); // 7853.9816 after 


