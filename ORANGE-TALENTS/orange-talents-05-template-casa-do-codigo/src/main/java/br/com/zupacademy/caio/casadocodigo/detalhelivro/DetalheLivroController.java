package br.com.zupacademy.caio.casadocodigo.detalhelivro;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import br.com.zupacademy.caio.casadocodigo.cadastrarlivro.Livro;
import br.com.zupacademy.caio.casadocodigo.listarlivros.LivroRepository;

@RestController
public class DetalheLivroController {
	
	@Autowired
	private LivroRepository livroRepository;
	
	@GetMapping(value = "/livros/{id}")
	public ResponseEntity<DetalheLivroResponse> detalhe(@PathVariable Long id) {
		Optional<Livro> livro = livroRepository.findById(id);
		
		if (!livro.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(new DetalheLivroResponse(livro.get()));
	}
}
