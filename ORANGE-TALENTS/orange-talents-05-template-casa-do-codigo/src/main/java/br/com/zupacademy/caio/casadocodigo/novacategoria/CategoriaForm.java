package br.com.zupacademy.caio.casadocodigo.novacategoria;

import javax.validation.constraints.NotBlank;

import br.com.zupacademy.caio.casadocodigo.compartilhado.UniqueValue;

public class CategoriaForm {
	
	@NotBlank
	@UniqueValue(fieldName = "nome", domainClass = Categoria.class)
	private String nome;

	public String getNome() {
		return nome;
	}
	
	public Categoria converter() {
		return new Categoria(nome);
	}
}
