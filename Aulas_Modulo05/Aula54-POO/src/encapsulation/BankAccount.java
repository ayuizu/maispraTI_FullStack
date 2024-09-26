package encapsulation;

public class BankAccount {
    //Atributos
    private String accountNumber;
    private double balance;
    //Metodo construtor
    public BankAccount(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    //Metodos de acesso
    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }
    public String getAccountNumber() {
        return this.accountNumber;
    }
    public void setBalance(double balance) {
        this.balance = balance;
    }
    public double getBalance() {
        return this.balance;
    }
    //Metodo para depositar
    public void deposit(double amount) {
        if(amount>0)
            this.balance += amount;
        else throw new IllegalArgumentException("O valor do depósito deve ser positivo");
    }
    //Metodo para sacar
    public void withdraw(double amount) {
        if(amount>0 && amount <=this.balance)
            this.balance -= amount;
        else throw new IllegalArgumentException("O valor do saque deve ser positivo");
    }
}
