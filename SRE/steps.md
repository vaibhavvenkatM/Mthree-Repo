<!-- OPen backend Folder -->
cd <path-to-backend>

<!-- build backend Image -->
docker build -t backend .

<!-- open SRE Folder -->
cd <path-to-sre-folder>

<!-- docker pull images -->
docker pull prom/prometheus
docker pull grafana/grafana
docker pull grafana/loki

<!-- start minikube -->
minikube start

<!-- loading images on minikube if issue occurs -->
minikube image load prom/prometheus
minikube image load grafana/loki
minikube image load grafana/grafana
minikube image load backend:latest

<!-- apply deployment files -->
    kubectl apply -f prometheus.yaml
    kubectl apply -f loki.yaml
    kubectl apply -f grafana.yaml
    kubectl apply -f hpa.yaml
    kubectl apply -f backend.yaml
<!-- OR -->
<!-- kubectl apply -f . -->

<!-- port forward kubernetes -->
<!-- kubectl port-forward svc/prometheus 9090:9090 -->
<!-- kubectl port-forward svc/loki 3100:3100 -->
<!-- kubectl port-forward svc/quiz-backend 5000:5000 -->
kubectl port-forward svc/grafana 3000:3000

<!-- check pod status on minikube dashboard -->
minikube dashboard


<!-- Soon Froend image docker file and yaml files will be added
so when creating readme for SRE
include the steps for Frontend(same to backend) too -->