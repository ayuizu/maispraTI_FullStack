package Heranca;

public class Desenvolvedor extends Funcionario{
    //Atributos específicos
    protected double bonus;

    //Metodos construtores
    public Desenvolvedor(){
        this.bonus=10;
    }
    public Desenvolvedor(String nome, double salario){
        super(nome, salario);
        this.bonus=10;
    }

    //Metodos sobrescritos
    @Override
    public double calcularBonus(){
        return this.salario*this.bonus/100;
    }
    @Override
    public String trabalhar(){
        return "Desenvolvedor está trabalhando";
    }
    @Override
    public String toString(){
        return "Desenvolvedor\n" + super.toString() + "\nBônus (10%): R$ " + calcularBonus();
    }
}
