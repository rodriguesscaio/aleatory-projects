package carrental.repository;

import java.util.HashSet;
import java.util.Set;

import carrental.model.Produto;

public class ProdutoRepository {
	private Set <Produto> produtos = new HashSet<Produto>();

	public Set<Produto> getProduto() {
		return produtos;
	}
	
	public void criarPedido(Produto produto) {	
		produtos.add(produto);		
		
	}
}
