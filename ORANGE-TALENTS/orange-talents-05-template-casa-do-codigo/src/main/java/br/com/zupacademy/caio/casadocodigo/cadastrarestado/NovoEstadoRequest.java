package br.com.zupacademy.caio.casadocodigo.cadastrarestado;

import javax.persistence.EntityManager;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import br.com.zupacademy.caio.casadocodigo.cadastrarpais.Pais;
import br.com.zupacademy.caio.casadocodigo.compartilhado.ExistId;

public class NovoEstadoRequest {

	@NotBlank
	private String nome;

	@NotNull
	@ExistId(domainClass = Pais.class, fieldName = "id")
	private Long idPais;

	public String getNome() {
		return nome;
	}

	public Long getIdPais() {
		return idPais;
	}

	@Override
	public String toString() {
		return "Estado = " + nome + ", Pais = " + idPais;
	}

	public Estado toModel(EntityManager manager) {
		Pais pais = manager.find(Pais.class, idPais);
		return new Estado(nome, pais);
	}
}
