package encapsulationII;

//Aula 56 - Encapsulamento

//SEALEAD CLASSES e PERMITS - RECTANGLE TEM PERMISSÃO PARA EXTENDER SHAPE

public final class Rectangle extends Shape{
    private final double width, height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    @Override
    public double area() {
        return width*height;
    }

    @Override
    public double perimeter() {
        return 2*(width+height);
    }
}
