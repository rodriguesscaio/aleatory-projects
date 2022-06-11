import java.util.Scanner;

import entities.Bedroom;

public class Program {
  public static void main(String[] args) {
    Scanner data = new Scanner(System.in);

    System.out.print("How many rooms will be rented? ");
    int numberStudents = data.nextInt();
    
    Bedroom[] rentBedroom = new Bedroom[10];

    for (var i = 0; i < numberStudents; i++) {
      System.out.println("Rent #" + (i + 1));

      data.nextLine();

      System.out.print("Name: ");
      String name = data.nextLine();

      System.out.print("Email: ");
      String email = data.nextLine();

      System.out.print("Room: ");
      int number = data.nextInt();

      System.out.println();

      rentBedroom[number] = new Bedroom(name, email, number);
    }

    System.out.println();
    System.out.println("Busy rooms: ");

    for (var i = 0; i < rentBedroom.length; i++) {
      if (rentBedroom[i] != null) {
        System.out.println(rentBedroom[i].toString());
      }
    }

    data.close();
  }
}