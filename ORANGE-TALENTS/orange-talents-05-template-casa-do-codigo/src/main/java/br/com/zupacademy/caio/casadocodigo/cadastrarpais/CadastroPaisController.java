package br.com.zupacademy.caio.casadocodigo.cadastrarpais;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CadastroPaisController {
	
	@PersistenceContext
	private EntityManager manager;
	
	@PostMapping(value = "/api/pais")
	@Transactional
	public ResponseEntity<?> cadastrar(@RequestBody @Valid NovoPaisRequest request) {
		Pais pais = request.toModel();
		
		manager.persist(pais);
		
		return ResponseEntity.ok(request.toString());
	}
}
