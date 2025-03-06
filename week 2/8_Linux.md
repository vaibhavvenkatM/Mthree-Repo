# Day 8 - Shell Scripting & Commands

## Summary
This document covers fundamental Bash scripting techniques, including arrays, conditional statements, user input, case statements, and text searching using `grep`.

---

## Main Commands Overview

### 1. Working with Arrays in Bash
- Declare an array:
  ```bash
  a[0]="zara"
  a[1]="linux"
  ```
- Access array elements:
  ```bash
  echo "${a[0]}"  # Output: zara
  ```

### 2. Conditional Statements in Bash
- **Equality and Comparison Operators:**
  ```bash
  if [ $balance -eq 5000 ]; then echo "Balance is 5000"; fi
  ```
- **Logical Operators:**
  ```bash
  if [ $withdrawl -le $balance -a $withdrawl -le $daily_limit ]; then echo "Transaction approved"; fi
  ```

### 3. User Input in Bash
- **Read user input:**
  ```bash
  read -p "Enter your name: " name
  echo "$name"
  ```
- **Read password securely:**
  ```bash
  read -s -p "Enter password: " password
  ```

### 4. Case Statements in Bash
- **Simplifying multiple conditions:**
  ```bash
  read -p "Enter selection [1-3]: " selection
  case $selection in
    1) echo "Checking account selected";;
    2) echo "Saving account selected";;
    3) echo "Current account selected";;
    *) echo "Invalid selection";;
  esac
  ```
![Linux Commands](../images/Screenshot%20from%202025-02-20%2021-02-43.png)


### 5. Searching Text Using `grep`
- **Basic search in a file:**
  ```bash
  grep "search_term" filename
  ```
- **Recursive search in directories:**
  ```bash
  grep -Ril "error" /var/log
  ```
- **Search using character classes:**
  ```bash
  grep "[0-9]" file.txt
  ```

---

## Notes
- **Use `-t` in `read`** for setting a timeout while reading input.
- **Use `grep -i`** for case-insensitive searches.
- **Use `case` statements** instead of multiple `if-else` conditions for cleaner code.
- **Use `-s` in `read`** to hide password input for security.

---

End of Document.
