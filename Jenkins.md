<!-- # Day 13 - 26-02-2025

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

After completing the setup, click "Build Now" and wait a few seconds for the build to finish. -->


# Jenkins: Complete Concept & Detailed Explanation

## 1. What is Jenkins?
Jenkins is an open-source automation server that helps automate the software development lifecycle (SDLC), including building, testing, and deploying applications. It is primarily used in Continuous Integration (CI) and Continuous Deployment (CD) pipelines.
- Written in Java.
- Provides a web-based user interface.
- Supports multiple plugins to integrate with various DevOps tools.

---

## 2. Why Use Jenkins?
- **Automates Repetitive Tasks:** Reduces manual intervention.
- **Continuous Integration (CI):** Automatically tests and merges code.
- **Continuous Deployment (CD):** Deploys code to production environments.
- **Plugin Support:** Supports over 1800+ plugins for different integrations.
- **Distributed Builds:** Can run jobs across multiple nodes for scalability.
- **Supports Various Tools:** Integrates with Docker, Kubernetes, Git, AWS, etc.

---

## 3. Software Development Before Jenkins (Traditional Approach)
### Traditional Development Approach:
1. **Manual Code Integration:**
   - Developers worked on separate features.
   - Merged code once or twice a week/month.
   - Led to integration conflicts and delays.
2. **Manual Testing:**
   - QA teams manually tested code.
   - Took days/weeks for feedback.
   - Higher chances of bugs reaching production.
3. **Manual Deployment:**
   - Deployment scripts were executed manually.
   - Risky, error-prone, and inconsistent.

### Challenges Faced:
- **Long Development Cycles:** New features took weeks/months to reach production.
- **Late Bug Detection:** Issues were discovered after development, making fixes expensive.
- **Inconsistent Environments:** Different environments (Dev, QA, Prod) had version mismatches.
- **Developer Burnout:** Merging & debugging old code was frustrating.

---

## 4. Evolution: How Jenkins Solves These Problems
Jenkins introduced Continuous Integration (CI) & Continuous Deployment (CD) to automate and streamline development.

| Before Jenkins | After Jenkins (Using CI/CD) |
|---------------|----------------------------|
| Developers merged code manually. | Jenkins automatically merges and tests code. |
| Code conflicts were detected late. | Jenkins checks for conflicts early (CI). |
| Testing was manual. | Jenkins runs automated tests (unit, integration, security). |
| Deployment was manual & risky. | Jenkins automates deployment (CD). |
| Releases were slow & unstable. | Faster releases with higher quality. |

---

## 5. Example: Before vs. After Jenkins in Real Life
### Scenario Without Jenkins (Manual Approach)
1. Developers write code → Manually push to GitHub.
2. Merge conflicts arise → Devs spend hours resolving them.
3. Code is manually tested → Some issues go unnoticed.
4. Deployment is manual → A mistake leads to website downtime.
5. Customers face bugs → Business loses revenue.

**💥 Problem:** Slow development, errors in production, unhappy customers.

### Scenario With Jenkins (Automated CI/CD Pipeline)
1. Developers push code to GitHub → Jenkins automatically detects changes.
2. **Jenkins triggers CI pipeline:**
   - Builds the code.
   - Runs unit & integration tests.
   - Checks code quality using SonarQube.
3. If the build & tests pass, Jenkins proceeds to the next stage.
4. **Jenkins triggers CD pipeline:**
   - Creates a Docker image.
   - Deploys the app to Kubernetes.
5. Application is live without downtime 🎉

✅ **Result:** Faster releases, fewer bugs, and a smooth customer experience!

---

## 6. How This Pipeline Works:
1. **Code Checkout:** Fetches the latest code from GitHub.
2. **Build Stage:** Compiles the code using Maven.
3. **Test Stage:** Runs automated tests.
4. **Code Quality Check:** Uses SonarQube for static code analysis.
5. **Dockerization:** Creates and pushes a Docker image.
6. **Deployment:** Deploys the app to Kubernetes.

🚀 **Outcome:** Code is tested, verified, and deployed automatically!

---

## 7. Installation & Setup
Jenkins can be installed on Windows, macOS, and Linux using:
- **WAR file:** `java -jar jenkins.war`
- **Docker:** `docker run -p 8080:8080 jenkins/jenkins`
- **Kubernetes:** Deploy using Helm charts.

### Steps After Installation:
1. Access Jenkins UI at `http://localhost:8080`
2. Enter Admin Password (from `/var/lib/jenkins/secrets/initialAdminPassword`)
3. Install Suggested Plugins.
4. Create an Admin User.

---

## 8. Jenkins Job Types
- **Freestyle Job:** Simple job for running scripts.
- **Pipeline Job:** Defines CI/CD workflows as code.
- **Multi-Branch Pipeline:** Handles multiple Git branches.
- **Folder-Based Job:** Organizes multiple jobs in one folder.

---

## 9. Jenkins Pipelines (CI/CD)
### **Declarative Pipeline (Preferred)**
```groovy
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo "Building application..."
            }
        }
        stage('Test') {
            steps {
                echo "Running tests..."
            }
        }
        stage('Deploy') {
            steps {
                echo "Deploying application..."
            }
        }
    }
}
```

### **Scripted Pipeline**
```groovy
node {
    stage('Build') {
        echo "Building application..."
    }
    stage('Test') {
        echo "Running tests..."
    }
    stage('Deploy') {
        echo "Deploying application..."
    }
}
```

---

## 10. Jenkins Plugins
Essential plugins:
- **Git Plugin** (SCM integration)
- **Docker Plugin** (Build & push images)
- **Pipeline Plugin** (CI/CD pipelines)
- **Kubernetes Plugin** (Deploy to K8s)
- **SonarQube Plugin** (Code quality checks)

---

## 11. Jenkins with Docker & Kubernetes
### **Example Pipeline:**
```groovy
pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t myapp:latest .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub', url: '']) {
                    sh 'docker push myapp:latest'
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yaml'
            }
        }
    }
}
```

---

## 12. Jenkins Security Best Practices
- Use **Role-Based Access Control (RBAC)**.
- Enable **TLS/SSL** for secure communication.
- Regularly **update plugins**.
- Run Jenkins in **Docker containers** for isolation.

---

## 13. Jenkins Alternatives
- **GitHub Actions** (Built-in CI/CD for GitHub)
- **GitLab CI/CD** (Integrated with GitLab)
- **CircleCI** (Cloud-based CI/CD)
- **Travis CI** (Open-source CI tool)

---

## Conclusion
Jenkins is a powerful tool for automating CI/CD pipelines, integrating with DevOps tools, and ensuring efficient software development. By leveraging pipelines, plugins, and distributed builds, Jenkins enables organizations to accelerate deployment while maintaining high-quality code.