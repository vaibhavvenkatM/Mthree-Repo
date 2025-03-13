# Python Installation and Basics

## Installing Python and Pip
Run the following commands to install Python on Linux:
```sh
sudo apt update
sudo apt install -y python3-pip python3-venv
sudo apt install -y python3
```

### Verify Python Installation
Check Python and pip versions:
```sh
python3 --version
pip3 --version
```

---

## Writing a Basic Python Script
Create a new Python file (`basic_script.py`):
```python
# basic_script.py
print("Hello, World!")
```
Run the script:
```sh
python3 basic_script.py
```

---

## Python Data Types
### Numeric Types:
```python
x = 10      # Integer
y = 10.5    # Float
z = 2 + 3j  # Complex number
```
### String Type:
```python
text = "Hello, Python!"
print(text[0])  # H
print(text[0:5])  # Hello
```
### List:
```python
fruits = ["apple", "banana", "cherry"]
print(fruits[1])  # banana
```
### Tuple:
```python
coordinates = (10, 20, 30)
print(coordinates[0])  # 10
```
### Dictionary:
```python
person = {"name": "John", "age": 30}
print(person["name"])  # John
```

---

## Conditional Statements
### If-Else Statement
```python
age = int(input("Enter your age: "))
if age >= 18:
    print("You are eligible to vote.")
elif age > 0:
    print("You are not eligible to vote yet.")
else:
    print("Invalid age.")
```

---

## Loops in Python
### For Loop
```python
for i in range(1, 4):
    print(i)
```
### While Loop
```python
age = int(input("Enter your age: "))
while age < 0:
    print("Age cannot be negative. Enter a valid age.")
    age = int(input("Enter your age: "))
print(f"Your age is {age}.")
```

---

## Functions in Python
### Defining and Calling Functions
```python
def greet(name):
    return f"Hello, {name}!"

name = input("Enter your name: ")
print(greet(name))
```
### Function with Loops
```python
def repeat_greeting(name, times):
    for i in range(times):
        print(f"Hello, {name}!")

repeat_greeting("Alice", 3)
```

---

## Python Collections
### Lists:
```python
colors = ["red", "green", "blue"]
colors.append("yellow")
print(colors)
```
### Tuples:
```python
dimensions = (1920, 1080)
print(dimensions[0])
```
### Sets:
```python
unique_numbers = {1, 2, 3, 4, 4, 5}
print(unique_numbers)  # {1, 2, 3, 4, 5}
```
### Dictionaries:
```python
student = {"name": "Alice", "grade": "A"}
print(student["name"])
```

---

## File Handling
### Writing to a File:
```python
with open("test.txt", "w") as file:
    file.write("Hello, File Handling!")
```
### Reading from a File:
```python
with open("test.txt", "r") as file:
    print(file.read())
```

---

## Exception Handling
```python
try:
    x = int(input("Enter a number: "))
    result = 10 / x
    print(result)
except ZeroDivisionError:
    print("Cannot divide by zero!")
except ValueError:
    print("Invalid input! Please enter a number.")
```

---

## Object-Oriented Programming (OOP)
### Class and Object
```python
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def display_info(self):
        print(f"Car: {self.brand} {self.model}")

car1 = Car("Toyota", "Corolla")
car1.display_info()
```

---

## Lambda Functions
```python
add = lambda x, y: x + y
print(add(5, 3))  # 8
```

---

## Python Modules and Imports
### Importing a Module:
```python
import math
print(math.sqrt(16))
```
### Creating and Importing a Custom Module:
1. Create `mymodule.py`:
```python
def greet(name):
    return f"Hello, {name}!"
```
2. Use it in another script:
```python
import mymodule
print(mymodule.greet("John"))
```

---

## List Comprehensions
```python
squares = [x ** 2 for x in range(5)]
print(squares)  # [0, 1, 4, 9, 16]
```

---

## Python Decorators
```python
def decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

@decorator
def say_hello():
    print("Hello!")

say_hello()
```

---

## Working with JSON
```python
import json

# Convert Python dictionary to JSON string
person = {"name": "John", "age": 30}
json_str = json.dumps(person)
print(json_str)

# Convert JSON string back to Python dictionary
parsed_person = json.loads(json_str)
print(parsed_person["name"])
```

---

This document covers the **basics of Python** including installation, data types, control structures, functions, file handling, OOP, and JSON handling. 🚀

