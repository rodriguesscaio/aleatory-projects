//package com.br.zupacademy.transacao.messaging.producer;
//
//import org.springframework.stereotype.Component;
//import org.springframework.web.util.UriBuilder;
//import software.amazon.awssdk.services.sqs.SqsClient;
//import software.amazon.awssdk.services.sqs.SqsClientBuilder;
//
//import java.net.URI;
//
//@Component
//public class SampleQueueProducer {
//    private final String QUEUE_NAME = "sample-queue";
//    private final URI ENDPOINT_QUEUE = new UriBuilder().path("http://localhost:4566/000000000000/sample-queue").build();
//
//    public String sendMessage() {
//        SqsClient sqsClient = new SqsClientBuilder().endpointOverride(ENDPOINT_QUEUE).build();
//
//        return "";
//    }
//}
