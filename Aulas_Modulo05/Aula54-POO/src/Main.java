//import abstraction.ContBancaria;
import encapsulation.BankAccount;
import encapsulation.BankTransaction;

import singleton.ConfigurationManager;

public class Main {
    public static void main(String[] args) {

        //Aula 56 - Encapsulamento

        //Interface
        BankAccount account = new BankAccount("12345",1000);
        System.out.println("Saldo na conta " + account.getAccountNumber() + ": " + account.getBalance());

        BankTransaction depositTransaction = new BankTransaction(account, 15000,BankTransaction.TransactionType.DEPOSIT);
        depositTransaction.execute();

        System.out.println(depositTransaction.getDetails());
        System.out.println("Saldo na conta " + account.getAccountNumber() + ": " + account.getBalance());

        //Singleton
        ConfigurationManager configManager = ConfigurationManager.getInstance();

        String dbUser = configManager.getProperty("db.user");
        System.out.println("Usuário do banco de dados: " + dbUser);


    }
}