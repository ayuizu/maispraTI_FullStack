//import abstraction.ContBancaria;
import encapsulation.BankAccount;
import encapsulation.BankTransaction;

public class Main {
    public static void main(String[] args) {
        //TIP Press <shortcut actionId="ShowIntentionActions"/> with your caret at the highlighted text
        // to see how IntelliJ IDEA suggests fixing it.
        BankAccount account = new BankAccount("12345",1000);
        System.out.println("Saldo na conta " + account.getAccountNumber() + ": " + account.getBalance());

        BankTransaction depositTransaction = new BankTransaction(account, 15000,BankTransaction.TransactionType.DEPOSIT);
        depositTransaction.execute();

        System.out.println(depositTransaction.getDetails());
        System.out.println("Saldo na conta " + account.getAccountNumber() + ": " + account.getBalance());





    }
}