/* 
 OOP-style and boilerplate-free classes.
  */
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

var shapeObj = new Shape(1,23,34);
console.log(shapeObj);