package com.restaurant.agile.piloto.entities;

import java.util.ArrayList;
import java.util.List;

public class Restaurante {
    private String nome;
    private String cnpj;
    private List<Mesa> mesas;

    public Restaurante(String nome, String cnpj) {
        this.nome = nome;
        this.cnpj = cnpj;
        this.mesas = new ArrayList<Mesa>();
    }

    public String getNome() {
        return nome;
    }

    public String getCnpj() {
        return cnpj;
    }

    public void inserirMesa(Mesa mesa) {
        this.mesas.add(mesa);
    }

    public List<Mesa> getMesas() {
        return this.mesas;
    }
}
