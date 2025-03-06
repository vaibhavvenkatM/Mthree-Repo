# Kubernetes Deployment Notes

## Concepts Learned

During this Kubernetes project, we covered:

### ** Kubernetes Core Concepts**
- **Pods**: Smallest deployable unit in Kubernetes, running our Flask app.
- **Deployments**: Manages rolling updates and ensures multiple replicas are running.
- **Services**: Exposes our application via **NodePort** and **Port Forwarding**.
- **ConfigMaps & Secrets**: Stores environment variables and sensitive credentials.
- **Persistent Volumes & Claims**: Mounts directories for data persistence.
- **Horizontal Pod Autoscaler (HPA)**: Scales pods based on CPU/memory usage.
- **Namespaces**: Isolates resources (created `k8s-demo` namespace).
- **Kubernetes Dashboard**: Web-based UI for managing the cluster.
- **Validation Disabled Deployment**: Used `--validate=false` flag to bypass API issues.
- **Minikube Reset & Connectivity Fixes**: Used `minikube-reset-script.sh` to resolve WSL2-related networking issues.

---

##  Execution Breakdown

### **Step 1️: Running the Minikube Reset Script**
```bash
chmod +x minikube-reset-script.sh
./minikube-reset-script.sh
```
**Actions Performed:**
- Stopped & deleted any existing Minikube clusters.
- Fixed WSL2 networking issues.
- Restarted Minikube with optimized settings.
- Verified connectivity to Kubernetes API.



---

### **Step 2️: Running the Deployment Script**
```bash
chmod +x deploy-no-validate.sh
./deploy-no-validate.sh
```
**Actions Performed:**
- Checked for dependencies (`kubectl`, `docker`, `minikube`).
- Verified Minikube status.
- Configured Docker to use Minikube’s Docker daemon.


---

### **Step 3️: Building the Docker Image with Retries**
```bash
cd ~/k8s-master-app/app
docker build --network=host -t k8s-master-app:latest .
```




---

### **Step 4: Checking Deployment Status**
```bash
kubectl -n k8s-demo get deployments --timeout=10s
kubectl -n k8s-demo get pods --timeout=10s
```
 **Actions Performed:**
- Displayed deployment and pod status.

**Deployment Status:**

![Linux Commands](../images/Screenshot%20from%202025-03-06%2000-27-36.png)

---

### **Step 5: Setting Up Port Forwarding (With Collision Handling)**
```bash
kubectl -n k8s-demo port-forward svc/k8s-master-app 8080:80 &
```
 **Actions Performed:**
- Checked if port `8080` was in use and auto-switched if necessary.
- Started port forwarding in the background.



---

### **Step 6: Accessing the Application**
#### ** Option 1: Port Forwarding (Localhost)**
```bash
kubectl -n k8s-demo port-forward svc/k8s-master-app 8080:80
```
Opened: `http://localhost:8080`

![Linux Commands](../images/Screenshot%20from%202025-03-06%2000-14-21.png)


#### ** Option 2: NodePort (Minikube IP)**
```bash
minikube ip  # Get the Minikube IP
```
Accessed at: `http://<MINIKUBE-IP>:30080`

---

### **Step 7: Opening the Kubernetes Dashboard**
```bash
minikube dashboard
```
**Dashboard:**

![Linux Commands](../images/Screenshot%20from%202025-03-06%2000-15-08.png)

---

### **Step 8: Cleaning Up Deployment**
```bash
./scripts/cleanup.sh
```
**Actions Performed:**
- Deleted all Kubernetes resources.
- Stopped Minikube if no longer needed.

---

