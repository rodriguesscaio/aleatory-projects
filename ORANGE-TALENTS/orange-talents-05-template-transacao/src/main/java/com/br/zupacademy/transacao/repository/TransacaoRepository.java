package com.br.zupacademy.transacao.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.br.zupacademy.transacao.entities.Cartao;
import com.br.zupacademy.transacao.entities.Transacao;

@Repository
public interface TransacaoRepository extends JpaRepository<Transacao, String> {
	
	Page<Transacao> findAllByCartao(Cartao cartao, Pageable paginacao);

}
