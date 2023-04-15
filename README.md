# Employee Management App

This is a CRUD (Create, Read, Update, Delete) employee manager demo built with Spring Boot and Angular. The frontend of the application is hosted on GitHub Pages [(link)](https://elyesberriri.github.io/employee-management-app), while the backend is hosted on Render [(link)](https://employee-management-app-bpqd.onrender.com/health). The application is also Dockerized, which means you can easily run it with `docker-compose up`.

## Table of Contents
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Running the Application](#running-the-application)

## Technologies Used

This application is built with the following technologies:

* Angular 15.2.4
* Node 18.13.0
* Spring Boot 3.0.5
* JWT 0.11.5
* PostgreSQL 14.3
* Docker 20.10.23
* Docker Compose 2.15.1

## Features

This application allows you to perform CRUD operations on a list of employees. Specifically, you can:

* View a list of employees
* Add a new employee
* Edit an existing employee
* Delete an employee

In addition to these features, the application also includes functionality for user authentication and authorization. Specifically, users can sign up for an account and sign in using JSON Web Tokens (JWT).

## Setup

Inorder to setup the application, you need to follow these steps:
1. Creat a PostgreSQL database. You can use any PostgreSQL server of your choice, such as a local installation or a cloud service.
2. Clone this repository to your local machine.
3. Make the following modifications to the file `application.properties` in the `resources` folder (path: /backend/src/main/resources) : 
   - Change yourPort to the port where your database is listening (default: 5432)
   - Change yourDB to your database name (default: postgres)
   - Change yourUsername to your postgres username (default: postgres)
   - Change yourPassword to your postgres password (default: postgres)
### Note:
- If you want to run the app without docker you should change the host (host.docker.internal) to your host (default: localhost).

## Running the Application

To run the application, make sure you have Docker installed and is already running on your machine. Then navigate to the project directory and run the following command: `docker-compose up`  
This will start the application and make it available at http://localhost:4200.