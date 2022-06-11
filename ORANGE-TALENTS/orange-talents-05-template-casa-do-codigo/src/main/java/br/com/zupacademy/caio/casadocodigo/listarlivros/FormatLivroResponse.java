package br.com.zupacademy.caio.casadocodigo.listarlivros;

import br.com.zupacademy.caio.casadocodigo.cadastrarlivro.Livro;

public class FormatLivroResponse {
	
	private Long id;
	private String nome;
	
	public FormatLivroResponse(Livro livro) {
		this.id = livro.getId();
		this.nome = livro.getTitulo();
	}
	
	public Long getId() {
		return id;
	}
	
	public String getNome() {
		return nome;
	}

	@Override
	public String toString() {
		return "FormatLivroResponse [id=" + id + ", nome=" + nome + "]";
	}
	
	
}
