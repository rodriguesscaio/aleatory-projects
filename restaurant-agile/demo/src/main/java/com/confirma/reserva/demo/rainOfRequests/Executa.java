package com.confirma.reserva.demo.rainOfRequests;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Executa {

    @Autowired
    private ReservarMesaClient reservarMesaClient;

    private final Integer TOTAL_REQUISICOES = 10000;

    @GetMapping("/bombardear")
    public ResponseEntity<?> bombardear() {
        Logger logger = LoggerFactory.getLogger("ReservarMesa");

        int numero = 0;

        while (numero < TOTAL_REQUISICOES) {
            Long numeroMesa = Math.round(Math.random() * 50);

            DadosRequest dadosRequest = new DadosRequest("Caio", "457874584551", numeroMesa);

            try {
                DadosResponse dadosResponse = reservarMesaClient.reservar(dadosRequest);

                logger.info("Busquei os dados: " + dadosResponse.getSuccess());
            } catch (Exception e) {
                logger.error("Sistema de reserva de mesa fora do ar!");
            }

            numero++;
        }

        return ResponseEntity.ok().build();
    }

}
