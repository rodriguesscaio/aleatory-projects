package com.confirma.reserva.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class ConfirmaReservaApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConfirmaReservaApplication.class, args);
	}

}
