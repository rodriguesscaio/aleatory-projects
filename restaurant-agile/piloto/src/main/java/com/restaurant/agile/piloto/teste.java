package com.restaurant.agile.piloto;

import com.restaurant.agile.piloto.entities.Cliente;
import com.restaurant.agile.piloto.entities.Mesa;
import com.restaurant.agile.piloto.entities.Restaurante;
import com.restaurant.agile.piloto.usecase.ClienteReservaMesa;

public class teste {

    private static ClienteReservaMesa clienteReservaMesa = new ClienteReservaMesa();


    public static void main(String[] args) {
        Mesa mesa = new Mesa(10, new Restaurante("Bar do cuzcuz", "xxxxx"));

        Cliente cliente = new Cliente("Caio", "55447514785");
        mesa.reservarMesa(cliente);

        clienteReservaMesa.reservar(mesa, cliente);
    }
}
