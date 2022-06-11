package com.restaurant.agile.piloto.controllers;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.UUID;

public class ReservarMesaRequest {
    @JsonProperty
    private String id;
    @JsonProperty
    private String nome;
    @JsonProperty
    private String cpf;
    @JsonProperty
    private Integer numero;

    public ReservarMesaRequest(String nome, String cpf, Integer numero) {
        this.id = UUID.randomUUID().toString();
        this.nome = nome;
        this.cpf = cpf;
        this.numero = numero;
    }

    public String getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getCpf() {
        return cpf;
    }

    @Override
    public String toString() {
        return "ReservarMesaRequest{" +
                "id='" + id + '\'' +
                ", nome='" + nome + '\'' +
                ", cpf='" + cpf + '\'' +
                '}';
    }
}
