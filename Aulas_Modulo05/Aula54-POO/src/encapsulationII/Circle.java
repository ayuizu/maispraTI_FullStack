package encapsulationII;

//Aula 56 - Encapsulamento

//SEALEAD CLASSES e PERMITS - CIRCLE TEM PERMISSÃO PARA EXTENDER SHAPE

public final class Circle extends Shape{
    public final double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double area() {
        return Math.PI*radius*radius;
    }

    @Override
    public double perimeter() {
        return 2*Math.PI*radius;
    }
}