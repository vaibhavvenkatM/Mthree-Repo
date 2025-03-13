# Day 7 (18-02-2025)

## Linux Command Basics

After learning a few basic commands in Linux, we moved up to file and directory creation and inserting text or content into files. Below are some important commands:

### Removing Files and Directories

To remove a directory or file, we can use the following commands:
```sh
rmdir -p directory_name  # Removes empty directories
rm -rf file_name         # Deletes files and directories recursively and forcefully
```

If we forget a command, we can access documentation using:
```sh
man command_name  # Example: man rmdir
```

---

## System Information Commands
```sh
uname -a  # Displays system information
uname -r  # Displays the kernel release version
uname -s  # Shows the kernel name
uname -v  # Shows the kernel version
uname -m  # Displays machine architecture
uname -p  # Shows the processor type
uname -i  # Displays the hardware platform
uname -o  # Shows the operating system
```

---

## File Handling Commands

- **Creating and inserting content into a file using `vi`:**
```sh
vi file_name
```

- **Displaying the content of a file:**
```sh
cat file_name
```

---

## Process Management

- **Viewing currently running processes:**
```sh
ps aux
```

- **Killing a process forcefully:**
```sh
kill -9 process_id  # Example: kill -9 119675
```

---

## User Information

- **To find out the user currently logged in:**
```sh
whoami
```

---

# Linux Command Overview

## `ps aux` Command

The `ps aux` command in Linux is used to display detailed information about all the running processes on the system. Here's what each part of the command means:
```sh
ps         # Shows process status
-a         # Shows processes for all users
-u         # Adds user-related information (CPU, memory usage)
-x         # Displays processes without a terminal
```

---

## `ping google` Command

This will send ICMP echo requests to Google's servers, and you'll see the response times in the terminal. To stop the ping, press `Ctrl + C`.
```sh
ping google.com
```

---

## Sorting and Filtering Text

- **Sorting text in a file:**
```sh
sort file_name
```

- **Searching for specific text in a file:**
```sh
grep "search_term" file_name
```

- **Searching case-insensitively:**
```sh
grep -i "search_term" file_name
```

- **Displaying only matching file names:**
```sh
grep -l "search_term" file_name
```

---

## Using `awk` for Data Processing

- **Extracting specific columns:**
```sh
awk '{print $1}' data.txt  # Prints first column
awk '{print $2}' data.txt  # Prints second column
awk '{print $3}' data.txt  # Prints third column
```

- **Conditional printing:**
```sh
awk '$2 > 25 {print $1, "is older than 25"}' data.txt
```

---

## Disk and Memory Usage

- **Check disk usage:**
```sh
df -h  # Shows available and used disk space in human-readable format
```

- **Check memory usage:**
```sh
free -h  # Displays system memory usage (RAM and swap) in human-readable format
```

---

## `top` Command

- The `top` command in Linux is used to display real-time system information, including CPU usage, memory usage, running processes, and system uptime.
- It dynamically updates every few seconds.
- Allows sorting and filtering of processes.
```sh
top
```

---

## Installing and Removing Packages

- **Install `curl` package:**
```sh
sudo apt install curl -y
```
- **Remove `curl` package:**
```sh
sudo apt remove curl -y
```

This document provides an overview of essential Linux commands for file handling, process management, system monitoring, and package management. 🚀

