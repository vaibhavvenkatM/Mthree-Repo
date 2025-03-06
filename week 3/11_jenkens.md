# README - Jenkins Pipeline Setup

## Overview
This document provides a step-by-step guide to creating a **Jenkins CI/CD pipeline** for a Python project, including **Git initialization, Docker integration, automated testing, and deployment**.

---

## Steps to Create a Jenkins Pipeline

### Step 1: Create Project Directory
```bash
mkdir my_python_project && cd my_python_project
```
- Creates a new project folder and navigates into it.

### Step 2: Initialize a Git Repository
```bash
git init
```
- Initializes a new Git repository for version control.

### Step 3: Create `pyproject.toml` for Project Configuration
```bash
cat << EOF > pyproject.toml
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"
[project]
name = "my_python_project"
version = "0.1.0"
EOF
```
- Defines metadata and dependencies for the project.

### Step 4: Create Source Code and Main Python File
```bash
mkdir -p src/my_python_project
cat << EOF > src/my_python_project/main.py
if __name__ == "__main__":
    print("Hello from my Python project!")
EOF
```
- Creates a Python script with a simple message output.

### Step 5: Create a Basic Test File
```bash
mkdir tests
cat << EOF > tests/test_main.py
import unittest
from src.my_python_project.main import main
class TestMain(unittest.TestCase):
    def test_output(self):
        self.assertEqual(main(), "Hello from my Python project!")
EOF
```
- Adds a basic unit test for the application.

### Step 6: Create a Dockerfile
```bash
cat << EOF > Dockerfile
FROM python:3.9-slim
COPY src/my_python_project /app
CMD ["python", "/app/main.py"]
EOF
```
- Defines a lightweight Python-based container for the application.

### Step 7: Create a `.gitignore` File
```bash
cat << EOF > .gitignore
__pycache__/
*.pyc
venv/
build/
dist/
EOF
```
- Specifies files and directories to be ignored by Git.

### Step 8: Build the Initial Python Wheel File
```bash
pip install build
python -m build --wheel
```
- Packages the project into a distributable format.

### Step 9: Commit Everything to Git
```bash
git add .
git commit -m "Initial project setup with Python code and Dockerfile"
```
- Saves changes to the repository.

### Step 10: Create a `Jenkinsfile` for CI/CD Pipeline
```bash
cat << EOF > Jenkinsfile
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-repo.git'
            }
        }
        stage('Build') {
            steps {
                sh 'pip install build && python -m build --wheel'
            }
        }
        stage('Test') {
            steps {
                sh 'pip install pytest && pytest'
            }
        }
        stage('Docker Build') {
            steps {
                sh 'docker build -t my_python_project .'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker run -d -p 8080:80 my_python_project'
            }
        }
    }
    post {
        success { echo 'Pipeline executed successfully!' }
        failure { echo 'Pipeline execution failed.' }
    }
}
EOF
```
- Defines a Jenkins pipeline for **automated build, test, and deployment**.

![Linux Commands](../images/Screenshot%20from%202025-02-27%2003-09-58.png)

### Step 11: Add and Commit Jenkinsfile to Git
```bash
git add Jenkinsfile
git commit -m "Add Jenkinsfile for CI/CD pipeline"
```
- Tracks and commits the CI/CD configuration.

### Step 12: Display Project Structure
```bash
echo "Project structure created:"
ls -R
```
- Verifies the directory and file structure.

---

## Additional Jenkins Pipeline for Repository Cloning

### Stage 1: Clone Repository
```bash
cleanWs()
sh 'git clone https://github.com/your-repo.git'
ls -la my_python_project
```
- Cleans the workspace and clones the repository.

### Stage 2: Verify Clone
```bash
cd my_python_project
ls -la
git status
```
- Ensures the repository was cloned correctly.

---

## Key Takeaways
✅ **Project Initialization** – Set up a structured Python project with **pyproject.toml** and **Dockerfile**.
✅ **Automated Testing** – Used `unittest` and `pytest` for test automation.
✅ **Git & GitHub** – Version-controlled the project with `git init`, `add`, `commit`, and `clone`.
✅ **CI/CD with Jenkins** – Implemented a Jenkins pipeline for automated build, test, and deployment.
✅ **Docker Integration** – Containerized the application with a Dockerfile.
✅ **Jenkins Pipeline for Git Cloning** – Ensured correct workspace setup for CI/CD.

---

## Notes
- Always verify project dependencies before running a build.
- Use `docker ps` to list running containers and `docker logs <container_id>` for debugging.
- Regularly clean up unused containers using `docker system prune`.
- Ensure Jenkins has the necessary permissions to run Docker commands.

---

End of Document.
