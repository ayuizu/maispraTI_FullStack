package Polimorfismo;

public interface IMeioTransporte {

    default String acelerar(){
        return "Acelearar";
    }
    default String frear(){
        return "Frear";
    }
}
