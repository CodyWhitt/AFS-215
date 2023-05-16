class User {
    constructor(num1, num2, name = "Default Name", age = 0) {
      this.num1 = num1;
      this.num2 = num2;
      this.name = name;
      this.age = age;
    }
  
    add() {
      return this.num1 + this.num2;
    }
  
    subtract() {
      return this.num1 - this.num2;
    }
  
    multiply() {
      return this.num1 * this.num2;
    }
  
    divide() {
      return this.num1 / this.num2;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    numbersToString() {
      return `${this.num1}${this.num2}`;
    }
  }
  
  module.exports = User;
  