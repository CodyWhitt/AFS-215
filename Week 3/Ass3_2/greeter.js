class Greeter {
    constructor(num) {
      if (typeof num !== 'number') {
        throw new Error('The input must be a number');
      }
      this.num = num;
    }
  
    greet() {
      if (this.num % 3 === 0 && this.num % 7 === 0) {
        return 'Good Evening';
      } else if (this.num % 3 === 0) {
        return 'Good Morning';
      } else if (this.num % 7 === 0) {
        return 'Good Afternoon';
      } else {
        return this.num.toString();
      }
    }
  }
  
  module.exports = Greeter;
  