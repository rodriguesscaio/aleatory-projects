package br.com.zupacademy.caio.casadocodigo.compartilhado;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Assert;

public class UniqueValueValidator implements ConstraintValidator<UniqueValue, Object> {
	
	private String domainAttribute;
	private Class<?> klass;
	
	@Autowired
	private EntityManager manager;
	
	@Override
	public void initialize(UniqueValue params) {
		domainAttribute = params.fieldName();
		klass = params.domainClass();
		
		System.out.println(klass.getName());
	}
	
	@Override
	public boolean isValid(Object value, ConstraintValidatorContext context) {
		Query query = manager.createQuery("select 1 from " + klass.getName() 
											+ " where " +  domainAttribute + " = :value");
		query.setParameter("value", value);
		List<?> resultList = query.getResultList();
		
		Assert.state(resultList.size() <= 1, "Foi encontrado mais de um " + klass + 
											" com o atributo " + domainAttribute + " = " + value);
		
		return resultList.isEmpty();
	}
	
}
