package com.restaurant.agile.piloto.usecase;

import com.restaurant.agile.piloto.entities.Cliente;
import com.restaurant.agile.piloto.entities.Mesa;
import com.restaurant.agile.piloto.entities.Restaurante;
import com.restaurant.agile.piloto.exceptions.MesaIndisponivelException;
import com.restaurant.agile.piloto.exceptions.MesaInexistenteException;

public class ClienteReservaMesa {

    private Restaurante restaurante = new Restaurante("Bar do Cuzcuz", "XX. XXX. XXX/0001-XX");

    public void reservar(Mesa mesa, Cliente cliente) {
        carregarMesas();

        verificarSeMesaExiste(mesa);

        if (!mesa.disponivel()) {
            throw new MesaIndisponivelException("Mesa indisponivel");
        }

        mesa.reservarMesa(cliente);
    }

    private void verificarSeMesaExiste(Mesa mesa){
        for (Mesa m: this.restaurante.getMesas()) {
            if (!m.getNumero().equals(mesa.getNumero())) {
                throw new MesaInexistenteException("Esta mesa nao existe no estabelecimento");
            }
        }
    }

    private void carregarMesas() {
        for (int i = 0; i < 20; i++) {
            this.restaurante.inserirMesa(new Mesa(
                    i + 10,
                    this.restaurante
            ));
        }
    }
}
