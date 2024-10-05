package Heranca;

public class Gerente extends Funcionario{
    //Atributos específicos
    protected double bonus;

    //Métodos construtores
    public Gerente(){
        this.bonus=20;
    }
    public Gerente(String nome, double salario){
        super(nome,salario);
        this.bonus=20;
    }

    //Metodos sobrescritos
    @Override
    public double calcularBonus(){
        return this.salario*this.bonus/100;
    }

    @Override
    public String trabalhar(){
        return "Gerente está trabalhando";
    }

    @Override
    public String toString(){
        return "Gerente \n" + super.toString() + "\nBônus (20%): R$ " + calcularBonus();
    }
}
