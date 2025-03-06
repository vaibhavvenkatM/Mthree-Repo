# Linux Basics - Day 2

## Summary
This document covers essential Linux commands related to searching files, copying and moving files, system information, locating files, and file compression.

---

## Main Commands Overview

### Searching Files
- `grep "search_term" filename` - Searches for a term in a file.
- `grep -r "critical" /dir1/dir2` - Recursively searches in directories.

### Screenshot:
![Linux Commands](../images/Screenshot%20from%202025-02-18%2000-11-09.png)


### Copying and Moving Files
- `cp file.txt newfile.txt` - Copies and renames a file.
- `mv source_file destination` - Moves a file to a new location.

### Screenshot:
![Linux Commands](../images/Screenshot%20from%202025-02-18%2000-25-36.png)


### Removing Directories
- `rmdir directory_name` - Removes an empty directory.
- `rm -rf directory_name` - Deletes a directory and its contents.

### Displaying System Information
- `uname -a` - Shows all system details.
- `uname -r` - Displays the kernel version.

### Screenshot:
![Linux Commands](../images/Screenshot%20from%202025-02-18%2022-55-18.png)

### Locating Files
- `locate filename` - Finds a file quickly.
- `find /home -name "file.txt"` - Searches for a file in a directory.

### Screenshot:
![Linux Commands](../images/Screenshot%20from%202025-02-18%2023-02-21.png)

### Archiving and Compression
- `tar -cvf archive.tar file1 file2` - Creates an archive.
- `tar -xvf archive.tar` - Extracts an archive.
- `gzip file.txt` - Compresses a file.
- `gunzip file.txt.gz` - Decompresses a file.

### Screenshot:
![Linux Commands](../images/Screenshot%20from%202025-02-18%2023-57-25.png)
![Linux Commands](../images/Screenshot%20from%202025-02-19%2000-01-29.png)



### Shell Scripting
- `if-else` conditions and variable definitions for automation.

### Screenshot:
![Linux Commands](../images/Screenshot%20from%202025-02-19%2000-46-44.png)

---

## Notes
- Use `grep -r` for searching within directories.
- Be careful with `find -exec rm` to avoid accidental deletions.
- `tar` is useful for archiving and transferring multiple files efficiently.
- `uname -a` provides a quick summary of system information.

---

End of Document.
