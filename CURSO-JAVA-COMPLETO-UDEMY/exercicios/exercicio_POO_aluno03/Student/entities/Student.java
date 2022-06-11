package entities;

public class Student {
	public String name;
	public double nota1;
	public double nota2;
	public double nota3;
	
	public double nota() {
		return nota1 + nota2 + nota3;
	}
	
	public String isAccept() {
		if (nota() > 60.0) {
			return "PASS";
		} else {
			double points = 60 - nota();
			return String.format("FALEID %nMISSING %.2f%n", points);
		}
	}
}
