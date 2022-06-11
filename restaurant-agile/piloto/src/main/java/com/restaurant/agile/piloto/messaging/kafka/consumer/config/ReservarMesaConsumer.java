//package com.restaurant.agile.piloto.messaging.kafka.consumer.config;
//
//import com.restaurant.agile.piloto.controllers.ReservarMesaRequest;
//import org.springframework.kafka.annotation.KafkaListener;
//import org.springframework.stereotype.Component;
//
//@Component
//public class ReservarMesaConsumer {
//
//    @KafkaListener(topics = "reservarmesa", idIsGroup = false)
//    public void listen(String message) {
//        System.out.println("Mensagem chegou: " + message);
//    }
//}
