package com.restaurant.agile.piloto.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

@RestController
public class MesasDisponiveisController {

    @Value("kafka.topic.producer.name")
    private String topicName;

    @Autowired
    private KafkaTemplate<String, ReservarMesaRequest> kafkaTemplate;

    @PostMapping("/reserva/mesas")
    public ResponseEntity<?> reservarMesa(@RequestBody ReservarMesaRequest request) {
        if (request.getId().isEmpty() || request.getNome().isEmpty()) {
            Map<String, String> messageError = Map.of("Error", "Informe os dados corretamente!");
            return ResponseEntity.badRequest().body(messageError);
        }

        sendToTopicKafka(request);

        Map<String, String> message = Map.of("success", "Mesa reservada para: " + request.getNome());
        URI uri = URI.create("/").resolve(request.getId());
        return ResponseEntity.created(uri).body(message);
    }


    private void sendToTopicKafka(ReservarMesaRequest dados) {
        try {
            kafkaTemplate.send("reservarmesa", dados);
        }catch (Exception e) {
            System.out.println("Deu ruim ao enviar para o Kafka");
        }
    }
}
