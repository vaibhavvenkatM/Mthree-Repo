# Advanced Calculator

The **Advanced Calculator** allows users to input mathematical expressions in a single line, and it evaluates the result from left to right, without following the BODMAS rule. It works like a general calculator.

## Features
- Supports addition (+), subtraction (-), multiplication (*), and division (/).
- Evaluates expressions from left to right.
- Uses `bc` for precise calculations.

### Example
**Input:**  
```bash
1 + 2 + 3 - 4 + 100
```
**Output:**  
```bash
102
```

---

## Code
```bash
#!/bin/bash

read -p "Enter your expression: " input

# Add spaces around operators to ensure proper tokenization
input=$(echo "$input" | sed 's/\([0-9]\)\([^0-9]\)/\1 \2 /g')

IFS=' ' read -ra tokens <<< "$input"
result=${tokens[0]}

for ((i = 1; i < ${#tokens[@]}; i+=2)); do
    op=${tokens[i]}
    num=${tokens[i+1]}

    case $op in
        +) result=$(echo "$result + $num" | bc) ;;
        -) result=$(echo "$result - $num" | bc) ;;
        \*) result=$(echo "$result * $num" | bc) ;;
        /) result=$(echo "scale=2; $result / $num" | bc) ;;
        *) echo "Invalid operator: $op"; exit 1 ;;
    esac

done

echo "Result: $result"
```

---

## Image
![Advanced Calculator](https://github.com/vaibhavvenkatM/documentation/blob/main/Images/42.png)

