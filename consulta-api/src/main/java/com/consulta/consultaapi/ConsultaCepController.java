package com.consulta.consultaapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConsultaCepController {
	
	@Autowired
	private ConsultaCepClient consultaCepClient;
	
	@GetMapping("/consulta/cep/{numero}")
	public ResponseEntity<?> consulta(@PathVariable String numero) {
		CepResponse cepResponse = consultaCepClient.buscar(numero);
		
		return ResponseEntity.ok(cepResponse);
	}
}
