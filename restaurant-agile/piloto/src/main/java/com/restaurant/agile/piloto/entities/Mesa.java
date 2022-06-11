package com.restaurant.agile.piloto.entities;

public class Mesa {

    private Integer numero;
    private Restaurante restaurante;
    private Cliente cliente;
    private Boolean disponivel;

    public Mesa(Integer numero, Restaurante restaurante) {
        this.numero = numero;
        this.restaurante = restaurante;
        this.disponivel = true;
    }

    public Integer getNumero() {
        return numero;
    }

    public Restaurante getRestaurante() {
        return restaurante;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void reservarMesa(Cliente cliente) {
        this.cliente = cliente;
        this.disponivel = false;
    }

    public Boolean disponivel() {
        return this.disponivel;
    }
}
