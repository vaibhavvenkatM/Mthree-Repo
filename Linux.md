# Day 7 (18-02-2025)

## Linux Command Basics

After learning a few basic commands in Linux, we moved up to file and directory creation and inserting text or content into files. Below are some important commands:

### Removing Files and Directories

To remove a directory or file, we can use the following commands:  
- `rmdir -p directory_name` - Removes empty directories.  
- `rm -rf file_name` - Deletes files and directories recursively and forcefully.

If we forget a command, we can access documentation using:  
- `man command_name`  
Example: `man rmdir`

### System Information Commands

- `uname -a` - Displays system information.  
- `uname -r` - Displays the kernel release version.  
- `uname -s` - Shows the kernel name.  
- `uname -v` - Shows the kernel version.  
- `uname -m` - Displays machine architecture.  
- `uname -p` - Shows the processor type.  
- `uname -i` - Displays the hardware platform.  
- `uname -o` - Shows the operating system.

### File Handling Commands

- **Creating and inserting content into a file using `vi`:**  
  `vi file_name`

- **Displaying the content of a file:**  
  `cat file_name`

### Process Management

- **Viewing currently running processes:**  
  `ps aux`

- **Killing a process forcefully:**  
  `kill -9 process_id`  
  Example: `kill -9 119675`

### User Information

- **To find out the user currently logged in:**  
  `whoami`


# Linux Command Overview

## `ps aux` Command

The `ps aux` command in Linux is used to display detailed information about all the running processes on the system. Here's what each part of the command means:
- `ps`: This stands for "process status" and is used to show information about processes.
- `a`: This option tells `ps` to show processes for all users, not just the current user.
- `u`: This option adds additional user-related information, such as the user name, CPU, and memory usage.
- `x`: This option shows processes that don't have a terminal.

## `ping google` Command

- This will send ICMP echo requests to Google's servers, and you'll see the response times in the terminal. To stop the ping, press `Ctrl + C`.

## Sorting and Filtering Text

- **Sorting text in a file:**  
  `sort file_name`
  
- **Searching for specific text in a file:**  
  `grep "search_term" file_name`
  
- **Searching case-insensitively:**  
  `grep -i "search_term" file_name`
  
- **Displaying only matching file names:**  
  `grep -l "search_term" file_name`

## Using `awk` for Data Processing

- **Extracting specific columns:**  
  `awk '{print $1}' data.txt`  
  `awk '{print $2}' data.txt`  
  `awk '{print $3}' data.txt`
  
- **Conditional printing:**  
  `awk '$2 > 25 {print $1, "is older than 25"}' data.txt`

## Disk and Memory Usage

- **`df -h`:**  
  The `df` (disk free) command displays the available and used disk space on the system. The `-h` option shows the sizes in a human-readable format (MB, GB).

- **`free -h`:**  
  The `free` command displays information about system memory (RAM and swap). The `-h` option formats the output in human-readable sizes (MB, GB).

## `top` Command

- The `top` command in Linux is used to display real-time system information, including CPU usage, memory usage, running processes, and system uptime.
- It shows running processes and their resource consumption.
- It dynamically updates every few seconds.
- It allows sorting and filtering of processes.

## Installing and Removing Packages

- **Install curl:**  
  The command `sudo apt install curl -y` is used to install the `curl` package in a Debian-based Linux system (such as Ubuntu).
  - `sudo` gives administrative (root) privileges.
  - `apt install` is used to install a package.
  - `curl` is the package name.
  - `-y` automatically confirms the installation without prompting for user input.

- **Remove curl:**  
  Similarly, `sudo apt remove curl -y` is used to uninstall `curl` from the system.
  - `remove` deletes the package while keeping its configuration files.
  - Using `-y` ensures the removal happens without asking for confirmation.
