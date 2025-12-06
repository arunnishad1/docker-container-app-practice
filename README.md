# Simple Web Application Deployment on AWS EC2 with Docker

This project contains a **simple web application (home page only)** that has been **containerized using Docker** and deployed on an **AWS EC2 instance**, making it accessible to users over the internet.

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Prerequisites](#prerequisites)  
- [Setup and Deployment](#setup-and-deployment)  
- [Accessing the Application](#accessing-the-application)  
- [Docker Commands Used](#docker-commands-used)  
- [License](#license)  

---

## Project Overview

This is a basic web application built using [mention framework/language, e.g., Node.js, Python Flask, HTML/CSS/JS].  
The application has been **containerized with Docker** to ensure portability and easy deployment.  
It is hosted on an **AWS EC2 instance**, allowing users from the internet to access it.

---

## Features

- Simple and lightweight web application.  
- Containerized using Docker for easy deployment.  
- Deployed on AWS EC2 and publicly accessible.  
- Easy to extend or modify.  

---

## Prerequisites

Before running this project, ensure you have the following:

- Docker installed on your local machine or server.  
- AWS account with an EC2 instance running (Ubuntu recommended).  
- Security group configured to allow inbound traffic on the application port (e.g.8080 or port on which you are running your application). ** very very imp  **
- To add traffice rule: <br> go to security tab of you EC2 machine ===> click security group (alpha numeric number)  ===> click on inbound rule ===> edit inbound rule ===> add your desired port ===> save 

---

## Setup and Deployment

1. **Clone the repository**
   ```bash
   git clone <repository_url>
   cd <project_folder>
=========================================

# build docker images
docker build -t tag_name . <br>
docker build -t mywebapp .
Recommended method ====> to give tagname use ==== docker hub username/repository name:tag name(name of the image)
<br> docker build -t test123/demo:mywebapp .

=========================================

# To pull docker images from docker hub
docker pull image_name:tag <br>
docker pull test123/demo:mywebapp

=========================================

# To run Docker container
docker run -d -p 80:80 test123/demo:mywebapp
-d → run in detached mode
-p 80:80 → map port 80 of the container to port 80 on EC2

=========================================

# verify docker container is running
docker ps
you will get container ID

=========================================

# Accessing the webapp over the internet(on browser)
Enter http://<ec2-public-ip>:port number in url
Example: http://128.31.3.4:8080

=======================================

# stop docker container
docker stop container_ID

