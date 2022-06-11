package application.entities;

public class Employee {
  private Long id;
  private String name;
  private Double salary;

  public Employee(Long id, String name, Double salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  public Long getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Double getSalary() {
    return salary;
  }

  public String toString() {
    return String.format("%d, %s, %.2f", id, name, salary);
  }

  public void increaseSalary(double percent) {
    salary += (salary * percent / 100);
  }
}
