package application;

import java.util.Scanner;

public class Program {
  public static void main(String[] args) {
    Scanner data = new Scanner(System.in);

    int n = data.nextInt();
    int m = data.nextInt();

    int[][] matriz = new int[n][m];

    for (int i = 0; i < matriz.length; i++){
      for (int j = 0; j < matriz[i].length; j++) {
        matriz[i][j] = data.nextInt();
      }
    }

    int number = data.nextInt();

    for (int i = 0; i < matriz.length; i++){

      for (int j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] == number) {
          System.out.println("Position " + i + "," + j + ":");

          if (j - 1 < matriz[i].length  && j - 1 != -1) {
            System.out.println("Left: " + matriz[i][j - 1]);
          }

          if (j + 1 < matriz[i].length && j + 1 != -1 ) {
            System.out.println("Right: " + matriz[i][j + 1]);
          }
          
          if (i - 1 < matriz.length && i - 1 != -1) {
            System.out.println("Up: " + matriz[i - 1][j]);
          }

          if (i + 1 < matriz.length && i + 1 != -1) {
            System.out.println("Down: " + matriz[i + 1][j]);
          }

        }
      }
    }

    data.close();
  }
}