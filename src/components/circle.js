const Shape = require("./shape.js");

class Circle extends Shape {
  constructor() {
    super();
  }
  calculateArea() {
    console.log("calculate Area of Circle");
  }
}

module.exports = Circle;

