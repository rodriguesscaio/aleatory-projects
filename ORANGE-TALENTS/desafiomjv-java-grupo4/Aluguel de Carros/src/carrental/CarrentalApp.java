package carrental;

import java.util.Set;

import carrental.model.Cliente;
import carrental.model.Pedido;
import carrental.model.Produto;
import carrental.repository.ClienteRepository;
import carrental.repository.ProdutoRepository;
import carrental.service.ClienteService;
import carrental.service.ProdutoService;

public class CarrentalApp {

	public static void main(String[] args) {
		ClienteRepository repository = new ClienteRepository();
		Cliente Joana = new Cliente("Joana", "Joana@gmail.com", "123456", "Rua:ABS, 123","12/12/1222", "00000000000");
		repository.cadastrarCliente(Joana);
		
		ProdutoRepository repositoryP = new ProdutoRepository();
		Produto Carro = new Produto("Renault Sandeiro", "oqz1917", "Cinza chumbo", 50.00);
		repositoryP.criarPedido(Carro);
		
		
		Set<Cliente> clientes = repository.getClientes();
		Set<Produto> produtos = repositoryP.getProduto();
		
		
		ClienteService service = new ClienteService();
		Joana.setDataNascimento(service.formatarData(Joana.getDataNascimento()));		
		Joana.setCpf(service.formatarCPF(Joana.getCpf()));		
		
		
		ProdutoService serviceP = new ProdutoService();
		Carro.setPlaca(serviceP.formatarPlaca(Carro.getPlaca()));		
		
		System.out.println(clientes);
		System.out.println(produtos);
		
		Pedido pedido = new Pedido(1,"11/01/2021" , 5, Joana, Carro);
		System.out.println(pedido);
		
		
	}
	
	
	
	
		
		
	

}
