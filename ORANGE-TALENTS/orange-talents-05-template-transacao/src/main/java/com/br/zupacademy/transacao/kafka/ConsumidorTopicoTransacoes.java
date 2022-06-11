package com.br.zupacademy.transacao.kafka;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import com.br.zupacademy.transacao.cartaotransacoes.TransacaoDTO;
import com.br.zupacademy.transacao.entities.Transacao;
import com.br.zupacademy.transacao.repository.TransacaoRepository;

@Component
public class ConsumidorTopicoTransacoes {

	@Autowired
	private TransacaoRepository transacaoRepository;

//	@KafkaListener(topics = "transacoes", groupId = "minha-aplicacao")
//	public void listen(TransacaoDTO transacaoDTO) {
//
//		Transacao transacao = transacaoDTO.toModel();
//
//		transacaoRepository.save(transacao);
//
//	}

	@KafkaListener(topics = "reservarmesa", groupId = "minha-aplicacao")
	public void listen(String message) {
		System.out.println("CHEGUEEEEI: " + message);
	}
}
