Shell Scripting Basics

What is Shell Scripting? Shell scripting is a way to automate tasks in Unix/Linux using a script file that contains commands executed by the shell. It is used for automating system tasks, running multiple commands sequentially, and simplifying complex operations.

Key Commands:

echo: The echo command is used to display text or variables on the terminal.
Example: echo "Hello, World!"
fi: The fi command marks the end of an if statement in shell scripting.
Writing a Shell Script: A shell script is a file with a .sh extension. It starts with a shebang (#!) followed by the shell interpreter.

Example: echo “Hello world”
Save the script as script.sh and give execute permission:

chmod +x script.sh
Run the script:

./script.sh
If-Else: Conditional Statements
Conditional statements allow executing commands based on conditions.

If-Else Statement
The if-else statement allows conditional execution of commands.

Syntax:

read -p "Enter a number: " num
if [ $num -gt 10 ]; then
    echo "Number is greater than 10."
elif [ $num -eq 10 ]; then
    echo "Number is equal to 10."
else
    echo "Number is less than 10."
fi
Loops in Shell Scripting
Loops help in executing a block of code multiple times.

a) For Loop
Syntax:

for i in 1 2 3 4 5; do
    echo "Number: $i"
done
b) While Loop
Syntax:

while [ condition ]; do
    # Commands
    # Increment or modify condition
done
Day 8 (19-02-2025)
Shell Scripting Documentation

Creating and Executing a Shell Script:
Create a new script file:
This command opens the vi editor to create a new file named array.sh.


vi array.sh
Grant execute permission to the script:
This command provides execute permissions to the script.


chmod +x array.sh
Execute the script:
Runs the script from the current directory.


./array.sh
Working with Arrays in Shell Scripting:
Defining an array:
An array named a is initialized with three elements.


a=("vaibhav" 21 "Sre")
Printing all elements of an array:
Prints all elements in an array:

echo "${a[@]}"
Accessing individual elements:
Retrieves and prints specific elements from the array.

echo "First element: ${a[0]}"
echo "Second element: ${a[1]}"
Looping through an array:
Iterates through each element in the array and prints it.

for i in "${a[@]}"; do
    echo "$i"
done
Taking User Input with read Command:
Basic Input:
Prompts the user for input and stores it in the name variable.


read -p "Enter your name: " name
echo "Hello, $name!"
Taking Sensitive Input (Hidden Password):
The -s flag hides input while typing for security.

read -s -p "Enter password: " password
echo "\nPassword saved"
Setting a Timeout for Input:
If the user does not provide input within 5 seconds, the command proceeds.


read -t 5 -p "Enter PIN (5 seconds timeout): " pin
echo "\nEntered PIN: $pin"
Case Statements in Shell Scripting:
A case statement functions like a switch statement in other languages.

Example of Case Statement:

read -p "Enter selection [1-3]: " selection
case $selection in
    1) accounttype="checking"; echo "You have selected checking" ;;
    2) accounttype="saving"; echo "You have selected saving" ;;
    3) accounttype="current"; echo "You have selected current" ;;
    *) accounttype="random"; echo "Random selection" ;;
esac
The esac keyword marks the end of the case statement.
Using grep Command for Text Search

Searching for Specific Text:
Finds lines that end with "selection" in case.sh.

grep "selection$" case.sh
Searching for Lines Starting with 's':
Displays lines that begin with 's'.


grep "^s" case.sh
Finding Words with Letters (Both Upper and Lower Case):
Searches for words containing uppercase or lowercase letters.

grep "[a-zA-Z]" case.sh
Finding Words Containing Specific Letters:
Returns words containing both 's' and 'a'.


grep "s.*a" case.sh
Searching in Multiple Files:
Finds occurrences of "text" in both file1.txt and file2.txt.

grep "text" file1.txt file2.txt
Summary of Key Commands:
Command	Purpose
vi array.sh	Creates a script file.
chmod +x array.sh	Grants execute permissions.
./array.sh	Runs the script.
echo "${a[@]}"	Prints all array elements.
if [ condition ]; then ... fi	Executes commands based on conditions.
read -p "Enter value" variable	Takes user input.
case ... esac	Switch-case-like structure.
grep "pattern" file	Searches for text in a file.
In the afternoon session we have built a Basic calculator and an Advanced calculator:

Basic Calculator (Basic_Calculator.sh):
Input Style: Takes input step-by-step (first number, operator, second number).
Operations: Supports +, -, *, and /.
Execution: Uses a case statement to determine the operation.
Division Handling: Uses bc for floating-point division.
Structured Input: The user must enter numbers and operators in a fixed format.
Advanced Calculator (Advanced_Calculator.sh):
Input Style: Accepts a full arithmetic expression at once (e.g., 4 + 5 - 20 + 50 / 2).
Operations: Supports multiple chained operations, processed sequentially from left to right (no BODMAS rule).
Execution:
Splits input into an array of numbers and operators.
Iterates through the array, calculating the result step-by-step.
Division Handling: Uses bc for accurate floating-point division.
Flexible Input: Users can enter multiple operations at once, and it evaluates them in sequence.
Day 9 (20-02-2025)
Introduction to Regular Expressions (RegEx) and Commands

Regular Expressions (RegEx) are sequences of characters that define search patterns, allowing us to find specific strings within text. In log file analysis, RegEx can be used to search for various patterns, such as email addresses, request completion times, CPU usage, and more. We will use the grep and awk commands to extract and analyze data from log files using regular expressions.

Extracting Email Addresses
To extract email addresses from a log file (sample-logs.md), we use the following command:


grep -Eo "[a-zA-Z0-9._%+-]{3,}@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})" sample-logs.md
-E: Enables extended regex.
-o: Outputs only the matched part.
"[a-zA-Z0-9._%+-]{3,}": Matches the first part of the email, ensuring it's at least 3 characters long.
"@[a-zA-Z0-9._]+[a-zA-Z]{3,}": Matches the domain of the email.
Extracting Requests Completed in More Than 1000ms
To extract requests that took more than 1000ms, the following command is used:


grep "completed in [0-9][1-9]{3,}ms" sample-logs.md
completed in: The literal string to match.
[0-9][1-9]{3,}ms: Matches requests that took at least 1000ms (ensuring the milliseconds are 4 digits or more).
Extracting All Completed Requests (Regardless of Time)
To extract all completed requests, regardless of the time, we use:


grep "[0-9]+ms" sample-logs.md
[0-9]+ms: Matches any number of digits followed by "ms" (milliseconds).
Extracting Specific API Requests
To extract API requests, we can modify the previous commands:


grep "API request completed in [0-9]+ms" sample-logs.md
API request completed in [0-9]+ms: Matches "API request completed in" followed by any number of digits and "ms".
Extracting Pattern of Completion (Just the Time)
To extract only the completion time (without the full sentence), we use:

grep -o "[0-9]+ms" sample-logs.md
-o: Only prints the matched pattern (e.g., the time in milliseconds).
Sorting and Counting Columns Using awk: The following command extracts the 3rd column, sorts it, and counts the occurrences:


awk '{print $3}' sample-logs.md | sort | uniq -c
awk '{print $3}': Prints the 3rd column from each line of the log file.
sort: Sorts the output.
uniq -c: Counts the unique occurrences.
Extracting CPU Usage
To extract CPU usage values greater than 70%, use the following command:


grep -E "CPU usage [7-9][0-9]%" sample-logs.md
CPU usage [7-9][0-9]%: Matches CPU usage values greater than or equal to 70%.
