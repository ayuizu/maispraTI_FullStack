package Polimorfismo;


public class Carro extends MeioTransporte implements IMeioTransporte{

    //Métodos construtores

    public Carro(String modelo){
        super(modelo);
    }

    //Métodos sobrescritos
    @Override
    public String toString() {
        return "Carro{modelo=" + this.modelo + '}';
    }

    @Override
    public String acelerar(){
        return "Carro{modelo=" + this.modelo + "} acelerando";
    }

    @Override
    public String frear(){
        return "Carro{modelo=" + this.modelo + "} freando";
    }

}
