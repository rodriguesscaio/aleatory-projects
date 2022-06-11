package com.confirma.reserva.demo;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReservarMesaDTO {
    @JsonProperty
    private String id;
    @JsonProperty
    private String nome;
    @JsonProperty
    private String cpf;
    @JsonProperty
    private Integer numero;

    public ReservarMesaDTO() {}

    public ReservarMesaDTO(String id, String nome, String cpf, Integer numero) {
        this.id = id;
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
        return "ReservarMesa{" +
                "id='" + id + '\'' +
                ", nome='" + nome + '\'' +
                ", cpf='" + cpf + '\'' +
                ", numero ='" + numero + '\'' +
                '}';
    }
}
