// Intuitive access to base class constructor and methods.
class Shape {
    toString() {
        return `Shape(${this.id})`
    }
}
class Rectangle extends Shape {
    constructor(id, x, y, width, height) {
        super(id, x, y);
    }
    toString() {
        return "Rectangle > " + super.toString();
    }
}
class Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y);
    }
    toString() {
        return "Circle > " + super.toString();
    }
}
var recObj = new Rectangle(1,23,34,11,22);
console.log(recObj.toString());

