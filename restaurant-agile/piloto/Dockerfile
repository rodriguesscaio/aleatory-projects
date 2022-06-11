FROM openjdk:16-alpine3.13 as contrucao
WORKDIR /app

COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN ./mvnw dependency:go-offline

COPY src ./src

FROM alpine
WORKDIR /app
COPY --from=contrucao /app .

CMD ["./mvnw", "spring-boot:run"]