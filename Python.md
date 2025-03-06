# Python Installation and Basic Script

## Installing Python and Pip:
Run the following commands to install Python:

sudo apt update
sudo apt install -y python3-pip python3-venv
sudo apt install -y python3 
Verify Python Installation:
Check Python and pip versions:


python3 --version
pip3 --version
Create a Basic Python Script:
Create a new Python file (basic_script.py):



# basic_script.py
print("Hello, World!")
Day 10 (21-02-2025)
We continued with Python loops
For Loop Example:
The for loop iterates over a sequence, such as a range of numbers. range(1, 4) generates numbers from 1 to 3. The loop starts at 1 and ends just before 4. Inside the loop, the print(i) statement prints the current value of i.


# For loop to print numbers from 1 to 3
for i in range(1, 4):
    print(i)
For loop to print names from a list:

names = ["John", "Alice", "Bob"]
for name in names:
    print(name)
While loop that asks the user for a valid age:

age = int(input("Enter your age: "))
while age < 0:
    print("Age cannot be negative. Please enter a valid age.")
    age = int(input("Enter your age: "))
print(f"Your age is {age}.")
input() function is used to get the user’s input. Since input() returns a string, it's converted to an integer using int().
while age < 0 checks if the entered age is less than 0. If it is, the loop will continue to prompt the user until a valid age is entered.
If the age is valid (greater than or equal to 0), the loop stops, and the final print statement displays the age.
Combining Conditional Statements and Loops (if/else)
Here’s an integrated example with both if/else statements and loops:


# Asking the user to enter age and checking validity
age = int(input("Enter your age: "))
if age >= 0:
    print("Age entered correctly!")
    # Using a for loop to print the age 3 times
    for i in range(3):
        print(f"Your age is: {age}")
else:
    print("Invalid age. Please enter a valid age.")
    while age < 0:
        age = int(input("Enter your age: "))
        if age >= 0:
            print(f"Your age is: {age}")
        else:
            print("Age cannot be negative. Please try again.")
Syntax of Functions and Loops
Let's also add a function that takes the user's name and returns a greeting using a for loop.


# Function to greet the user
def greet(name):
    return f"Hello, {name}!"

# Taking user input for the name
name = input("Enter your name: ")

# Calling the function and printing the greeting
print(greet(name))

# Using a for loop to repeat the greeting 3 times
for i in range(3):
    print(greet(name))
greet(name) is a function that returns a formatted greeting string.
The program asks the user for their name, passes it to the greet function, and prints the greeting.
The for loop then repeats the greeting 3 times.
In the Afternoon Session
We revised all the Linux commands from scratch.





