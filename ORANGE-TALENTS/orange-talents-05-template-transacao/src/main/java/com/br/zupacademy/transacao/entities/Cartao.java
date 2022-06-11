package com.br.zupacademy.transacao.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Cartao {

	@Id
	private String id;

	private String email;

	@OneToMany(mappedBy = "cartao")
	private List<Transacao> transacoes;

	@Deprecated
	public Cartao() {
	}

	public Cartao(String id, String email) {
		this.id = id;
		this.email = email;
		this.transacoes = new ArrayList<Transacao>();
	}

	public String getId() {
		return id;
	}

	public String getEmail() {
		return email;
	} 

	@Override
	public String toString() {
		return "Cartao [id=" + id + ", email=" + email + "]";
	}
}