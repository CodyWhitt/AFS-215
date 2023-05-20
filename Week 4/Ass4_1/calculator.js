function calculator(operation, num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new Error("Both arguments must be numbers");
    }
    switch(operation) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            if (num2 === 0) {
                throw new Error("Cannot divide by zero");
            }
            return num1 / num2;
        default:
            throw new Error("Invalid operation");
    }
}
