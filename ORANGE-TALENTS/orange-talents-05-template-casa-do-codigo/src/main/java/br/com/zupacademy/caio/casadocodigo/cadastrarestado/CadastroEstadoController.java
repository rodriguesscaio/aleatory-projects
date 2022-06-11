package br.com.zupacademy.caio.casadocodigo.cadastrarestado;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CadastroEstadoController {
	
	@PersistenceContext
	private EntityManager manager;
	
	@Autowired
	private ImpedirEstadoDuplicadoPorPais impedirEstadoDuplicadoPorPais;
	
	@InitBinder
	@Transactional
	public void initBinder(WebDataBinder webDataBinder) {
		webDataBinder.addValidators(impedirEstadoDuplicadoPorPais);
	}
	
	@PostMapping(value = "/api/estado")
	@Transactional
	public String cadastrar(@RequestBody @Valid NovoEstadoRequest request) {
		Estado estado = request.toModel(manager);
		
		manager.persist(estado);
		
		return estado.toString();
	}
}
