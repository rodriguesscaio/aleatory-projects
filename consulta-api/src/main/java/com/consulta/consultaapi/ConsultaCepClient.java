package com.consulta.consultaapi;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(url = "https://viacep.com.br", value = "teste")
public interface ConsultaCepClient {
	
	@RequestMapping(method = RequestMethod.GET, value ="/ws/{cep}/json/")
	public CepResponse buscar(@PathVariable String cep);
}
