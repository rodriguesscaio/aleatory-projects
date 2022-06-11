package com.restaurant.agile.piloto.entities;

import java.util.ArrayList;
import java.util.List;

public class Pedido {
    private String id;
    private Cliente cliente;
    private List<Produto> produtos;

    public Pedido(String id, Cliente cliente) {
        this.id = id;
        this.cliente = cliente;
        this.produtos = new ArrayList<Produto>();
    }

    public String getId() {
        return id;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void inserirProduto(Produto produto) {
        this.produtos.add(produto);
    }
}
