# Site Reliability Engineering (SRE) Monitoring Stack

A complete observability and auto-scaling solution for microservices running on Kubernetes, built with industry-standard tools: **Prometheus**, **Grafana**, **Loki**, and **HPA**.

![SRE Monitoring Banner](https://via.placeholder.com/800x200?text=SRE+Monitoring+Stack)

## 📦 Project Structure

```
SRE/
├── backend.yaml                 # Backend service manifest
├── frontend.yaml                # Frontend service manifest
├── docker-compose.yml           # Local stack: Prometheus, Grafana, Loki
├── hpa.yaml                     # Horizontal Pod Autoscaler config
├── prometheus.yaml              # Prometheus deployment in K8s
├── grafana.yaml                 # Grafana deployment in K8s
├── loki.yaml                    # Loki deployment in K8s
├── steps.md                     # General deployment guide
├── grafana/
│   └── provisioning/
│       ├── dashboards/dashboard.yml     # Auto-loaded dashboards
│       └── datasources/datasource.yml  # Prometheus & Loki datasources
├── K8/                          # Kubernetes-specific resources
│   ├── *.yaml
│   └── steps.md
├── loki/loki.md                 # Log query reference & Loki architecture
└── prometheus/prometheus.yml    # Scrape configuration for Prometheus
```

## 🚀 Getting Started

### 🔧 Prerequisites

- **Docker** - Local containerization
- **Docker Compose** - Compose stack for local observability tools
- **Kubernetes** - Cluster to deploy services in real environments
- **kubectl** - CLI to interact with your Kubernetes cluster

You should also have a basic understanding of:
- Microservices architecture
- Metrics, logs, and observability best practices

### 🧪 Local Development Setup (Docker Compose)

Spin up Prometheus, Grafana, and Loki locally:

```bash
docker-compose up -d
```

Access your tools:
- **Prometheus**: http://localhost:9090
- **Grafana**: http://localhost:3000 (Login: `admin` / `admin`)

Grafana will auto-load dashboards and connect to Prometheus & Loki data sources.

### ☁️ Kubernetes Deployment

Deploy each component in this order:

```bash
kubectl apply -f K8/backend.yaml
kubectl apply -f K8/frontend.yaml
kubectl apply -f K8/prometheus.yaml
kubectl apply -f K8/loki.yaml
kubectl apply -f K8/grafana.yaml
kubectl apply -f K8/hpa.yaml
```

To verify your deployment:
```bash
kubectl get pods
kubectl get svc
```

## 📊 Monitoring & Observability Stack

### Prometheus

![Prometheus](https://via.placeholder.com/700x150?text=Prometheus)

- Pulls metrics from microservices and Kubernetes nodes
- Configured using `prometheus.yml`
- Supports useful exporters:
  - **node-exporter** - Hardware and OS metrics
  - **kube-state-metrics** - Kubernetes object metrics
  - Custom service metrics via `/metrics` endpoint

### Grafana

![Grafana](https://via.placeholder.com/700x150?text=Grafana)

- Visualizes metrics and logs from Prometheus and Loki
- Pre-loaded dashboard configurations
- Datasources auto-provisioned for instant insights
- Supports alerting based on metrics thresholds

### Loki

![Loki](https://via.placeholder.com/700x150?text=Loki)

- Lightweight, high-performance logging system
- Aggregates logs using labels (pod, job, namespace)
- Pairs seamlessly with Grafana's Explore feature
- Query logs with LogQL (see `loki.md` for examples)

### HPA (Horizontal Pod Autoscaler)

- Enables services to scale dynamically based on:
  - CPU usage
  - Memory consumption
  - Custom metrics (via Prometheus adapter)
- Prevents over-provisioning while ensuring high availability

## 📥 Download Options

### Option 1: Download ZIP

1. Click the green **"Code"** button (top right on GitHub)
2. Select **"Download ZIP"**
3. Extract the ZIP on your local machine

### Option 2: Clone the Repository

```bash
git clone https://github.com/yourusername/SRE.git
cd SRE
```

## 🛠 Toolchain Overview

| Tool         | Purpose                               |
|--------------|---------------------------------------|
| **Docker**   | Local container runtime               |
| **Kubernetes** | Cluster orchestration                |
| **Prometheus** | Metrics collection + alerting engine |
| **Grafana**  | Dashboard and visualization frontend  |
| **Loki**     | Centralized logging backend           |
| **HPA**      | Auto-scaling workloads in Kubernetes  |

