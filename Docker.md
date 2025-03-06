# Day 11 (24-02-2025)

## DOCKER

Docker is a powerful tool for developing and deploying applications efficiently. It is lightweight and reduces dependencies. It does not require the whole operating system. Containers run faster than virtual machines. In simpler terms, we can say Docker is a shipping container for software.

### DOCKER IMAGE

A Docker Image contains everything a container needs to run. It contains all the code, dependencies, libraries, and the operating system it needs. It is lightweight and contains all the configurations to run the application. It acts as a blueprint for containers. Images are stored in Docker Hub or private GitHub repositories. We can create a Docker image using a Dockerfile.

### DOCKER CONTAINER

A Docker Container is a running instance of a Docker image. It is an isolated environment that includes everything to run the application. Containers can be created, stopped, and deleted at any time. It can be modified while running. It is dynamic in nature. Stored in Docker Engine as a running process. 

In simpler terms, a Docker image is a recipe for a dish, and a Docker container is the prepared dish that we can eat.

### Main Parts of Docker

1. **Docker CLI**  
   CLI stands for Command Line Interface. The Docker CLI is used to interact with Docker using commands in the terminal. It allows us to build, run, and interact with Docker Containers. In simpler terms, it is used to build and run commands.

2. **Docker Daemon**  
   It is a background service that runs on our system and handles all Docker operations. It listens to the commands from CLI and manages the containers.

3. **Docker Registry**  
   It is a storage system for storing Docker images. We can push and pull images from a repository. It is cloud or local storage for Docker images.

### Docker Installation

1. **Update Package List**  
   This will refresh your package index and ensure that you're installing the latest versions of packages. Run the following command:

   sudo apt update
Install Prerequisites
Docker requires some dependencies to be installed. Run the following command to install them:


sudo apt install apt-transport-https ca-certificates curl software-properties-common
Add Docker's Official GPG Key
To authenticate Docker’s official packages, you need to add Docker’s GPG key:


curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
Add Docker Repository
Next, add the Docker repository to your system so you can install Docker from it:


sudo add-apt-repository "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
Update Package List Again
Now that you have added Docker’s official repository, update your package list again:


sudo apt update
Install Docker
With the Docker repository now added, you can install Docker:


sudo apt install -y docker-ce docker-ce-cli containerd.io
Add Your User to the Docker Group
To avoid needing sudo for Docker commands, add your user to the Docker group:

sudo usermod -aG docker $USER
Verify Docker Installation
To verify that Docker was installed successfully, run the following command:


docker --version
Set Up the Python Docker Project
Create the Project Directory:

mkdir python-dock-project
cd python-dock-project/
Create the Necessary Subdirectories:

mkdir src tests
Create the Required Python Files:

touch src/__init__.py
touch src/main.py
Add Dependencies to requirements.txt
Add the required Python packages to the requirements.txt file. For example, if your project needs Flask and Requests, your requirements.txt will look like this:

txt

flask
requests
Configure Dockerfile
Your Dockerfile defines how to build your Docker image. Here’s a basic example for a Python project:

dockerfile

# Use the official Python image from Docker Hub
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements.txt file into the container
COPY requirements.txt .

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire src folder into the container
COPY src/ ./src

# Set the command to run the Python application
CMD ["python", "src/main.py"]
Configure .dockerignore
In the .dockerignore file, list files and directories that should not be included in the Docker image. For example:

txt

__pycache__
*.pyc
*.pyo
*.pyd
.git
*.db
Configure docker-compose.yml
docker-compose.yml simplifies the process of managing multi-container Docker applications. Here’s a basic example for running your Python app:

yaml

version: '3'
services:
  python-app:
    build: .
    volumes:
      - ./src:/app/src
    ports:
      - "5000:5000"
Make the Required Files
Generate the image by using the commands:

mkdir python-dock-project
cd python-dock-project/
mkdir src tests
touch src/__init__.py
touch src/main.py
touch requirements.txt
touch Dockerfile
touch .dockerignore
touch docker-compose.yml
Activate the Virtual Environment
Create and Activate the Virtual Environment:

python3 -m venv env
source env/bin/activate
Install the Dependencies:

pip install -r requirements.txt
Write the Content in main.py
After this, execute the source file (main.py) by using the command:

python3 src/main.py
You should now be able to navigate to localhost:5000/health to check the health status.

Build and Run the Docker Image
Build the Docker Image:

docker build -t python-docker-app .
Run the Docker Image:

docker run -p 5000:5000 python-docker-app
Login to Docker
To login to Docker, enter the command docker login to get a one-time code and link to create an account.

Install Docker Compose
To install Docker Compose:


sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
Make Docker Compose Executable

sudo chmod +x /usr/local/bin/docker-compose
Build & Start Containers:

docker-compose up --build
Connect to Docker and Push Images
After connecting, use the appropriate commands to push the images.
Day 12 (25-02-2025)
Linux Commands
free -h
After executing this command, it returns the CPU usage in human-readable format (MB and GB).

free -l
Displays high and low memory status.

free -w
Adds buffer and cache separately.

free -g
Displays memory in gigabytes and rounds to the nearest number.

ps aux --sort -%mem | head
This command lists all processes and sorts them according to memory usage, displaying the top 10.

Network Commands
ifconfig
Displays and configures network interfaces.

ifconfig eth0
Displays specific information about eth0.

ip addr show
Displays interface status, all interfaces, MAC addresses, and broadcast addresses.

ip -4 addr show
Displays only IPV4 addresses.

ip -6 addr show
Displays only IPV6 addresses.

ip -br addr
Displays simplified network interface status with assigned IP.

Install Stress
Install Stress:

sudo apt install stress
Stress is a CPU, memory, and disk stress-testing tool to simulate high loads for system stability testing.

User and Group Management in Linux
Create User:

sudo adduser username
sudo su -u username
sudo mkdir trying
sudo chmod 777 trying
sudo usermod -a -G c406cohort trying
sudo groupadd c406cohort
sudo mkdir -p /home/grouptry/username/a
sudo chmod 400 /home/grouptry/username/a
sudo chmod 400 /home/grouptry
sudo chgrp c406cohort /home/grouptry
sudo chgrp c406cohort /home/grouptry/username/a
Create Text File:

vi alpha.txt
SSH Key Generation and Git Clone
Generate SSH Key:

ssh-keygen -t rsa -b 4096 -C "ABC@gmail.com"
cd .ssh/
ls -lrt
less id_rsa.pub
less id_rsa
SSH Key Generation with Ed25519:

ssh-keygen -t ed25519 -C "vaibhavvenkatm@gmail.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
Git Clone:

git clone git@github.com:username/repository_name
Jenkins Installation
Install Jenkins:

sudo apt update
sudo apt install fontconfig openjdk-17-jre -y
sudo apt install jenkins -y
Get Jenkins Initial Admin Password:

sudo cat /var/lib/jenkins/secrets/initialAdminPassword
Add Jenkins User to Docker Group:

sudo usermod -aG docker jenkins
sudo systemctl restart jenkins