package application;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

import application.entities.Employee;

public class Program {
  public static void main(String[] args) {
    Locale.setDefault(Locale.US);
    Scanner data = new Scanner(System.in);

    List<Employee> employees = new ArrayList<>();

    System.out.print("How many employees will be registered? ");
    int number = data.nextInt();

    System.out.println();

    for (int i = 0; i < number; i++) {
      System.out.println("Employee #" + (i + 1));
      System.out.print("Id: ");
      Long id = data.nextLong();
      System.out.print("Name: ");
      data.nextLine();
      String name = data.nextLine();
      System.out.print("Salary: ");
      double salary = data.nextDouble();
      System.out.println();

      Employee employee = new Employee(id, name, salary);

      employees.add(employee);
    }

    System.out.print("Enter employee id that will have salary increase: ");
    Long id = data.nextLong();
    
    Employee findEmployee = employees.stream().filter(x -> x.getId().equals(id)).findFirst().orElse(null);

    if (findEmployee != null) {
      System.out.print("Enter the percentage: ");
      double percent = data.nextDouble();

      findEmployee.increaseSalary(percent);
    } else {
      System.out.println("This id does exist!");
    }

    System.out.println();

    System.out.println("List of employees:");
    for (Employee employee : employees) {
      System.out.println(employee);
    }

    data.close();
  }
}