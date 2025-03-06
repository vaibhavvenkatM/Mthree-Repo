# Linux Basics - Day 1

## Summary
This document provides an overview of essential Linux commands related to file permissions, directory management, and file removal. It includes explanations, syntax examples, and important warnings for safe usage.

## Setting Permissions
File permissions determine who can read, write, or execute a file. In Linux, permissions are categorized as follows:

### Categories:
- **Owner (User):** The person who owns the file.
- **Group:** Other users in the same group as the owner.
- **Others:** Everyone else.

### Permission Types:
- **Read (r or 4):** Allows viewing the file's content.
- **Write (w or 2):** Allows modifying or deleting the file.
- **Execute (x or 1):** Allows running the file as a program/script.

### Changing Permissions Using `chmod`
- **Grant all permissions:**
  ```bash
  chmod 777 filename
  ```
  - First `7` = User permissions
  - Second `7` = Group permissions
  - Third `7` = Other permissions

- **Add execute permission for user:**
  ```bash
  chmod u+x filename
  ```
  - `+` is used for adding permission

- **Remove execute permission for user:**
  ```bash
  chmod u-x filename
  ```
  - `-` is used for removing permission

### Screenshot:
![Linux Commands](../images/Screenshot%20from%202025-02-17%2023-31-32.png)
![Linux Commands](../images/Screenshot%20from%202025-02-17%2023-33-03.png)

---

## Creating Directories

### Basic Commands:
- **Create a single directory:**
  ```bash
  mkdir dir_name
  ```
- **Create multiple directories:**
  ```bash
  mkdir folder1 folder2 folder3
  ```
- **Create nested directories:**
  ```bash
  mkdir -p parent/child/grandchild
  ```
  - `-p` ensures parent directories are created if they don’t exist.
- **Check and create a directory if it doesn’t exist:**
  ```bash
  [ -d my_folder ] || mkdir my_folder
  ```

### Screenshot:
![Linux Commands](../images/Screenshot%20from%202025-02-17%2023-17-11.png)
![Linux Commands](../images/Screenshot%20from%202025-02-17%2023-47-24.png)

---

## Removing Files or Directories

### Command: `rm -rf`
- **Definition of Flags:**
  - `r` → Recursive: Deletes directories and their contents.
  - `f` → Force: Ignores warnings and removes files without confirmation.

### Example:
```bash
rm -rf filename_or_directory
```

### Warning:
🚨 `rm -rf` is dangerous because it **permanently deletes files** without sending them to the trash.

❌ **NEVER run:**
```bash
rm -rf /
rm -rf /*
```
This will delete your entire system.

### Screenshot:
![Linux Commands](../images/Screenshot%20from%202025-02-17%2023-54-00.png)


---

## Notes
- Always double-check before running `rm -rf`, especially with wildcards (`*`).
- Use `chmod` carefully to avoid unintended permission changes.
- Creating nested directories with `mkdir -p` prevents errors when parent directories don’t exist.


---

End of Document.
