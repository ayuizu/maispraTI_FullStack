package Polimorfismo;

public class MeioTransporte implements IMeioTransporte{
    protected String modelo;

    //Metodos construtores
    public MeioTransporte(String modelo){
        this.modelo = modelo;
    }
    public MeioTransporte(){

    }
}
