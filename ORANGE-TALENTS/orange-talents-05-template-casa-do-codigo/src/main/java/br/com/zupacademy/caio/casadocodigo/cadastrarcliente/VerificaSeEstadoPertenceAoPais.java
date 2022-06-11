package br.com.zupacademy.caio.casadocodigo.cadastrarcliente;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import br.com.zupacademy.caio.casadocodigo.cadastrarpais.Pais;

@Component
public class VerificaSeEstadoPertenceAoPais implements Validator {

	@Autowired
	private EntityManager manager;
	
	@Override
	public boolean supports(Class<?> clazz) {
		return NovoClienteRequest.class.isAssignableFrom(clazz);
	}

	@Override
	public void validate(Object target, Errors errors) {
		if (errors.hasErrors()) {
			return;
		}
		
		NovoClienteRequest request = (NovoClienteRequest) target;
		
		Pais pais = manager.find(Pais.class, request.getIdPais());
		
		Query query = manager.createQuery("SELECT e FROM Estado e INNER JOIN Pais p ON e.pais = p WHERE e.pais = :pais and e.id = :estado");
		query.setParameter("pais", pais);
		query.setParameter("estado", request.getIdEstado());
		
		List<?> resultList = query.getResultList();
		
		if (resultList.isEmpty()) {
			errors.rejectValue("idEstado", null, "Este estado não pertence a este País");
		}
	}

}
