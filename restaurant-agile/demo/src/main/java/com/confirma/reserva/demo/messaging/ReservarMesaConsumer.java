package com.confirma.reserva.demo.messaging;

import com.confirma.reserva.demo.ReservarMesaDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

@Component
public class ReservarMesaConsumer {

    @KafkaListener(topics = "reservarmesa", groupId = "minha-aplicacao")
    public void listen(ReservarMesaDTO message) {
        Logger logger = LoggerFactory.getLogger("Mensagem recebida do Kafka");

        logger.info(message.toString());
    }
}
