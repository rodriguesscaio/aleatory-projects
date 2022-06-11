package carrental.repository;

import java.util.Set;
import java.util.HashSet;


import carrental.model.Cliente;

public class ClienteRepository {
		
	private Set <Cliente> clientes = new HashSet<Cliente>();

	public Set<Cliente> getClientes() {
		return clientes;
	}
	
	public void cadastrarCliente(Cliente cliente) {
		clientes.add(cliente);
		
		
	}

	
	

	
}
