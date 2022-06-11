package br.com.zupacademy.caio.casadocodigo.cadastrarestado;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import br.com.zupacademy.caio.casadocodigo.cadastrarpais.Pais;

@Component
public class ImpedirEstadoDuplicadoPorPais implements Validator {

	
	@Autowired
	private EntityManager manager;
	
	@Override
	public boolean supports(Class<?> clazz) {
		return NovoEstadoRequest.class.isAssignableFrom(clazz);
	}
	
	@Override
	public void validate(Object target, Errors errors) {
		if (errors.hasErrors()) {
			return;
		}
		
		NovoEstadoRequest request = (NovoEstadoRequest) target;
		
		Pais pais = manager.find(Pais.class, request.getIdPais());
		
		Query query = manager.createQuery("select e from Estado e where e.nome = :nome and e.pais = :pais");
		query.setParameter("nome", request.getNome());
		query.setParameter("pais", pais);
		
		List<?> resultList = query.getResultList();
		
		if (resultList.size() > 0) {
			errors.rejectValue("nome", null, "Este estado já existe neste País");
		}
	}

}
