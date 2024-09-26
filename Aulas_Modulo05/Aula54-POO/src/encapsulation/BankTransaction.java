package encapsulation;

//Aula 56 - Encapsulamento

//INTERFACES
//ENUM

public class BankTransaction implements Transaction{
    //Atributos
    private final BankAccount account; //Não vai ser alterado
    private final double amount;
    private final TransactionType type;

    //Encapsulamento
    //enum define constantes
    public enum TransactionType{
        DEPOSIT,
        WITHDRAW
    }

    public BankTransaction(BankAccount account, double amount, TransactionType type){
        this.account = account;
        this.amount = amount;
        this.type = type;
    }

    //Implementa metodos da interface
    @Override
    public void execute() {
        switch (type){
            case DEPOSIT -> this.account.deposit(amount);
            case WITHDRAW -> this.account.withdraw(amount);
        }

    }

    @Override
    public String getDetails() {
        return String.format("Transação do tipo %s com valor de %.2f na conta %s", this.type, this.amount, this.account.getAccountNumber());
    }
}
