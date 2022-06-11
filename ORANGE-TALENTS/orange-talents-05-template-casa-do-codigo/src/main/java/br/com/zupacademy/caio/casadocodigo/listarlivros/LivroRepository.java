package br.com.zupacademy.caio.casadocodigo.listarlivros;

import org.springframework.data.repository.CrudRepository;

import br.com.zupacademy.caio.casadocodigo.cadastrarlivro.Livro;

public interface LivroRepository extends CrudRepository<Livro, Long>{

}
