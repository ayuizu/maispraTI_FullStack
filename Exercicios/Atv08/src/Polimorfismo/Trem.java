package Polimorfismo;

public class Trem extends MeioTransporte implements IMeioTransporte{

    //Métodos construtores

    public Trem(String modelo){
        super(modelo);
    }

    //Métodos sobrescritos
    @Override
    public String toString() {
        return "Trem{modelo=" + this.modelo + '}';
    }

    @Override
    public String acelerar(){
        return "Trem{modelo=" + this.modelo + "} acelerando";
    }

    @Override
    public String frear(){
        return "Trem{modelo=" + this.modelo + "} freando";
    }
}
