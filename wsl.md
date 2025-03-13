# Day 6 (17-02-2025)

## WSL Installation and Linux Commands Overview

### Installing Linux on Windows with WSL

We installed Linux on Windows using WSL (Windows Subsystem for Linux) to work on both Windows and Linux environments within a single machine.

#### Steps to Install WSL:
1. Open Command Prompt and enter:  
   `wsl --install`  
   It enables and installs the Ubuntu distribution.  
2. Set up the username and password.

#### Installing MySQL in Ubuntu:
To install MySQL on Ubuntu, run the command:  
`sudo apt install mysql-server`

To access MySQL:  
`sudo mysql`

After installation, we created tables and executed some queries.

### Working with WSL Commands

#### File and Directory Operations:
- `cd /mnt/c/` - Move to the C drive.
- `ls -lrt` - List all files in the current directory.
- `mkdir Linux` - Create a new Linux directory.
- `cd LinuxPractise/` - Navigate to the Linux directory.
- `vi a.txt` - Create and open a file using the `vi` editor.
- `mkdir -p a/b/c/d/e/f/g/h/i/j/k/l/m/temp.txt` - Create nested directories and files.
- `touch c406.txt` - Create a file using the `touch` command.
- `touch {1..5}.txt` - Create multiple files at once.
- `cp -rf b.txt /mnt/c/` - Copy `b.txt` to the C drive.
- `cp -rf a /mnt/c/Users/username/` - Copy an entire folder to another location.
- `rm -rf /mnt/c/Users/srs33/a` - Delete a file or folder.

### Linux Permissions and Access Control

#### Understanding Permissions:
Permissions in Linux are represented as three bits:
- Read (4)
- Write (2)
- Execute (1)

| Permission | Description             |
|------------|-------------------------|
| 1 1 1      | Full permissions         |
| 1 1 0      | Read and Write only      |
| 1 0 1      | Read and Execute only    |
| 0 1 1      | Write and Execute only   |
| 0 0 1      | Execute only             |
| 0 1 0      | Write only               |
| 1 0 0      | Read only                |
| 0 0 0      | No permission            |

#### Categories of Linux Permissions:
- **Owner**
- **Group**
- **Others**

#### Modifying Permissions:
Use `chmod` to change permissions:  
`chmod -R 777 a` - This grants full permissions to all categories.

### Searching in Linux with `grep`

#### `grep` Command Usage:
- `grep -Ril "text"`  
   `-R` searches recursively.  
   `-i` ignores case.  
   `-l` displays filenames containing the search term.  

For more details on Linux commands:  
`man grep`

### Mini Project: Data Handling with MySQL and Stored Procedures in WSL

We created a mini project using WSL Ubuntu and MySQL to dynamically generate 1000 entries with stored procedures.

#### Steps:
1. **Create a MySQL database:**
   ```sql
   CREATE DATABASE EmployeeDB;
   USE EmployeeDB;


Write a stored procedure to insert 1000 records:

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

Execute the stored procedure:
CALL InsertEmployees();

verify the data
SELECT * FROM Employees LIMIT 10;
