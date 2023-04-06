# Employee Management App
 
 This is a CRUD (Create, Read, Update, Delete) employee manager demo built with Spring Boot and Angular. The frontend of the application is hosted on GitHub Pages ( https://elyesberriri.github.io/employee-management-app ), while the backend is hosted on Render ( https://employee-management-app-bpqd.onrender.com/health ). The application is also Dockerized, which means you can easily run it with `docker-compose up`. 

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

* View a list of all employees
* Add a new employee
* Edit an existing employee
* Delete an employee

In addition to these features, the application also includes functionality for user authentication and authorization. Specifically, users can sign up for an account and sign in using JSON Web Tokens (JWT).

## Setup

Before running the application, you need to creat a PostgreSQL database. You can use any PostgreSQL server of your choice, such as a local installation or a cloud service.
Then create a file named `application.properties` in the folder `resources` ( path: /backend/src/main/resources ) and write inside it these lines :

`spring.datasource.url=jdbc:postgresql://localhost:your_db_port__default_5432/your_db_name  `
`spring.datasource.username=your_db_username_default__postgres  `
`spring.datasource.password=your_db_password  `
`spring.jpa.hibernate.ddl-auto=update  `
`spring.jpa.defer-datasource-initialization=true  `
`spring.sql.init.mode=always  `
`backend.app.jwtSecret=IUzI1NiJ9eyJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY4MDU5NDI1MiwiaWF0IjoxNjgwNTk0M  `
`backend.app.jwtExpirationMs=300000`

Note : Don't forget to replace your database credentials instead of mine in the previous lines.

## Running the Application

To run the application, make sure you have Docker installed on your machine. Then, clone this repository to your local machine and navigate to the project directory. Finally, run the following command : `docker-compose up`  
This will start the application and make it available at http://localhost:4200.