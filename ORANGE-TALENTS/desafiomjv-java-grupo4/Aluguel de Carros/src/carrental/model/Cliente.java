package carrental.model;


public class Cliente {
	private String nome;
	private String email;
	private String senha;
	private String endereco;	
	private String dataNascimento;
	private String cpf;
	
	
	
	public Cliente(String nome, String email, String senha, String endereco, String dataNascimento, String cpf) {
		super();
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.endereco = endereco;
		this.dataNascimento = dataNascimento;
		this.cpf = cpf;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public String getEndereco() {
		return endereco;
	}
	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}
	public String getDataNascimento() {
		return dataNascimento;
	}
	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}
	public String getCpf() {
		return cpf;
	}
	public void setCpf(String cpf) {
		this.cpf = cpf;
	}
	
	
	@Override
	public String toString() {
		return "Cliente [nome=" + nome + ", email=" + email + ", senha=" + senha + ", endereco=" + endereco
				+ ", dataNascimento=" + dataNascimento + ", cpf=" + cpf + "]";
	}
	
	
	
	
}
	
	