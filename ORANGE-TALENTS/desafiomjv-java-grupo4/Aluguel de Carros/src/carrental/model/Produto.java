package carrental.model;

public class Produto {
	private String nomeVeiculo;
	private String placa;
	private String descricao;
	private double valorAluguel;
	
	public Produto(String nomeVeiculo, String placa, String descricao, double valorAluguel) {
		super();
		this.nomeVeiculo = nomeVeiculo;
		this.placa = placa;
		this.descricao = descricao;
		this.valorAluguel = valorAluguel;
	}
	
	public String getNomeVeiculo() {
		return nomeVeiculo;
	}
	public void setNomeVeiculo(String nomeVeiculo) {
		this.nomeVeiculo = nomeVeiculo;
	}
	public String getPlaca() {
		return placa;
	}
	public void setPlaca(String placa) {
		this.placa = placa;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public double getValorAluguel() {
		return valorAluguel;
	}
	public void setValorAluguel(double valorAluguel) {
		this.valorAluguel = valorAluguel;
	}

	@Override
	public String toString() {
		return "Produto [nomeVeiculo=" + nomeVeiculo + ", placa=" + placa + ", descricao=" + descricao
				+ ", valorAluguel=" + valorAluguel + "]";
	}
	
	
	
}
