package com.restaurant.agile.piloto.entities;

public class Cliente {

    private String nome;
    private String cpf;
    private Pedido pedido;

    public Cliente(String nome, String cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    public String getNome() {
        return nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void realizarPedido(Pedido pedido) {
        this.pedido = pedido;
    }
}
