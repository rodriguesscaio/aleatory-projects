package application;

import java.util.Locale;
import java.util.Scanner;

import entities.BankAccount;

public class Program {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);

		Scanner data = new Scanner(System.in);

		BankAccount account;

		System.out.print("Enter account number: ");
		int number = data.nextInt();
		System.out.print("Enter account holder: ");
		data.nextLine();
		String holder = data.nextLine();
		System.out.print("Is there an initial deposit (y/n)? ");
		char awnser = data.next().charAt(0);

		if (awnser == 'y') {
			System.out.print("Enter initial deposit value: ");
			double initialDeposit = data.nextDouble();
			account = new BankAccount(number, holder, initialDeposit);
		} else {
			account = new BankAccount(number, holder);
		}

		System.out.println();
		System.out.println("Account data: ");
		System.out.println(account);

		System.out.println();
		System.out.print("Enter a deposit value: ");
		double depositValue = data.nextDouble();
		account.deposit(depositValue);
		System.out.println("Updated account data: ");
		System.out.println(account);

		System.out.println();
		System.out.print("Enter a withdraw value: ");
		double withdrawValue = data.nextDouble();
		account.withdraw(withdrawValue);
		System.out.println("Updated account data: ");
		System.out.println(account);

		data.close();

	}

}
