package com.confirma.reserva.demo.rainOfRequests;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(name = "reservarMesa", url = "http://localhost:8080")
public interface ReservarMesaClient {

    @PostMapping("/reserva/mesas")
    DadosResponse reservar(@RequestBody DadosRequest dados);
}

