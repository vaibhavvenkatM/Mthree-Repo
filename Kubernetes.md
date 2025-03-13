# Day 12 - 27-02-2025

# Kubernetes Notes

## Introduction to Kubernetes
Kubernetes (K8s) is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. It was originally developed by Google and is now maintained by the Cloud Native Computing Foundation (CNCF).

## Key Features
- **Container Orchestration**: Automates deployment and scaling of containerized applications
- **Self-healing**: Automatically replaces and reschedules containers
- **Horizontal Scaling**: Can scale applications up/down based on demand
- **Load Balancing**: Distributes network traffic to maintain application stability
- **Automated Rollouts/Rollbacks**: Supports zero-downtime deployments
- **Secret Management**: Securely stores sensitive information
- **Storage Orchestration**: Automatically mounts storage systems

## Core Components

### Control Plane Components
1. **kube-apiserver**: Frontend for Kubernetes control plane
2. **etcd**: Consistent and highly-available key-value store
3. **kube-scheduler**: Watches for newly created pods and assigns to nodes
4. **kube-controller-manager**: Runs controller processes
5. **cloud-controller-manager**: Integrates with cloud provider APIs

### Node Components
1. **kubelet**: Ensures containers are running in a Pod
2. **kube-proxy**: Maintains network rules on nodes
3. **Container Runtime**: Software responsible for running containers (e.g., Docker)

## Basic Objects
- **Pods**: Smallest deployable units
- **Services**: Abstract way to expose applications
- **Volumes**: Storage abstraction
- **Namespaces**: Virtual clusters within a physical cluster

## Installation Steps

### Prerequisites
1. **Update System Packages**
1. **Update System Packages**
   ```bash
   sudo apt-get update
   sudo apt-get upgrade -y
   ```

2. **Install Required Dependencies**
   ```bash
   sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common gnupg2 conntrack
   ```

3. **Remove Old Docker Versions (if any)**
   ```bash
   sudo apt-get remove -y docker docker-engine docker.io containerd runc
   ```

4. **Add Docker Repository**
   ```bash
   # Add Docker's GPG key
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

   # Add Docker repository
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
   ```

5. **Install Docker**
   ```bash
   sudo apt-get update
   sudo apt-get install -y docker-ce docker-ce-cli containerd.io
   ```

6. **Configure Docker**
   ```bash
   # Add current user to docker group
   sudo usermod -aG docker $USER
   
   # Start and enable Docker service
   sudo systemctl start docker
   sudo systemctl enable docker
   ```

7. **Install Kubernetes Components**
   ```bash
   # Add Kubernetes GPG key
   curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -

   # Add Kubernetes repository
   echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list

   # Update package list
   sudo apt-get update

   # Install Kubernetes components
   sudo apt-get install -y kubelet kubeadm kubectl

   # Hold packages at current version
   sudo apt-mark hold kubelet kubeadm kubectl
   ```

8. **Disable Swap**
   ```bash
   # Disable swap
   sudo swapoff -a
   
   # Comment out swap entry in /etc/fstab
   sudo sed -i '/ swap / s/^\(.*\)$/#\1/g' /etc/fstab
   ```

9. **Configure System Settings**
   ```bash
   # Load required modules
   cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf
   overlay
   br_netfilter
   EOF

   sudo modprobe overlay
   sudo modprobe br_netfilter

   # Configure sysctl parameters
   cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
   net.bridge.bridge-nf-call-iptables  = 1
   net.bridge.bridge-nf-call-ip6tables = 1
   net.ipv4.ip_forward                 = 1
   EOF

   sudo sysctl --system
   ```

10. **Initialize Kubernetes Cluster (Master Node Only)**
    ```bash
    sudo kubeadm init --pod-network-cidr=192.168.0.0/16

    # Configure kubectl for current user
    mkdir -p $HOME/.kube
    sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
    sudo chown $(id -u):$(id -g) $HOME/.kube/config
    ```

11. **Install Network Plugin (Calico)**
    ```bash
    kubectl apply -f https://docs.projectcalico.org/manifests/calico.yaml
    ```

12. **Verify Installation**
    ```bash
    # Check node status
    kubectl get nodes
    
    # Check system pods
    kubectl get pods -n kube-system
    ```

13. **Deploy Sample Application**
    ```bash
    # Create a sample deployment
    kubectl create deployment nginx --image=nginx
    
    # Expose the deployment
    kubectl expose deployment nginx --port=80 --type=LoadBalancer
    
    # Check deployment status
    kubectl get deployments
    kubectl get pods
    kubectl get services
    ```

14. **Working with Kubernetes Dashboard**
    ```bash
    # Deploy the dashboard
    kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml
    
    # Create service account and get token
    kubectl create serviceaccount dashboard-admin
    kubectl create clusterrolebinding dashboard-admin --clusterrole=cluster-admin --serviceaccount=default:dashboard-admin
    kubectl get secret $(kubectl get serviceaccount dashboard-admin -o jsonpath="{.secrets[0].name}") -o jsonpath="{.data.token}" | base64 --decode
    
    # Start the proxy
    kubectl proxy
    ```

15. **Common Kubernetes Commands**
    ```bash
    # View cluster information
    kubectl cluster-info
    
    # Get detailed information about resources
    kubectl describe nodes
    kubectl describe pods
    
    # View logs of a pod
    kubectl logs <pod-name>
    
    # Execute commands in a container
    kubectl exec -it <pod-name> -- /bin/bash
    
    # Scale deployments
    kubectl scale deployment <deployment-name> --replicas=3
    ```

16. **Clean Up Resources**
    ```bash
    # Delete deployments
    kubectl delete deployment <deployment-name>
    
    # Delete services
    kubectl delete service <service-name>
    
    # Stop Minikube cluster
    minikube stop
    
    # Delete Minikube cluster
    minikube delete
    ```

