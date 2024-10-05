package Polimorfismo;

public class Bicicleta extends MeioTransporte implements IMeioTransporte{

    //Métodos construtores

    public Bicicleta(String modelo){
        super(modelo);
    }

    //Métodos sobrescritos
    @Override
    public String toString() {
        return "Bicicleta{modelo=" + this.modelo + '}';
    }

    @Override
    public String acelerar(){
        return "Bicicleta{modelo=" + this.modelo + "} acelerando";
    }

    @Override
    public String frear(){
        return "Bicicleta{modelo=" + this.modelo + "} freando";
    }
}
