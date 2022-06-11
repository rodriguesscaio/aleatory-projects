package carrental.model;



public class Pedido {
	
	private int numeroPedido;
	private String dataPedido;	
	private int qtdDias;
	private Cliente cliente;
	private Produto produto;
	
	
	public Pedido(int numeroPedido, String dataPedido, int qtdDias, Cliente cliente, Produto produto) {
		
		this.numeroPedido = numeroPedido;
		this.dataPedido = dataPedido;
		this.qtdDias = qtdDias;
		this.cliente = cliente;
		this.produto = produto;
	}
	public int getNumeroPedido() {
		return numeroPedido;
	}
	public void setNumeroPedido(int numeroPedido) {
		this.numeroPedido = numeroPedido;
	}
	public String getDataPedido() {
		return dataPedido;
	}
	public void setDataPedido(String dataPedido) {
		this.dataPedido = dataPedido;
	}
	public int getQtdDias() {
		return qtdDias;
	}
	public void setQtdDias(int qtdDias) {
		this.qtdDias = qtdDias;
	}
	public Cliente getCliente() {
		return cliente;
	}
	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}
	public Produto getProduto() {
		return produto;
	}
	public void setProduto(Produto produto) {
		this.produto = produto;
	}
	
	
	@Override
	public String toString() {
		return "Pedido [numeroPedido=" + numeroPedido + ", dataPedido=" + dataPedido + ", qtdDias=" + qtdDias
				+ ", cliente=" + cliente + ", produto=" + produto + "]";
	}
	
	
	
}