# K8s Master App v1.0.0

## Overview
The **K8s Master App v1.0.0** is a comprehensive Kubernetes demonstration application that provides insights into pod information, system resource usage, environment variables, and mounted volumes. This application helps in understanding how Kubernetes manages applications and services.

## **Application Output**
Upon running the application, the following details were displayed:

### **Pod Information**
- **Instance ID:** 83b91e47
- **Hostname:** 7399d7859778
- **Environment:** production
- **Request count:** 3
- **Platform:** Linux-5.15.167.4-microsoft-standard-WSL2-x86_64-with-glibc2.36
- **Uptime:** 66.2 seconds

### **Resource Usage**
- **CPU Usage:** 0.3%
- **Memory Usage:** 31.2%
- **Disk Usage:** 2.0%
- **Requests:** 3

### **Mounted Volumes**
| Volume        | Path     | Status                |
|--------------|---------|----------------------|
| Data Volume  | /data   | Mounted but empty    |
| Config Volume | /config | Mounted but empty    |
| Logs Volume  | /logs   | Successfully mounted |

### **Files**
- `app.log`
- **Actions:** View, Create a File

### **API Info**
- **Health Check**
- **Metrics**
- **Environment Variables**

### **Environment Variables**
| Variable Name  | Value |
|---------------|------------------|
| APP_NAME      | K8s Master App   |
| APP_VERSION   | 1.0.0            |
| ENVIRONMENT   | production       |
| DATA_PATH     | /data            |
| CONFIG_PATH   | /config          |
| LOG_PATH      | /logs            |
| SECRET_KEY    | default-dev-key  |

## **Script Explanation**
The script for the application (`app.py`) runs a Kubernetes demonstration app that displays the pod’s system information, mounted volumes, and API-related details.

### **Key Functionalities:**
1. **Pod Information Retrieval:** Fetches instance ID, hostname, and uptime.
2. **Resource Monitoring:** Tracks CPU, memory, and disk usage.
3. **Volume Management:** Identifies mounted volumes and their status.
4. **API and Log Management:** Provides access to logs, API health checks, and other environment variables.
5. **Environment Variables Handling:** Displays critical configurations set during deployment.

## **Application Screenshots**
### **Application Output Images:**
![Basic Calculator](https://github.com/vaibhavvenkatM/documentation/blob/main/Images/43.png)
![Basic Calculator](https://github.com/vaibhavvenkatM/documentation/blob/main/Images/44.png)
![Basic Calculator](https://github.com/vaibhavvenkatM/documentation/blob/main/Images/45.png)
![Basic Calculator](https://github.com/vaibhavvenkatM/documentation/blob/main/Images/46.png)

## **Conclusion**
The **K8s Master App v1.0.0** is a useful tool for monitoring and managing Kubernetes pods. It provides insights into pod status, resource consumption, environment variables, and volume status, making it a valuable reference for Kubernetes administrators and developers.

