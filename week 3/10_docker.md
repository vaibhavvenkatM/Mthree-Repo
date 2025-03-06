# README - Docker Basics

## Overview
This document provides an introduction to Docker, containerization, key Docker components, common commands, and Docker Compose.

---

## What is Containerization?
Containerization is a technology that allows packaging an application with its dependencies into a single unit called a **container**. This ensures that the application runs consistently across different environments.

---

## Introduction to Docker
Docker is an open-source platform that simplifies application deployment using containers. It provides an isolated and consistent environment for running applications.

### Key Docker Components
- **Docker Engine** – Core component that runs and manages containers.
- **Docker Images** – Read-only templates defining the container’s contents.
- **Docker Containers** – Running instances of Docker images.
- **Dockerfile** – Script defining the steps to build a Docker image.
- **Docker Hub** – Cloud-based registry for storing and sharing images.
- **Docker Compose** – Tool for managing multi-container applications.
- **Docker CLI** – Command-line interface for managing Docker operations.

---

## Basic Docker Workflow
1. Write a **Dockerfile** defining the environment.
2. Build an image using `docker build`.
3. Run a container using `docker run`.
4. Manage containers, images, volumes, and networks.
5. Push and pull images from Docker Hub.

---

## Common Docker Commands
- **Check Docker version**
  ```bash
  docker --version
  ```
- **List available images**
  ```bash
  docker images
  ```
- **Build an image from a Dockerfile**
  ```bash
  docker build -t <image-name> .
  ```
- **Pull an image from Docker Hub**
  ```bash
  docker pull <image-name>
  ```
- **Run a container in detached mode with port mapping**
  ```bash
  docker run -d -p 8080:80 <image-name>
  ```
- **List running containers**
  ```bash
  docker ps
  ```
- **Stop a running container**
  ```bash
  docker stop <container-id>
  ```
- **Start a stopped container**
  ```bash
  docker start <container-id>
  ```
- **Push an image to Docker Hub**
  ```bash
  docker push <username>/<image-name>
  ```
- **Remove unused containers, images, networks, and volumes**
  ```bash
  docker system prune
  ```

---

## Authentication with Docker Hub
To authenticate your Docker CLI session with Docker Hub, use:
```bash
docker login
```
You'll need an access token for secure authentication.

---

## Docker Compose
Docker Compose simplifies multi-container application management using a YAML configuration file.

### Example `docker-compose.yml`:
```yaml
version: '3'
services:
  web:
    image: nginx
    ports:
      - "8080:80"
```
To start the services in detached mode, run:
```bash
docker-compose up -d
```

---

## Docker Image Tags
Docker tags help differentiate between different versions of an image. Tags are assigned when building or pulling images, e.g., `nginx:latest`.

---

## Notes
- Docker ensures consistency across different computing environments.
- Use `docker ps -a` to list all containers, including stopped ones.
- Clean up unused resources periodically using `docker system prune`.
- Docker Compose makes it easy to manage multi-container applications.

---

End of Document.