import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        byte byteVar = 127;
        short shortVar = 32000;
        int intVar = 2100000;
        long longVar = 2125454545454545L;

        float floatVar = 3.14F;
        double doubleVar = 3.14159265;

        boolean boolVar = true;

        char charVar = 'A';

        String stringVar = "Hello World";

        System.out.println("Hello World pula linha");

        System.out.println("Byte:"+ byteVar);
        System.out.println("Short:"+ shortVar);
        System.out.println("Int:"+ intVar);
        System.out.println("Long:"+ longVar);
        System.out.println("Float:"+ floatVar);
        System.out.println("Double:"+ doubleVar);
        System.out.println("Bool:"+ boolVar);
        System.out.println("Char:"+ charVar);
        System.out.println("String:"+ stringVar);

        float floatVar2 = 3.141565F;
        System.out.printf("Float: %.2f\n", floatVar2);

        //Padrão US para números p.ex.
        Locale.setDefault(Locale.US);
        System.out.printf("Float: %.2f\n", floatVar2);

        int a;
        int b;
        int c;
        double area;

        a=5;
        b=7;
        c=3;

        area=(double)(a+b)/2*c;

        System.out.printf("Area: %.2f\n", area);

        //Entrada de dados
        Scanner sc = new Scanner(System.in);
        System.out.print("\nNome: ");
        String name = sc.next();
        System.out.print("Idade: ");
        int idade = sc.nextInt();
        System.out.print("Altura: ");
        double altura = sc.nextDouble();
        System.out.print("Gênero: ");
        char character = sc.next().charAt(0);
        //Só o primeiro char

        System.out.println("\nNome: " + name);
        System.out.println("Idade: " + idade);
        System.out.println("Altura: "+ altura);
        System.out.println("Character: "+ character);

        //nextLine() pega frase
        //Tem o problema de colocar um 'enter', não lembro qual next é
    }
}