def weirdFunction(number):
    if number == 1:
        print("1")
    elif number == 2:
        print("2")
    else:
        output = ""
        if number % 3 == 0:
            output += "Pepsi"
        if number % 5 == 0:
            output += "Coke"
        print(output)


# Example usage:
weirdFunction(1)  # Output 1
weirdFunction(2)  # Output 2
weirdFunction(3)  # Output Pepsi
weirdFunction(5)  # Output Coke
weirdFunction(6)  # Output Pepsi
weirdFunction(10)  # Output Coke
weirdFunction(15)  # Output PepsiCoke