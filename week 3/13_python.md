# Python String Manipulation - A Comprehensive Guide

## Overview
This document provides an in-depth explanation of various **Python string manipulation functions**, including their purpose, approach, and example .

---

## remove_outermost_parenthesis(s)
###  Purpose:
Removes the **outermost parentheses** from a valid parenthesis string.

###  Approach:
- Uses a **counting method** instead of a stack (reduces extra space usage).
- Only appends parentheses if they are not at the outermost level.



###  Code:
```python
def remove_outermost_parenthesis(s):
    result = []
    open_count = 0
    for char in s:
        if char == '(' and open_count > 0:
            result.append(char)
        elif char == ')' and open_count > 1:
            result.append(char)
        open_count += (char == '(') - (char == ')')
    return ''.join(result)
```
### Example:
```python
print(remove_outermost_parenthesis("(()())"))  # Output: "()()"
```

---

## reverse_words(s)
### Purpose:
Reverses the order of words in a string.

### 🔹 Approach:
- Uses **split()** to tokenize the string.
- Uses **list slicing[::-1]** to reverse the word order.
- Uses **join()** to reconstruct the sentence.



### Code:
```python
def reverse_words(s):
    words = [word for word in s.split() if word]
    return ' '.join(words[::-1])
```



---

## largest_odd_number(s)
### Purpose:
Finds the **largest odd number** that can be formed by trimming digits from the end.

###  Approach:
- Iterates **from right to left**, returning the substring as soon as an odd digit is found.



###  Code:
```python
def largest_odd_number(s):
    for i in range(len(s)-1, -1, -1):
        if int(s[i]) % 2 == 1:
            return s[:i+1]
    return ""
```
### Example :
```python
print(largest_odd_number("354270"))  # Output: "35427"
print(largest_odd_number("24680"))   # Output: ""
```

---

## longest_common_substring(words)
### Purpose:
Finds the **longest substring** that is common across all words.

###  Approach:
- Starts with the **shortest word** and tests substrings from it.
- Reduces unnecessary comparisons by checking only substrings from the shortest word.


###  Code:
```python
def longest_common_substring(words):
    if not words:
        return ""
    shortest = min(words, key=len)
    longest_substr = ""
    for i in range(len(shortest)):
        for j in range(i + 1, len(shortest) + 1):
            substr = shortest[i:j]
            if all(substr in word for word in words):
                if len(substr) > len(longest_substr):
                    longest_substr = substr
            else:
                break
    return longest_substr
```
###  Example Usage:
```python
words = ["flight", "lightning", "slight"]
print(longest_common_substring(words))  # Output: "light"
```

---

## are_rotations(s1, s2)
### Purpose:
Checks if two strings are **rotations of each other**.

### Approach:
- Uses **concatenation (s1 + s1)** to check if `s2` exists inside.



### Code:
```python
def are_rotations(s1, s2):
    return len(s1) == len(s2) and s2 in (s1 + s1)
```
### Example :
```python
print(are_rotations("abcd", "cdab"))  # Output: True
print(are_rotations("abcd", "cdba"))  # Output: False
```

---




End of Document.