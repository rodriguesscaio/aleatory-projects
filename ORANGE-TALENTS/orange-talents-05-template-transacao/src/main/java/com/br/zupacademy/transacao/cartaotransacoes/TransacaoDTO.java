package com.br.zupacademy.transacao.cartaotransacoes;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import com.br.zupacademy.transacao.entities.Cartao;
import com.br.zupacademy.transacao.entities.Estabelecimento;
import com.br.zupacademy.transacao.entities.Transacao;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;

public class TransacaoDTO {

	private String id;
	private BigDecimal valor;
	private EstabelecimentoDTO estabelecimento;
	private CartaoDTO cartao;

	@JsonDeserialize(using = LocalDateTimeDeserializer.class)
	private LocalDateTime efetivadaEm;

	@Deprecated
	public TransacaoDTO() {
	}

	public TransacaoDTO(String id, BigDecimal valor, EstabelecimentoDTO estabelecimento, CartaoDTO cartao,
			LocalDateTime efetivadaEm) {
		this.id = id;
		this.valor = valor;
		this.estabelecimento = estabelecimento;
		this.cartao = cartao;
		this.efetivadaEm = efetivadaEm;
	}

	public String getId() {
		return id;
	}

	public BigDecimal getValor() {
		return valor;
	}

	public EstabelecimentoDTO getEstabelecimento() {
		return estabelecimento;
	}

	public CartaoDTO getCartao() {
		return cartao;
	}

	public LocalDateTime getEfetivadaEm() {
		return efetivadaEm;
	}

	@Override
	public String toString() {
		return "Transacao [id=" + id + ", valor=" + valor + ", estabelecimento=" + estabelecimento + ", cartao="
				+ cartao + ", EfetivadaEm=" + efetivadaEm + "]";
	}

	public Transacao toModel() {
		return new Transacao(id, valor, new Estabelecimento(estabelecimento.getNome(), estabelecimento.getCidade(),
				estabelecimento.getEndereco()), new Cartao(cartao.getId(), cartao.getEmail()), efetivadaEm);
	}

}

class EstabelecimentoDTO {
	private String nome;
	private String cidade;
	private String endereco;

	@Deprecated
	public EstabelecimentoDTO() {
	}

	public EstabelecimentoDTO(String nome, String cidade, String endereco) {
		this.nome = nome;
		this.cidade = cidade;
		this.endereco = endereco;
	}

	public String getNome() {
		return nome;
	}

	public String getCidade() {
		return cidade;
	}

	public String getEndereco() {
		return endereco;
	}

	@Override
	public String toString() {
		return "Estabelecimento DTO [nome=" + nome + ", cidade=" + cidade + ", endereco=" + endereco + "]";
	}
}

class CartaoDTO {
	private String id;
	private String email;

	@Deprecated
	public CartaoDTO() {
	}

	public CartaoDTO(String id, String email) {
		this.id = id;
		this.email = email;
	}

	public String getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	@Override
	public String toString() {
		return "Cartao DTO [id=" + id + ", email=" + email + "]";
	}
}
