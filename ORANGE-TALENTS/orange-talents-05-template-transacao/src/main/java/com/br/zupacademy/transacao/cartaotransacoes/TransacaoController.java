package com.br.zupacademy.transacao.cartaotransacoes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.br.zupacademy.transacao.entities.Cartao;
import com.br.zupacademy.transacao.entities.Transacao;
import com.br.zupacademy.transacao.repository.CartaoRepository;
import com.br.zupacademy.transacao.repository.TransacaoRepository;

@RestController
public class TransacaoController {

	@Autowired
	private CartaoRepository cartaoRepository;

	@Autowired
	private TransacaoRepository transacaoRepository;

	@GetMapping("/cartoes/{id}/transacoes")
	public ResponseEntity<?> listar(@PathVariable String id,
			@PageableDefault(page = 0, size = 10, sort = "efetivadaEm", direction = Direction.DESC) Pageable paginacao) {
		Cartao cartao = cartaoRepository.findById(id)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cartão não encontrado"));

		Page<Transacao> transacoes = transacaoRepository.findAllByCartao(cartao, paginacao);

		return ResponseEntity.ok(transacoes.map(TransacaoResponse::new));
	}
}
