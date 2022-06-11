package br.com.zupacademy.caio.casadocodigo.cadastrarcliente;

import javax.persistence.EntityManager;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import br.com.zupacademy.caio.casadocodigo.cadastrarestado.Estado;
import br.com.zupacademy.caio.casadocodigo.cadastrarpais.Pais;
import br.com.zupacademy.caio.casadocodigo.compartilhado.ExistId;
import br.com.zupacademy.caio.casadocodigo.compartilhado.UniqueValue;
import br.com.zupacademy.caio.casadocodigo.compartilhado.VerificaCPFouCNPJ;

public class NovoClienteRequest {

	@NotBlank
	@Email
	@UniqueValue(domainClass = Cliente.class, fieldName = "email")
	private String email;

	@NotBlank
	private String nome;

	@NotBlank
	private String sobrenome;

	@NotBlank
	@VerificaCPFouCNPJ
	@UniqueValue(domainClass = Cliente.class, fieldName = "documento")
	private String documento;

	@NotBlank
	private String endereco;

	@NotBlank
	private String complemento;

	@NotBlank
	private String cidade;

	@NotNull
	@ExistId(domainClass = Pais.class, fieldName = "id")
	private Long idPais;
	
	private Long idEstado;

	@NotBlank
	private String telefone;

	@NotBlank
	private String cep;

	public NovoClienteRequest(@NotBlank @Email String email, @NotBlank String nome, @NotBlank String sobrenome,
			@NotBlank String documento, @NotBlank String endereco, @NotBlank String complemento,
			@NotBlank String cidade, @NotNull Long idPais, Long idEstado, @NotBlank String telefone,
			@NotBlank String cep) {
		this.email = email;
		this.nome = nome;
		this.sobrenome = sobrenome;
		this.documento = documento;
		this.endereco = endereco;
		this.complemento = complemento;
		this.cidade = cidade;
		this.idPais = idPais;
		this.idEstado = idEstado;
		this.telefone = telefone;
		this.cep = cep;
	}

	@Override
	public String toString() {
		return "NovoClienteRequest [email=" + email + ", nome=" + nome + ", sobrenome=" + sobrenome + ", documento="
				+ documento + ", endereco=" + endereco + ", complemento=" + complemento + ", cidade=" + cidade
				+ ", idPais=" + idPais + ", idEstado=" + idEstado + ", telefone=" + telefone + ", cep=" + cep + "]";
	}

	public String getEmail() {
		return email;
	}

	public String getNome() {
		return nome;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public String getDocumento() {
		return documento;
	}

	public String getEndereco() {
		return endereco;
	}

	public String getComplemento() {
		return complemento;
	}

	public String getCidade() {
		return cidade;
	}

	public Long getIdPais() {
		return idPais;
	}

	public Long getIdEstado() {
		return idEstado;
	}

	public String getTelefone() {
		return telefone;
	}

	public String getCep() {
		return cep;
	}

	public Cliente toModel(EntityManager manager) {
		Pais pais = manager.find(Pais.class, idPais);
		Estado estado = manager.find(Estado.class, idEstado);
		
		Cliente cliente = new Cliente(email, nome, sobrenome, 
							documento, endereco, complemento, 
							cidade, pais, telefone, cep);
		
		cliente.setEstado(estado);

		return cliente;
	}

	/*
	 * Os seguintes campos precisam ser preenchidos:
	 * 
	 * email nome sobrenome documento(cpf/cnpj) endereco complemento cidade pais
	 * estado(caso aquele pais tenha estado) telefone cep Restrição email
	 * obrigatório e com formato adequado email é único no sistema nome obrigatório
	 * sobrenome obrigatório documento(cpf/cnpj) obrigatório e só precisa ser um cpf
	 * ou cnpj documento é único no sistema endereco obrigatório complemento
	 * obrigatório cidade obrigatório país obrigatório se o país tiver estados, um
	 * estado precisa ser selecionado estado(caso aquele pais tenha estado) - apenas
	 * se o país tiver cadastro de estados telefone obrigatório cep é obrigatório
	 */
}
