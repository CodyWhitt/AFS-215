const Greeter = require('./greeter.js');

try {
  let greeter1 = new Greeter(3);
  console.log(greeter1.greet()); // Outputs: Good Morning

  let greeter2 = new Greeter(7);
  console.log(greeter2.greet()); // Outputs: Good Afternoon

  let greeter3 = new Greeter(21);
  console.log(greeter3.greet()); // Outputs: Good Evening

  let greeter4 = new Greeter(5);
  console.log(greeter4.greet()); // Outputs: 5

  let greeter5 = new Greeter('Hello');
  console.log(greeter5.greet()); // Outputs: Error
} catch (error) {
  console.error(error.message);
}
