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

- **Creating an empty file:**
```sh
touch file_name
```

- **Reading a file:**
```sh
less file_name  # View file content page by page
more file_name  # View file content, one page at a time
```

- **Writing to a file:**
```sh
echo "Hello, World!" > file.txt  # Overwrites file content
echo "Appending new line" >> file.txt  # Appends to the file
```

---

## Directory Management

- **Create a new directory:**
```sh
mkdir directory_name
```
- **Change to a directory:**
```sh
cd directory_name
```
- **List files in a directory:**
```sh
ls -l  # Long format listing
ls -a  # Show hidden files
ls -lh # Human-readable file sizes
```

---

## Process Management

- **Viewing currently running processes:**
```sh
ps aux
```
![](https://github.com/vaibhavvenkatM/documentation/blob/main/Images/29.png)

- **Killing a process forcefully:**
```sh
kill -9 process_id  # Example: kill -9 119675
```
![](https://github.com/vaibhavvenkatM/documentation/blob/main/Images/6.png)

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

## Networking Commands

- **Check IP address:**
```sh
ip addr show
ifconfig
```

- **Check network connectivity:**
```sh
ping google.com
```
![](https://github.com/vaibhavvenkatM/documentation/blob/main/Images/30.png)

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
![](https://github.com/vaibhavvenkatM/documentation/blob/main/Images/8.png)

- **Check memory usage:**
```sh
free -h  # Displays system memory usage (RAM and swap) in human-readable format
```
![](https://github.com/vaibhavvenkatM/documentation/blob/main/Images/28.png)

---

## `top` Command

- The `top` command in Linux is used to display real-time system information, including CPU usage, memory usage, running processes, and system uptime.
- It dynamically updates every few seconds.
- Allows sorting and filtering of processes.
```sh
top
```
![](https://github.com/vaibhavvenkatM/documentation/blob/main/Images/9.png)

---

## File Permissions

- **Changing file permissions:**
```sh
chmod 755 file_name  # Owner: read/write/execute, Others: read/execute
```

- **Changing ownership:**
```sh
chown user_name file_name
```

---

## Mounting and Unmounting Drives

- **Mount a device:**
```sh
mount /dev/sdb1 /mnt
```

- **Unmount a device:**
```sh
umount /mnt
```

---

## Shell Scripting Basics

- **Creating a simple script:**
```sh
echo "Hello, World!" > script.sh
chmod +x script.sh
./script.sh
```

- **Using arrays in shell scripting:**
```sh
my_array=("apple" "banana" "cherry")
echo "First item: ${my_array[0]}"
```

---

## Archiving and Compressing Files

- **Create a tar archive:**
```sh
tar -cvf archive.tar directory_name
```

- **Extract a tar archive:**
```sh
tar -xvf archive.tar
```

- **Create a compressed archive:**
```sh
tar -czvf archive.tar.gz directory_name
```

- **Extract a compressed archive:**
```sh
tar -xzvf archive.tar.gz
```

---

## Aliases in Linux

- **Creating an alias:**
```sh
alias ll='ls -lah'
```

- **Removing an alias:**
```sh
unalias ll
```

---

## Viewing Calendar
```sh
cal 2025
```

This document provides an overview of essential Linux commands for file handling, process management, system monitoring, and package management. 🚀

