const User = require('./user.js');

let user1 = new User(2, 5, 'John', 22);
console.log(user1.add()); // Outputs: 7
console.log(user1.subtract()); // Outputs: -3
console.log(user1.multiply()); // Outputs: 10
console.log(user1.divide()); // Outputs: 0.4
console.log(user1.greet()); // Outputs: Hello, my name is John and I am 22 years old.
console.log(user1.numbersToString()); // Outputs: 25

let user2 = new User(3, 4, 'Cody', 29);
console.log(user2.add()); // Outputs: 7
console.log(user2.subtract()); // Outputs: -1
console.log(user2.multiply()); // Outputs: 12
console.log(user2.divide()); // Outputs: 0.75
console.log(user2.greet()); // Outputs: Hello, my name is Cody and I am 29 years old.
console.log(user2.numbersToString()); // Outputs: 34
