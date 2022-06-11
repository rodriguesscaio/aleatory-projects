package com.confirma.reserva.demo.rainOfRequests;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DadosResponse {

    @JsonProperty
    private String success;

    private  DadosResponse() {

    }

    public DadosResponse(String success) {
        this.success = success;
    }

    public String getSuccess() {
        return success;
    }
}
