package encapsulationII;

//Aula 56 - Encapsulamento

//SEALEAD CLASSES e PERMITS - classe só vai permitir ser extendida para classes indicadas -- PERMITS

public abstract sealed class Shape permits Circle, Rectangle{
    //Classe abstrata: generalista, não pode ser instanciada
    public abstract double area();

    public abstract double perimeter();

    public static void main(String[] args){
        Shape circle = new Circle(5.00);
        System.out.println("Área do círculo: " + circle.area());
        System.out.println("Perímetro do círculo: " + circle.perimeter());

        Shape rectangle = new Rectangle(4.00,5.00);
        System.out.println("Área do retângulo: " + rectangle.area());
        System.out.println("Perímetro do retângulo: " + rectangle.perimeter());

        Point pointOne = new Point(3,5);
        System.out.println(pointOne);
        Point pointTwo = new Point(1,2);
        System.out.println(pointTwo);
        System.out.println("X = " + pointTwo.x() + ", Y = " + pointTwo.y());

    }

}



