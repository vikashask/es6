// More intuitive, OOP-style and boilerplate-free inheritance.
class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Rectangle extends Shape {
    constructor(id, x, y, width, height) {
        super(id, x, y);
        this.width = width;
        this.height = height;
    }
}
class Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y);
        this.radius = radius;
    }
}
var recObj = new Rectangle(1,23,34,11,22);
console.log(recObj);

var recObj = new Circle(1,23,34,44);
console.log(recObj);
