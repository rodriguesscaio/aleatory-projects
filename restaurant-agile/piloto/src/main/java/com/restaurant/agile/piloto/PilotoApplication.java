package com.restaurant.agile.piloto;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.kafka.annotation.EnableKafka;

@SpringBootApplication
public class PilotoApplication {
	public static void main(String[] args) {
		SpringApplication.run(PilotoApplication.class, args);
	}
}
