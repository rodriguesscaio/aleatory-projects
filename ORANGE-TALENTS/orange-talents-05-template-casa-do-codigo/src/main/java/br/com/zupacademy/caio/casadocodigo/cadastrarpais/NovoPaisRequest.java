package br.com.zupacademy.caio.casadocodigo.cadastrarpais;

import javax.validation.constraints.NotBlank;

import br.com.zupacademy.caio.casadocodigo.compartilhado.UniqueValue;

public class NovoPaisRequest {
	
	@NotBlank
	@UniqueValue(domainClass = Pais.class, fieldName = "nome")
	private String nome;

	@Override
	public String toString() {
		return "País = " + nome;
	}
	
	public String getNome() {
		return nome;
	}

	public Pais toModel() {
		return new Pais(nome);
	}
	
	
}
