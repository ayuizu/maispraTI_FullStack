import java.util.Locale;
import java.util.Scanner;
import util.Utilitarios; //Pacotes >> import pacote.arquivo;



//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Locale.setDefault(Locale.US);

        //Métodos
        /*[modificador] tipoRetorno nomeMetodo([parametros - tipo nome]){
                bloco de codigo
                return se necessario
        }
            [modificador] public, private, protected
            tipoRetorno void, String, int, etc
            parametros int Idade, String nome

         */

        Geometria triangulo = new Geometria();
        System.out.print("Área de um triângulo\nAltura: ");
        double altura = sc.nextDouble();
        System.out.print("Base: ");
        double base = sc.nextDouble();
        System.out.println("Area: " + triangulo.calcularAreaTriangulo(altura,base));

        ContaBancaria contaBancaria = new ContaBancaria(3000);
        contaBancaria.sacar(450);
        System.out.println("Saldo na conta: R$ " + contaBancaria.consultarSaldo());

        System.out.println("Multiplicação 10x10: " + Geometria.multiplicar(10,10));

        //Métodos estáticos: não trabalham sobre um objeto, mas sobre a classe

        /* Explicação DevMedia:
        Os métodos static ou métodos da classe são funções que não dependem de nenhuma variável de instância, quando invocados
        executam uma função sem a dependência do conteúdo de um objeto ou a execução da instância de uma classe, conseguindo chamar
        direto qualquer método da classe e também manipulando alguns campos da classe.

        Os métodos static tem um relacionamento com uma classe como um todo, enquanto os métodos que não são static são associados
        a uma instância de classe específica (objeto) e podem manipular as variáveis de instância do objeto.

        Não estático: área do triângulo, atua sobre um objeto
        Estático: multiplicar
        */

        System.out.println(triangulo.multiplicar(altura,base)); //Dá tbm, mas não precisa ser assim
        System.out.println(Geometria.multiplicar(altura,base));
        System.out.println(contaBancaria.consultarSaldo());

        //Pacotes
        //Organiza Classes e interfaces de Java

        Utilitarios.print("Olá, mundo!");

    }
}