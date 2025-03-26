# Basic Calculator

This script is a simple calculator that allows users to perform basic arithmetic operations (addition, subtraction, multiplication, and division).

## Features:
- Takes user input for two numbers.
- Allows selection of an arithmetic operation.
- Displays the calculated result.
- Handles division by zero with an error message.

## Code:

```sh
echo "Basic Calculator"
read -p "Enter first number: " num1
read -p "Enter operation (+, -, *, /): " op
read -p "Enter second number: " num2
case $op in
    +) result=$((num1 + num2))
       echo "Result: $num1 + $num2 = $result" ;;
    -) result=$((num1 - num2))
       echo "Result: $num1 - $num2 = $result" ;;
    \*) result=$((num1 * $num2))
        echo "Result: $num1 * $num2 = $result" ;;
    /) if [ "$num2" -ne 0 ]; then
           result=$(echo "scale=2; $num1 / $num2" | bc)
           echo "Result: $num1 / $num2 = $result"
       else
           echo "Error: Division by zero is not allowed."
       fi ;;
    *) echo "Invalid operation! Please enter +, -, *, or /" ;;
esac
```

## Output Example:

![Basic Calculator](https://github.com/vaibhavvenkatM/documentation/blob/main/Images/41.png)
