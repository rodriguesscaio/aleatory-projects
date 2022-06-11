package application;

import java.text.ParseException;
import java.text.SimpleDateFormat;

public class Test {
  public static void main(String[] args) throws ParseException {

    SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");

    System.out.println(dateFormat.parse("18/04/2020"));
  }
}
