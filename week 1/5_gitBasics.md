# Git: Introduction and Essential Commands

## What is Git and Why Use It?
Git is a **distributed version control system** designed to track changes in source code during software development. It allows multiple developers to **collaborate, revert to previous versions,** and **manage different branches** of a project efficiently.

---

## Basic Git Commands

### 1. `pwd` - Print Working Directory
Displays the current working directory where you are working.

### 2. `mkdir` - Make Directory
Creates a new directory for a project and allows navigation into it.

### 3. `git init` - Initialize Repository
Initializes an empty Git repository in the current directory, making it ready for version control.

### 4. `echo` - Create a File and Add Content
Creates a new file and adds the specified content to it.

### 5. `git add` - Stage Changes
Adds specified files to the staging area, preparing them for commit.

### 6. `git commit` - Commit Changes
Records the staged changes in the repository with a descriptive message.

### 7. `git remote add origin` - Link to Remote Repository
Connects the local repository to a remote repository on platforms like GitHub.

### 8. `git push` - Push Changes to Remote
Uploads local commits to the specified branch of the remote repository.

### 9. `git reset --hard origin/main` - Reset Local Repository
Discards all local changes and restores the repository to match the remote state.

### 10. `git pull origin main` - Fetch and Merge Changes
Downloads updates from the remote repository and merges them into the local branch.

### 11. `git pull --rebase origin main` - Rebase Local Changes
Applies local commits on top of the latest changes fetched from the remote repository.

### 12. `git checkout -b new-feature` - Create and Switch Branch
Creates a new branch and switches to it for independent development.

### 13. `git merge` - Merge Branches
Combines changes from a specified branch into the current branch.

### 14. `git stash` - Save Uncommitted Changes Temporarily
Stores uncommitted changes in a temporary stack to allow a clean working directory.

### 15. `git stash pop` - Restore Stashed Changes
Applies the most recent stashed changes back to the working directory.

---

## Handling Merge Conflicts

### Example Merge Conflict:
If two developers modify `file.txt` in different branches and merge:
```sh
git merge new-feature
```
Possible output:
```
CONFLICT (content): Merge conflict in file.txt
```

### Resolving Merge Conflicts:
1. Open `file.txt` and manually resolve conflicts:
```md
<<<<<<< HEAD  
Existing content  
=======  
New content from new-feature  
>>>>>>> new-feature  
```
2. Edit the file to keep the correct version and remove conflict markers.
3. Stage and commit the resolved file:
   ```sh
   git add file.txt
   git commit -m "Resolved merge conflict"
   ```

---

These essential Git commands will help you effectively manage your source code and collaborate with your team.

