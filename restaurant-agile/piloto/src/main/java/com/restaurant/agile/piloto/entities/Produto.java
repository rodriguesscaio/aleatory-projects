package com.restaurant.agile.piloto.entities;

public class Produto {

    private String id;
    private String nome;
    private String descricao;

    public Produto(String id, String nome, String descricao) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }

    public String getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getDescricao() {
        return descricao;
    }
}
