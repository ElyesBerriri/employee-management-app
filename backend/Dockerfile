FROM maven:3.8.4-openjdk-17-slim AS build
COPY . .
#COPY application.properties ./src/main/resources/application.properties
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
COPY --from=build /target/employeemanagementapp.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
