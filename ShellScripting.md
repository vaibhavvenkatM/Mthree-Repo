## Shell Scripting Basics

### What is Shell Scripting?
Shell scripting is a way to automate tasks in Unix/Linux using a script file that contains commands executed by the shell. It is used for automating system tasks, running multiple commands sequentially, and simplifying complex operations.

### Key Commands:

#### `echo`
The `echo` command is used to display text or variables on the terminal.

```sh
echo "Hello, World!"
```

#### `fi`
The `fi` command marks the end of an `if` statement in shell scripting.

### Writing a Shell Script
A shell script is a file with a `.sh` extension. It starts with a shebang (`#!`) followed by the shell interpreter.

```sh
echo "Hello world"
```

Save the script as `script.sh` and give execute permission:

```sh
chmod +x script.sh
```

Run the script:

```sh
./script.sh
```

### If-Else: Conditional Statements
Conditional statements allow executing commands based on conditions.

#### If-Else Statement
The `if-else` statement allows conditional execution of commands.

```sh
read -p "Enter a number: " num
if [ $num -gt 10 ]; then
    echo "Number is greater than 10."
elif [ $num -eq 10 ]; then
    echo "Number is equal to 10."
else
    echo "Number is less than 10."
fi
```

### Loops in Shell Scripting
Loops help in executing a block of code multiple times.

#### a) For Loop
```sh
for i in 1 2 3 4 5; do
    echo "Number: $i"
done
```

#### b) While Loop
```sh
while [ condition ]; do
    # Commands
    # Increment or modify condition
done
```

## Day 8 (19-02-2025) - Shell Scripting Documentation

### Creating and Executing a Shell Script

#### Create a new script file:
```sh
vi array.sh
```

#### Grant execute permission to the script:
```sh
chmod +x array.sh
```

#### Execute the script:
```sh
./array.sh
```

### Working with Arrays in Shell Scripting

#### Defining an array:
```sh
a=("vaibhav" 21 "Sre")
```

#### Printing all elements of an array:
```sh
echo "${a[@]}"
```

#### Accessing individual elements:
```sh
echo "First element: ${a[0]}"
echo "Second element: ${a[1]}"
```

#### Looping through an array:
```sh
for i in "${a[@]}"; do
    echo "$i"
done
```

### Taking User Input with `read` Command

#### Basic Input:
```sh
read -p "Enter your name: " name
echo "Hello, $name!"
```

#### Taking Sensitive Input (Hidden Password):
```sh
read -s -p "Enter password: " password
echo "\nPassword saved"
```

#### Setting a Timeout for Input:
```sh
read -t 5 -p "Enter PIN (5 seconds timeout): " pin
echo "\nEntered PIN: $pin"
```

### Case Statements in Shell Scripting

#### Example of Case Statement:
```sh
read -p "Enter selection [1-3]: " selection
case $selection in
    1) accounttype="checking"; echo "You have selected checking" ;;
    2) accounttype="saving"; echo "You have selected saving" ;;
    3) accounttype="current"; echo "You have selected current" ;;
    *) accounttype="random"; echo "Random selection" ;;
esac
```

### Using `grep` Command for Text Search

#### Searching for Specific Text:
```sh
grep "selection$" case.sh
```

#### Searching for Lines Starting with 's':
```sh
grep "^s" case.sh
```

#### Finding Words with Letters (Both Upper and Lower Case):
```sh
grep "[a-zA-Z]" case.sh
```

#### Finding Words Containing Specific Letters:
```sh
grep "s.*a" case.sh
```

#### Searching in Multiple Files:
```sh
grep "text" file1.txt file2.txt
```

## Day 9 (20-02-2025) - Introduction to Regular Expressions (RegEx) and Commands

Regular Expressions (RegEx) are sequences of characters that define search patterns, allowing us to find specific strings within text.

### Extracting Email Addresses
```sh
grep -Eo "[a-zA-Z0-9._%+-]{3,}@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})" sample-logs.md
```

### Extracting Requests Completed in More Than 1000ms
```sh
grep "completed in [0-9][1-9]{3,}ms" sample-logs.md
```

### Extracting All Completed Requests (Regardless of Time)
```sh
grep "[0-9]+ms" sample-logs.md
```

### Extracting Specific API Requests
```sh
grep "API request completed in [0-9]+ms" sample-logs.md
```

### Extracting Pattern of Completion (Just the Time)
```sh
grep -o "[0-9]+ms" sample-logs.md
```

### Sorting and Counting Columns Using `awk`
```sh
awk '{print $3}' sample-logs.md | sort | uniq -c
```

### Extracting CPU Usage
```sh
grep -E "CPU usage [7-9][0-9]%" sample-logs.md
```

