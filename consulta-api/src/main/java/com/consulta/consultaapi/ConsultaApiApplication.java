package com.consulta.consultaapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class ConsultaApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConsultaApiApplication.class, args);
	}

}
