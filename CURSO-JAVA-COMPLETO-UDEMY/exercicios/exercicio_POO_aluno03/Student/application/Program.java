package application;

import java.util.Locale;
import java.util.Scanner;

import entities.Student;

public class Program {
	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		
		Scanner data = new Scanner(System.in);
		
		Student student = new Student();
		
		student.name = data.nextLine();
		student.nota1 = data.nextDouble();
		student.nota2 = data.nextDouble();
		student.nota3 = data.nextDouble();
		
		System.out.printf("FINAL GRADE = %.2f%n", student.nota());
		System.out.println(student.isAccept());
		
		data.close();
	}
}
