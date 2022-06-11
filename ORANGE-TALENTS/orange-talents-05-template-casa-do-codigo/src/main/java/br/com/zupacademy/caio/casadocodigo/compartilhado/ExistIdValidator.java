package br.com.zupacademy.caio.casadocodigo.compartilhado;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

public class ExistIdValidator implements ConstraintValidator<ExistId, Object> {
	
	private Class<?> klass;
	private String fieldName;
	
	@PersistenceContext
	private EntityManager manager;
	
	@Override
	public void initialize(ExistId params) {
		klass = params.domainClass();
		fieldName = params.fieldName();
	}

	@Override
	public boolean isValid(Object value, ConstraintValidatorContext context) {
		Query query = manager.createQuery("select 1 from " + klass.getName() + " where " + fieldName + " = " + " :value");
		query.setParameter("value", value);
		
		List<?> list = query.getResultList();
		
		return !list.isEmpty();
	}

}
