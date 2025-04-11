# Comprehensive Guide to WSL (Windows Subsystem for Linux)

## Introduction to WSL
Windows Subsystem for Linux (WSL) allows developers to run a GNU/Linux environment directly on Windows without the overhead of a traditional virtual machine or dual-boot setup. WSL is useful for development, scripting, and system administration.

---

## Installing WSL on Windows

### Enabling WSL
To install WSL, follow these steps:
1. Open Command Prompt as Administrator and run:
   ```sh
   wsl --install
   ```
   This enables WSL and installs the default Ubuntu distribution.
2. Restart your machine if prompted.
3. Open WSL by typing `wsl` in the Command Prompt or Windows Terminal.
4. Set up a username and password.

### Verifying Installation
Run the following command to check installed distributions:
```sh
wsl -l -v
```
If Ubuntu is not installed, manually install it with:
```sh
wsl --install -d Ubuntu
```

---

## Installing and Configuring MySQL on WSL

### Installing MySQL
Run the following command in WSL:
```sh
sudo apt update
sudo apt install mysql-server -y
```

### Starting MySQL Service
```sh
sudo service mysql start
```

### Accessing MySQL
```sh
sudo mysql
```
To create a database and a table:
```sql
CREATE DATABASE EmployeeDB;
USE EmployeeDB;
CREATE TABLE Employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);
```

---

## Essential Linux Commands in WSL

### File and Directory Operations
```sh
cd /mnt/c/               # Navigate to the C drive
ls -lrt                  # List files with detailed information
mkdir Linux              # Create a directory
cd LinuxPractise/        # Change directory
vi a.txt                 # Create and edit a file using vi
mkdir -p a/b/c/d         # Create nested directories
rm -rf folder_name       # Delete a folder and its contents
```

### File Manipulation
```sh
touch file.txt           # Create an empty file
touch {1..5}.txt         # Create multiple files
cp file.txt /mnt/c/      # Copy file to C drive
mv file.txt newfile.txt  # Rename or move a file
```

### Viewing File Contents
```sh
cat file.txt      # Display the entire file
head file.txt     # Display the first 10 lines
tail file.txt     # Display the last 10 lines
less file.txt     # View large files interactively
```

---

## Linux File Permissions and Access Control

### Understanding Permissions
Permissions are represented as three bits:
- Read (4)
- Write (2)
- Execute (1)

| Permission | Description         |
|------------|---------------------|
| 111 (7)    | Full permissions    |
| 110 (6)    | Read and write only |
| 101 (5)    | Read and execute    |
| 100 (4)    | Read only           |

### Changing File Permissions
```sh
chmod 777 file.txt       # Full permissions for all users
chmod 644 file.txt       # Read/write for owner, read-only for others
chmod -R 755 folder/     # Apply permissions recursively
```

### Changing File Ownership
```sh
chown user file.txt      # Change owner
chown user:group file.txt # Change owner and group
```

---

## Searching with `grep`

### Basic `grep` Commands
```sh
grep "text" file.txt    # Search for text in a file
grep -i "text" file.txt # Case-insensitive search
grep -R "text" /path    # Recursive search
grep -Rl "text" /path   # Show only filenames containing text
```

### Searching with `find`
```sh
find / -name "file.txt"  # Find file by name
find . -type d -name "logs"  # Find directories named "logs"
```

---

## Mini Project: Data Handling with MySQL and Stored Procedures in WSL

### Creating a MySQL Database
```sql
CREATE DATABASE EmployeeDB;
USE EmployeeDB;
CREATE TABLE Employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10,2)
);
```

### Writing a Stored Procedure
```sql
DELIMITER //
CREATE PROCEDURE InsertEmployees()
BEGIN
    DECLARE i INT DEFAULT 1;
    WHILE i <= 1000 DO
        INSERT INTO Employees (name, department, salary)
        VALUES (
            CONCAT('Employee', i),
            IF(i % 2 = 0, 'IT', 'HR'),
            ROUND(RAND() * (50000 - 30000) + 30000, 2)
        );
        SET i = i + 1;
    END WHILE;
END //
DELIMITER ;
```

### Executing the Procedure
```sql
CALL InsertEmployees();
SELECT * FROM Employees LIMIT 10;
```

---

## Advanced WSL Usage

### Running GUI Applications on WSL
If using WSL2, install an X server on Windows (e.g., VcXsrv) and run:
```sh
export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2}'):0
```

### Running Docker on WSL
```sh
sudo apt install docker.io -y
sudo service docker start
```

### Running a Simple Container
```sh
docker run -d -p 8080:80 nginx
```

---

## Conclusion
WSL bridges the gap between Windows and Linux, making it easier to develop, test, and run Linux applications on Windows. By mastering Linux commands, MySQL integration, and file system operations, you can fully utilize WSL in your workflow.

