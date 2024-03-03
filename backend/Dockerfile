FROM amazoncorretto:21-alpine3.16-jdk

EXPOSE 8080

RUN mkdir /app

COPY ./target/poeselling-0.0.1-SNAPSHOT.jar /app/spring-boot-application.jar

ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=int", "/app/spring-boot-application.jar"]