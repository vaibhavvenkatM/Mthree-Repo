# Day 12 - 27-02-2025

After the Jenkins installation and working, we were introduced to Kubernetes.

### What is Kubernetes?
Kubernetes (K8s) is an open-source system that helps manage, scale, and deploy containerized applications.

### Kubernetes Installation Steps:

1. **Update the package list**
   sudo apt-get update


Install necessary packages:


sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common gnupg2 conntrack
apt-transport-https: Allows downloading software securely.
ca-certificates: Ensures that only secure certificates are downloaded.
curl: Tool to download files from the internet using the command line.
software-properties-common: Manages additional software sources.
gnupg2: Security tool for verifying software.
conntrack: Monitors networking connections, essential for Kubernetes and Docker.
Remove any existing Docker installations:


sudo apt-get remove -y docker docker-engine docker.io containerd runc | true
Add Docker's official GPG key:


curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
Add Docker's official repository to the system:


sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
Update package list again:


sudo apt-get update
Install Docker:


sudo apt-get install -y docker-ce docker-ce-cli containerd.io
Add user to the Docker group:


sudo usermod -aG docker $USER
Test Docker installation:


echo "Testing Docker installation..."
sudo docker run hello-world
Install kubectl (Kubernetes CLI):


curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
rm kubectl
kubectl version --client
Install Minikube (local Kubernetes cluster):

curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
rm minikube-linux-amd64
Install Helm (Kubernetes package manager):

curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
Configure Docker to start on WSL startup:


echo "[6/8] Configuring Docker to start on WSL startup..."
echo '# Start Docker daemon automatically when WSL starts
if [ -z "$(ps -ef | grep dockerd | grep -v grep)" ]; then sudo service docker start fi' >> ~/.bashrc
Create Kubernetes config directory:


mkdir -p ~/.kube
Add Kubernetes alias shortcuts:


alias k="kubectl"
alias kgp="kubectl get pods"
alias kgs="kubectl get services"
alias kgd="kubectl get deployments"
alias kgn="kubectl get nodes"
alias kga="kubectl get all" >> ~/.bashrc
Check versions of installed tools:

minikube version
helm version
kubectl version
docker --version
Executing .sh Files with Kubernetes:
The .sh file contains the script with requirements, Python files, Dockerfile, YAML files, deploy files, and Kubernetes files.

To execute the script:

./simplified-k8s-demo.sh