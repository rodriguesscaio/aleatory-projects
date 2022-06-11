package com.confirma.reserva.demo.rainOfRequests;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DadosRequest {
    @JsonProperty
    private String nome;
    @JsonProperty
    private String cpf;
    @JsonProperty
    private Long numero;

    public DadosRequest() {}

    public DadosRequest(String nome, String cpf, Long numero) {
        this.nome = nome;
        this.cpf = cpf;
        this.numero = numero;
    }

    public String getNome() {
        return nome;
    }

    public String getCpf() {
        return cpf;
    }

    @Override
    public String toString() {
        return "ReservarMesa{" +
                ", nome='" + nome + '\'' +
                ", cpf='" + cpf + '\'' +
                ", numero ='" + numero + '\'' +
                '}';
    }

}
