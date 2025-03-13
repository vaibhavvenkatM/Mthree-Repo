# Day 11 (24-02-2025)

## Docker

Docker is a powerful tool for developing and deploying applications efficiently. It is lightweight and reduces dependencies. Containers run faster than virtual machines and do not require a full operating system.

### Docker Image
A **Docker Image** contains everything a container needs to run, including code, dependencies, libraries, and configurations. It acts as a blueprint for containers. Images are stored in Docker Hub or private repositories and can be created using a **Dockerfile**.

### Docker Container
A **Docker Container** is a running instance of a Docker image. It provides an isolated environment with everything needed to run an application. Containers can be created, stopped, modified, and deleted dynamically.

### Main Parts of Docker
1. **Docker CLI** - Used to interact with Docker via terminal commands.
2. **Docker Daemon** - A background service that manages containers.
3. **Docker Registry** - A storage system for Docker images, like Docker Hub.

---

## Docker Installation

### **1. Update Package List**
```sh
sudo apt update
```

### **2. Install Prerequisites**
```sh
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

### **3. Add Docker’s Official GPG Key**
```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

### **4. Add Docker Repository**
```sh
sudo add-apt-repository "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

### **5. Install Docker**
```sh
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io
```

### **6. Add User to Docker Group**
```sh
sudo usermod -aG docker $USER
```

### **7. Verify Docker Installation**
```sh
docker --version
```

---

## Setting Up a Python Docker Project

### **1. Create Project Directory**
```sh
mkdir python-dock-project
cd python-dock-project/
mkdir src tests
```

### **2. Create Necessary Files**
```sh
touch src/__init__.py
 touch src/main.py
 touch requirements.txt
 touch Dockerfile
 touch .dockerignore
 touch docker-compose.yml
```

### **3. Configure `requirements.txt`**
```txt
flask
requests
```

### **4. Create `Dockerfile`**
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY src/ ./src
CMD ["python", "src/main.py"]
```

### **5. Configure `.dockerignore`**
```txt
__pycache__
*.pyc
*.pyo
.git
*.db
```

### **6. Create `docker-compose.yml`**
```yaml
version: '3'
services:
  python-app:
    build: .
    volumes:
      - ./src:/app/src
    ports:
      - "5000:5000"
```

### **7. Activate Virtual Environment**
```sh
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
```

### **8. Build and Run the Docker Image**
```sh
docker build -t python-docker-app .
docker run -p 5000:5000 python-docker-app
```

---

# Day 12 (25-02-2025) - Linux & Jenkins

## Linux Commands

### **Memory Usage**
```sh
free -h  # Display CPU and memory usage in human-readable format
free -l  # Show high and low memory status
free -w  # Add buffer and cache separately
free -g  # Display memory in gigabytes
```

### **Process Management**
```sh
ps aux --sort -%mem | head  # List top 10 processes by memory usage
```

### **Network Commands**
```sh
ifconfig  # Display and configure network interfaces
ifconfig eth0  # Show details of eth0 interface
ip addr show  # Show all interfaces and addresses
ip -4 addr show  # Show only IPv4 addresses
ip -6 addr show  # Show only IPv6 addresses
ip -br addr  # Show simplified network interface details
```

### **Install Stress Tool**
```sh
sudo apt install stress  # CPU, memory, and disk stress-testing tool
```

### **User and Group Management**
```sh
sudo adduser username  # Create a new user
sudo usermod -aG c406cohort username  # Add user to a group
sudo groupadd c406cohort  # Create a new group
sudo mkdir -p /home/grouptry/username/a  # Create a directory structure
sudo chmod 400 /home/grouptry/username/a  # Set read-only permissions
```

### **SSH Key Generation & Git Clone**
```sh
ssh-keygen -t rsa -b 4096 -C "ABC@gmail.com"
cd .ssh/
less id_rsa.pub  # View public key
```

### **Clone a Git Repository**
```sh
git clone git@github.com:username/repository_name
```

---

## Jenkins Installation

### **1. Install Java & Jenkins**
```sh
sudo apt update
sudo apt install fontconfig openjdk-17-jre -y
sudo apt install jenkins -y
```

### **2. Get Jenkins Initial Admin Password**
```sh
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

### **3. Add Jenkins User to Docker Group**
```sh
sudo usermod -aG docker jenkins
sudo systemctl restart jenkins
```

This document provides an overview of **Docker, Linux commands, SSH key generation, Git, and Jenkins setup**. 🚀

