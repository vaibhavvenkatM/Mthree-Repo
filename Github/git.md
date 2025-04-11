# GitHub Complete Guide

## Introduction
GitHub is a web-based platform that uses Git for version control. It allows developers to collaborate, track changes, and manage projects efficiently.

---

## 1. Setting Up Git and GitHub
### Install Git
Download and install Git from [git-scm.com](https://git-scm.com/).

### Configure Git
After installation, configure your Git username and email:
```sh
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

Check the configuration:
```sh
git config --list
```

---

## 2. Creating a Repository
### Creating a Repository on GitHub
1. Go to [GitHub](https://github.com/) and log in.
2. Click on the **+** icon in the top-right corner and select **New Repository**.
3. Enter a repository name, choose visibility (public/private), and click **Create repository**.

### Initializing a Local Repository
Navigate to your project folder and initialize Git:
```sh
git init
```

---

## 3. Adding Files and Committing Changes
### Add Files to Staging Area
```sh
git add filename   # Add a specific file
git add .          # Add all files in the directory
```

### Commit Changes
```sh
git commit -m "Initial commit"
```

---

## 4. Connecting to GitHub and Pushing Changes
### Add Remote Repository
```sh
git remote add origin https://github.com/your-username/repository-name.git
```

### Push Changes to GitHub
```sh
git push -u origin main
```

If the default branch is **master**, use:
```sh
git push -u origin master
```

---

## 5. Cloning a Repository
To clone an existing repository:
```sh
git clone https://github.com/your-username/repository-name.git
```

To clone using SSH:
```sh
git clone git@github.com:your-username/repository-name.git
```

---

## 6. Pulling and Fetching Changes
### Pull the Latest Changes
```sh
git pull origin main
```

### Fetch and Merge Changes
```sh
git fetch origin
```
```sh
git merge origin/main
```

---

## 7. Branching and Merging
### Create a New Branch
```sh
git branch new-branch
```

### Switch to a Branch
```sh
git checkout new-branch
```

Or create and switch to a branch in one step:
```sh
git checkout -b new-branch
```

### Merge a Branch
First, switch to the branch you want to merge into (usually `main`):
```sh
git checkout main
```
Then merge:
```sh
git merge new-branch
```

---

## 8. Working with SSH Keys
### Generate an SSH Key
```sh
ssh-keygen -t rsa -b 4096 -C "your-email@example.com"
```
Press **Enter** to save the key in the default location.

### Add SSH Key to GitHub
1. Copy the SSH key:
   ```sh
   cat ~/.ssh/id_rsa.pub
   ```
2. Go to **GitHub → Settings → SSH and GPG Keys**.
3. Click **New SSH key**, paste the key, and save.

### Test the SSH Connection
```sh
ssh -T git@github.com
```

If successful, you'll see:
```sh
Hi your-username! You've successfully authenticated.
```

---

## 9. Undoing Changes
### Undo Last Commit (Keep Changes)
```sh
git reset --soft HEAD~1
```

### Undo Last Commit (Discard Changes)
```sh
git reset --hard HEAD~1
```

### Remove a File from Staging
```sh
git reset filename
```

---

## 10. Deleting a Branch
### Delete a Local Branch
```sh
git branch -d branch-name
```

### Delete a Remote Branch
```sh
git push origin --delete branch-name
```

---

## 11. Forking and Pull Requests
### Fork a Repository
1. Go to the repository on GitHub.
2. Click **Fork** to create a copy under your account.

### Create a Pull Request
1. Push your changes to a new branch.
2. Go to the **original repository** and click **New Pull Request**.
3. Select your branch and submit the PR.

---

## 12. Git Ignore
Create a `.gitignore` file to exclude specific files:
```sh
touch .gitignore
```
Example `.gitignore` file:
```
node_modules/
.env
.DS_Store
```

---

## 13. GitHub Actions (CI/CD)
GitHub Actions automate workflows.
Example `ci.yml` file for testing:
```yaml
name: CI Workflow
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v2
      - name: Install Dependencies
        run: npm install
      - name: Run Tests
        run: npm test
```

---

## Conclusion
This guide covers everything you need to start using Git and GitHub effectively. 🚀

