class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }
    get area() {
        return Math.PI * this.radius * 2;
    }
}
let circle = new Circle(2);
console.log(circle);
console.log(circle.diameter);
console.log(circle.area);
circle.radius = 14;
console.log(circle.area);

