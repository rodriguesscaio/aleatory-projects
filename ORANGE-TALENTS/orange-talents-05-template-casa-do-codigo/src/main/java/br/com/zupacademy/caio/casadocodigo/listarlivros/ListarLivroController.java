package br.com.zupacademy.caio.casadocodigo.listarlivros;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.zupacademy.caio.casadocodigo.cadastrarlivro.Livro;

@RestController
@RequestMapping("/livros")
public class ListarLivroController {
	
	@Autowired
	private LivroRepository livroRepository;
	
	@GetMapping
	public List<FormatLivroResponse> listar() {
		
		List<Livro> livros = (List<Livro>) livroRepository.findAll();
		
		List<FormatLivroResponse> livrosFormatados = livros.stream().map(FormatLivroResponse::new).collect(Collectors.toList());
		
		return livrosFormatados;
	}
}
