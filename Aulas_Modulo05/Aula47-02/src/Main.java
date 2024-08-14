import java.util.Scanner;
import java.util.Locale;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);

        //Exercicio 1 - conversão de Celcius para Fahrenheit
        /*
        System.out.print("\nDigite uma tempertura em ºC: ");
        double temperaturaC = sc.nextDouble();
        double temperaturaF = (temperaturaC*1.8) +32;
        System.out.println(temperaturaC + "ºC é igual a " + temperaturaF + "ºF");
        */

        //Estruturas condicionais
        /*
        int idade = 17;
        System.out.println("\nSua idade é " + idade);
        if(idade>=18){
            System.out.println("Você é maior de idade");
        }else{
            System.out.println("Você é menor de idade");
        }
        */

        //Exercicio 2 - Par ou impar
        /*
        System.out.print("\nDigite um número inteiro: ");
        int number = sc.nextInt();
        if(number%2==0){
            System.out.println("O número é par");
        }else{
            System.out.println("O número é ímpar");
        }
        */

        //Exercicio 3 - Dia da semana
        /*
        System.out.print("\nDigite o dia da semana: ");
        int numSemana = sc.nextInt();
        switch(numSemana){
            case 1:
                System.out.println("Domingo");
                break;
            case 2:
                System.out.println("Segunda");
                break;
            case 3:
                System.out.println("Terça");
                break;
            case 4:
                System.out.println("Quarta");
                break;
            case 5:
                System.out.println("Quinta");
                break;
            case 6:
                System.out.println("Sexta");
                break;
            case 7:
                System.out.println("Sábado");
                break;
            default:
                System.out.println("Número inválido");

        }
        */

        //Exercício 4 - Ano Bissexto
        /*
        System.out.print("\nDigite um ano: ");
        int ano = sc.nextInt();
        if((ano%4==0 && ano%100!=0)||ano%400==0) {
            System.out.println("O ano é bissexto");
        }else{
            System.out.println("O ano não é bissexto");
        }
        */

        //Exercicio 4 - Calculadora
        /*
        System.out.println("\nCalculadora Java");
        int operacao;
        do {
            System.out.print("\n[1]Adição\n[2]Subtração\n[3]Multiplicação\n[4]Divisão\nEscolha uma operação [1,2,3,4]: ");
            operacao = sc.nextInt();
            if(operacao!=1 && operacao!=2 && operacao!=3 && operacao!=4){
                System.out.println("Operação inválida, digite novamente.");
            }
        }while(operacao!=1 && operacao!=2 && operacao!=3 && operacao!=4);
        System.out.print("\nDigite o 1º valor: ");
        double valor1 = sc.nextDouble();
        System.out.print("\nDigite o 2º valor: ");
        double valor2 = sc.nextDouble();
        switch(operacao){
            case 1:
                System.out.println("\nAdição: " + valor1 + " + " + valor2 + " = " + (valor1 + valor2));
                break;
            case 2:
                System.out.println("\nSubtração: " + valor1 + " - " + valor2 + " = " + (valor1 - valor2));
                break;
            case 3:
                System.out.println("\nMultiplicação: " + valor1 + " x " + valor2 + " = " + (valor1*valor2));
                break;
            case 4:
                if(valor2!=0)
                    System.out.println("\nDivisão: " + valor1 + " / " + valor2 + " = " + (valor1/valor2));
                else
                    System.out.println("\nNão é possível fazer uma divisão por 0.");
                break;
            default:
                System.out.println("\nValores inválidos.");
        }
        */

        //Exercicio 5 - Simule um login básico que permita somente três tentativas de login antes de bloquar o usuário
        /*
        int count = 0;
        boolean login = false;
        do {
            System.out.println("\n----Login----");
            System.out.print("\nLogin: ");
            String user = sc.nextLine();
            System.out.print("");
            System.out.print("Senha: ");
            String password = sc.nextLine();
            if(user.equals("admin") && password.equals("123456")){
                login = true;
                System.out.println("\nLogin realizado com sucesso!");
            }else{
                count+=1;
                System.out.println("\nUsuário ou senha inválidos. Voce tem mais " + (3-count) + " tentativa(s).");
            }
            if(count==3)
                System.out.println("\nVocê excedeu o limite de tentativas. Acesso bloqueado temporariamente.");
        }while(count<3 && !login);
        */
        //Estruturas de repetição: for e while
        // for(inicialização; condição; incremento){}
        // while(condicao){ (incremento/mudança cond) } < pode não ocorrer nenhuma vez
        // do{ (incremento/mudança cond) }while(condicao); < ocorre pelo menos uma vez

        //Manipulação de String
        /*
        String texto = "Java é melhor que aquela outra linguagem";
        System.out.println("String: " + texto);
        int comprimento = texto.length();
        System.out.println("Comprimento da String: " + comprimento);
        String maiusculas = texto.toUpperCase();
        System.out.println("Maiúscula: " + maiusculas);
        String minusculas = texto.toLowerCase();
        System.out.println("Minúscula: " + minusculas);
        boolean contem = texto.contains("java");
        System.out.println("Contem: " + contem);
        String substituto = texto.replace("Java","Python");
        System.out.println("Substituto: " + substituto);
        String substring = texto.substring(0,10);
        System.out.println("substring: " + substring);
        */

        //Manipulação numérica
        /*
        double num = 50.30;
        double arredProximo = Math.round(num);
        System.out.println("Arred proximo: " + arredProximo);
        double arredCima = Math.ceil(num);
        System.out.println("Arred cima: " + arredCima);
        double arredBaixo = Math.floor(num);
        System.out.println("Arred baixo: " + arredBaixo);

        double raizQuadrada = Math.sqrt(num);
        System.out.println("Raiz quadrada: " + raizQuadrada);

        double absoluto = Math.abs(num);
        System.out.println("Absoluto: " + absoluto);

        double aleatoria = Math.random();
        System.out.println("Aleatoria: " + aleatoria);
         */

        //Exercicio 6 - Fatorial
        /*
        System.out.print("Digite um número inteiro: ");
        int numb = sc.nextInt();
        int fatorial=1;
        for(int i = numb; i > 0; i--){
            fatorial=fatorial*i;
        }
        System.out.println("Fatorial: " + fatorial);
        */

        //Sequencia de Fibonacci
        System.out.println("Primeiros 15 números da Sequencia de Fibonacci:");
        int fibo1 = 1;
        int fibo2 = 1;
        String fibonacci = "";
        for(int i = 0; i<15; i++){
            fibonacci = fibonacci + " " + String.valueOf(fibo1) + " ";
            int fibo3=fibo1+fibo2;
            fibo1=fibo2;
            fibo2=fibo3;
        }
        System.out.println(fibonacci);


    }

}