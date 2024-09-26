public class ContaBancaria {
    private double saldo;

    public ContaBancaria(double saldo) {
        this.saldo=saldo;
    }
    public void depositar(double valor) {
        this.saldo += valor;
    }
    public void sacar(double valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }
    public double consultarSaldo(){
        return this.saldo;
    }
}
