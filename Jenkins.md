# Day 13 - 26-02-2025

We have installed Jenkins and are now working with it.

### Steps Followed:

1. **Making the directory and cloning it into Git**:
   - To create a directory:
     ```bash
     mkdir my_python_project
     ```
   - To move into the directory:
     ```bash
     cd my_python_project
     ```
   - To initialize Git:
     ```bash
     git init
     ```

2. **Adding the TOML file**:
   - This file is used to store the dependencies required for the project.

3. **Creating the `src` file**:
   - We used a simple message in the `src` file to print.

4. **Creating the `tests` file**:
   - The `tests` file is used for unit testing and integration testing to ensure the code is working correctly.

   ```bash
   mkdir tests


Creating a Dockerfile:

We created a Dockerfile for the project.
Creating the .gitignore file:

The .gitignore file helps avoid unnecessary files, improving performance.
Installing the Build Package and Building the Wheel File:

Build is a package that creates distributions for Python projects.
Wheel speeds up installation and makes deployment faster.
bash
Copy
Edit
pip install build
python3 -m build --wheel
If the above commands don't work, use the following command:
bash
Copy
Edit
pip install --break-system-packages build
python3 -m build --wheel
Configuring Git on Linux:

Set up Git configuration:
bash
Copy
Edit
git config --global user.email "vaibhavvenkatm@gmail.com"
git config --global user.name "vaibhavvenkatM"
Committing the Changes to GitHub:

Commit the initial project setup:
bash
Copy
Edit
git commit -m "Initial project setup with Python code and Dockerfile"
Creating the Jenkinsfile:

A Jenkinsfile is a script that defines the Jenkins pipeline for automating builds, tests, and deployments.
Create the Jenkinsfile:
bash
Copy
Edit
vi Jenkinsfile
Adding the Jenkinsfile to Git:

Add the Jenkinsfile to the repository:
bash
Copy
Edit
git add Jenkinsfile
git commit -m "Added Jenkinsfile"
Pushing Changes to GitHub:

Push the Jenkinsfile to GitHub:
bash
Copy
Edit
git push -u origin main
Logging into Jenkins:

Open the Jenkins URL: http://localhost:8080/login?from=%2F
Login using your username (default is admin) and password.
After login, the dashboard will appear.
Creating a New Pipeline:

Click on "New Item", provide a name, and select the "Pipeline" option.
Click "Create".
Running a Simple Pipeline:

First, tried the "Hello World" pipeline by selecting from the scripting menu.
Click "Save" and then "Build". The build should return success.
To view the output, click on "Console Output".
Creating a Sample Pipeline:

The Jenkinsfile automates the process of cloning the GitHub repository into Jenkins workspace.
It checks for old files, deletes them, clones from GitHub, and verifies the files.
Provide your GitHub repository link in the Jenkinsfile.
Adding More Automation to Jenkinsfile:

The Jenkinsfile now automates cloning the GitHub repository, builds the Python package, creates the Docker image, and deploys it to the Docker container.
Faced an issue while creating the wheel file, so I created a virtual environment and built the file.
Make sure to provide your GitHub repository link.
Building the Pipeline:

After completing the setup, click "Build Now" and wait a few seconds for the build to finish.