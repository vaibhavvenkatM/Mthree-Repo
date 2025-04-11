## Setup commands to run the application locally
<!-- Check nvm -->
nvm -v

<!-- if it shows error then do next step else skip it -->

<!-- install nvm -->
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
\. "$HOME/.nvm/nvm.sh"

<!-- node installation -->
nvm install 22

<!-- set 22 as default -->
nvm alias default 22.14.0

<!-- npm install -->
cd Frontend/
npm install

<!-- npm install -->
cd Backend/
npm install



<!-- to run  -->
npm run dev
<!-- within both frontend and backend -->

## To run from the Docker end:
- Run the jenkins file which will run the docker-compose automatically.
- Access application at **http:/localhost:5174**

## To run from Kubernetes end:
### Run the following commands: 
- minikube start
- docker use context default
- kubectl apply -f prometheus.yaml kubectl apply -f loki.yaml kubectl apply -f grafana.yaml kubectl apply -f hpa.yaml kubectl apply -f backend.yaml kubectl apply -f frontend.yaml
- minikube image load prom/prometheus minikube image load grafana/loki minikube image load grafana/grafana minikube image load backend:latest minikube image load frontend:latest
- kubectl port-forward svc/prometheus 9090:9090
- kubectl port-forward svc/loki 3100:3100 k
- ubectl port-forward svc/grafana 3000:3000
- kubectl port-forward svc/quiz-backend 5000:5000
- kubectl port-forward svc/quiz-frontend 5174:5174
- minikube dashboard