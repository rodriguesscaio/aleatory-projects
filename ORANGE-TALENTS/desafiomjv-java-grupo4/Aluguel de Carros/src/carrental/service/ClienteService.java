package carrental.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;




public class ClienteService {
	
	//Rever
	public String formatarData(String dataNascimento) {
		DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy"); 
		LocalDate data = LocalDate.parse(dataNascimento, formato);
	
		return dataNascimento;
	}
	public String formatarCPF(String cpf) {		
		
		return(cpf.substring(0, 3) + "." + cpf.substring(3, 6) + "." +
				cpf.substring(6, 9) + "-" + cpf.substring(9, 11));
	}
	
	
	public void alterarCliente() {
		
		
	}
	public void buscarCliente() {
		
	}
	
	
	public void excluirCliente() {
		
	}
	
	
}
