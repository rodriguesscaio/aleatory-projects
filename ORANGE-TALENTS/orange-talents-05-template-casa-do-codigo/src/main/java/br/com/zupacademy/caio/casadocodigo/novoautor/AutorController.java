package br.com.zupacademy.caio.casadocodigo.novoautor;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/autores")
public class AutorController {

	
	@Autowired
	private AutorRepository autorRepository;
	
	@PostMapping
	public String criarAutor(@RequestBody @Valid AutorDTO autorDTO) {
		Autor autor = autorDTO.converter();
		autorRepository.save(autor);
		return autor.toString();
	}
}
