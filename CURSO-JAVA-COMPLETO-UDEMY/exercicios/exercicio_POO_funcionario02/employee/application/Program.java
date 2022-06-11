package application;

import java.util.Locale;
import java.util.Scanner;

import entities.Employee;

public class Program {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		
		Scanner data = new Scanner(System.in);
		
		Employee employee = new Employee();
		
		System.out.print("Name: ");
		employee.name = data.nextLine();
		
		System.out.print("Gross Salary: ");
		employee.grossSalary = data.nextDouble();
		
		System.out.print("Tax: ");
		employee.tax = data.nextDouble();
		
		System.out.println();
		
		System.out.printf("Employee: " + employee);
		
		System.out.println();
		
		System.out.print("Which percentage to increase salary? ");
		double percentage = data.nextDouble();
		employee.increaseSalary(percentage);
		
		System.out.println();
		
		System.out.println("Updated data: " + employee);
		
		
		data.close();
	}

}
