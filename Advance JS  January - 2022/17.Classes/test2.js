class Circle {
  constructor(r) {
    this.radius = r;
  }
  get diameter() {
    return this.radius * 2;
  }

  set diameter(value) {
    this.radius = value / 2;
  }
}
const circle = new Circle(3);

console.log(circle.radius); // 3
circle.diameter = 20///automaticly set diameter
console.log(circle);

console.log(circle.radius);//log diameter ( get)
