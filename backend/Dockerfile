FROM maven:3.9-amazoncorretto-21-al2023 as build
ENV HOME=/usr/app
RUN mkdir -p $HOME
WORKDIR $HOME
ADD . $HOME
RUN --mount=type=cache,target=/root/.m2 mvn -f $HOME/pom.xml clean package -DskipTests

FROM amazoncorretto:21-alpine3.16-jdk

EXPOSE 8080

RUN mkdir /app

COPY --from=build /usr/app/target/poeselling-0.0.1-SNAPSHOT.jar /app/spring-boot-application.jar

ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=int", "/app/spring-boot-application.jar"]