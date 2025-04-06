# Quiz Application Kubernetes Monitoring Setup

This repository contains the necessary Kubernetes configuration files to deploy a quiz application with comprehensive monitoring using Prometheus, Grafana, and Loki.

## Architecture Overview

The setup consists of the following components:

- **Quiz Backend**: A containerized API service
- **Prometheus**: Metrics collection and storage
- **Grafana**: Visualization dashboard for metrics
- **Loki**: Log aggregation system
- **Horizontal Pod Autoscaler**: For automatic scaling based on load

## Prerequisites

- Docker
- Minikube
- kubectl

## Directory Structure

```
.
├── backend.yaml        # Quiz backend deployment and service
├── grafana.yaml        # Grafana deployment, service, and datasource configuration
├── hpa.yaml            # Horizontal Pod Autoscaler for quiz backend
├── loki.yaml           # Loki deployment and service
├── prometheus.yaml     # Prometheus deployment, service, and config
└── steps.md            # Setup instructions
```

## Setup Instructions

### 1. Build the Backend Image

Navigate to the backend directory and build the Docker image:

```bash
cd <path-to-backend>
docker build -t backend .
```

### 2. Pull Required Docker Images

```bash
docker pull prom/prometheus
docker pull grafana/grafana
docker pull grafana/loki
```

### 3. Start Minikube

```bash
minikube start
```

### 4. Load Images into Minikube

If you encounter issues with image pulling:

```bash
minikube image load prom/prometheus
minikube image load grafana/loki
minikube image load grafana/grafana
minikube image load backend:latest
```

### 5. Deploy the Applications

Apply all Kubernetes configurations:

```bash
kubectl apply -f prometheus.yaml
kubectl apply -f loki.yaml
kubectl apply -f grafana.yaml
kubectl apply -f hpa.yaml
kubectl apply -f backend.yaml
```

Alternatively, you can apply all configurations at once:

```bash
kubectl apply -f .
```

### 6. Access the Applications

Set up port forwarding to access the applications:

```bash
kubectl port-forward svc/grafana 3000:3000
```

You can also set up port forwarding for other services if needed:

```bash
kubectl port-forward svc/prometheus 9090:9090
kubectl port-forward svc/loki 3100:3100
kubectl port-forward svc/quiz-backend 5000:5000
```

### 7. Monitor Deployment Status

Open the Minikube dashboard to view the deployment status:

```bash
minikube dashboard
```

## Component Details

### Quiz Backend

The backend service is deployed with resource limits:
- 100m CPU request
- 200m CPU limit
- Exposed on port 5000

### Horizontal Pod Autoscaler (HPA)

The backend is configured with autoscaling capabilities:
- Minimum replicas: 1
- Maximum replicas: 5
- Target CPU utilization: 100%

### Prometheus

Prometheus collects metrics from the quiz backend:
- Scrapes metrics every 5 seconds
- Accessible at NodePort 30090
- Configured to monitor the quiz backend

### Loki

Loki aggregates logs from all services:
- Accessible at NodePort 30100

### Grafana

Grafana provides visualization for metrics and logs:
- Preconfigured with Prometheus, Loki, and PostgreSQL datasources
- Accessible at NodePort 30300
- Default credentials:
  - Username: admin
  - Password: admin

## PostgreSQL Configuration

The Grafana deployment includes a connection to a PostgreSQL database:
- Host: aws-0-ap-south-1.pooler.supabase.com:6543
- Database: postgres
- SSL mode is disabled

## Coming Soon

Frontend deployment configurations will be added in future updates.

## Notes

- This setup is designed for development and testing purposes.
- For production deployments, consider:
  - Using Secrets instead of ConfigMaps for sensitive information
  - Setting up persistent storage for Prometheus and Grafana
  - Implementing proper security measures
  - Adjusting resource limits based on actual usage patterns