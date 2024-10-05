import Encapsulamento.Produto;
import Heranca.Funcionario;
import Heranca.Gerente;
import Heranca.Desenvolvedor;
import Polimorfismo.Carro;
import Polimorfismo.MeioTransporte;
import Polimorfismo.Bicicleta;
import Polimorfismo.Trem;

import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        System.out.println("-----Atividade 08 - Programação Orientada a Objetos-----");
        int op;
        boolean input;
        do{
            op=0;
            input=true;
            System.out.println("\n-----Menu Principal-----\n1-Encapsulamento\n2-Heranca\n3-Polimorfismo\n4-Abstração\n9-Sair");
            while(input) {
                System.out.print("\nDigite uma opção: ");
                String line = sc.nextLine();
                try{
                    op=Integer.parseInt(line);
                }catch(NumberFormatException e) {
                    System.err.println("Digite um número inteiro válido:" + e.getMessage());
                    continue;
                }
                if((op>0 && op<5) || op==9) input = false;
                else System.err.println("Opção inválida. Tente novamente.");
            }
            switch (op) {
                case 1:
                    System.out.println("-----Encapsulamento - Exercícios 1 e 2-----\nCadastro de produto\n");
                    Produto produto = new Produto();
                    System.out.print("Digite o nome do produto: ");
                    produto.setNome(sc.nextLine());
                    System.out.print("Digite o quantidade do produto: ");
                    produto.setQuantidade(sc.nextInt());
                    System.out.print("Digite o valor da produto: ");
                    produto.setPreco(sc.nextDouble());
                    System.out.println("---Produto cadastrado---\n " + produto.toString());
                    System.out.println("O produto possui desconto? Caso sim, digite a porcentagem aplicada (%). Caso não, digite 0");
                    double desconto = sc.nextDouble();
                    System.out.println("Preço com desconto: R$ " + produto.aplicarDesconto(desconto));
                    break;
                case 2:
                    System.out.println("-----Herança - Exercícios 3 e 4-----");
                    System.out.println("Funcionários\n1-Cadastrar funcionario;\n2-Cadastrar desenvolvedor\n3-Cadastrar gerente\n9-Sair");
                    int op2 = 0;
                    boolean input2 = true;
                    while(input2) {
                        System.out.print("\nDigite uma opção: ");
                        String line2 = sc.nextLine();
                        try {
                            op2 = Integer.parseInt(line2);
                        } catch (NumberFormatException e) {
                            System.err.println("Digite um número inteiro: " + e.getMessage());
                            continue;
                        }
                        if ((op2 > 0 && op2 < 4) || op2 == 9) input2 = false;
                        else System.err.println("Opção inválida. Tente novamente.");
                    }
                    switch(op2){
                        case 1:
                            Funcionario func1 = new Funcionario();
                            System.out.print("Digite o nome do Funcionario: ");
                            func1.setNome(sc.next());
                            System.out.print("Digite o salário do Funcionario: ");
                            func1.setSalario(sc.nextDouble());
                            System.out.println("---Funcionário cadastrado---\n" + func1.toString());
                            break;
                        case 2:
                            Desenvolvedor dev = new Desenvolvedor();
                            System.out.print("Digite o nome do desenvolvedor: ");
                            dev.setNome(sc.next());
                            System.out.print("Digite o salário do desenvolvedor: ");
                            dev.setSalario(sc.nextDouble());
                            System.out.println("---Funcionário cadastrado---\n" + dev.toString());
                            System.out.println(dev.trabalhar());
                            break;
                        case 3:
                            Gerente gerente = new Gerente();
                            System.out.print("Digite o nome do gerente: ");
                            gerente.setNome(sc.next());
                            System.out.print("Digite o salário do gerente: ");
                            gerente.setSalario(sc.nextDouble());
                            System.out.println("---Funcionário cadastrado---\n" + gerente.toString());
                            System.out.println(gerente.trabalhar());
                            break;
                        case 9:
                            System.out.println("Voltando ao menu principal");
                            break;
                        default:
                            break;
                    }
                    break;
                case 3:
                    System.out.println("-----Polimorfismo - Exercícios 5 e 6-----");
                    System.out.println("\nMeios de Transporte");
                    MeioTransporte[] meioTransp = new MeioTransporte[3];
                    System.out.println("\n1-Cadastrar carro");
                    System.out.print("Digite o modelo do carro: ");
                    Carro carro = new Carro(sc.nextLine());
                    meioTransp[0] = carro;
                    System.out.println("\n2-Cadastrar bicicleta");
                    System.out.print("Digite o modelo da bicicleta: ");
                    Bicicleta bici = new Bicicleta(sc.nextLine());
                    meioTransp[1] = bici;
                    System.out.println("\n3-Cadastrar trem");
                    System.out.print("Digite o modelo do trem: ");
                    Trem trem = new Trem(sc.nextLine());
                    meioTransp[2] = trem;
                    System.out.println("\n4-Movimentar");
                    for(int i=0; i<meioTransp.length; i++) {
                        System.out.println(meioTransp[i].acelerar());
                    }
                    for(int i=0; i<meioTransp.length; i++) {
                        System.out.println(meioTransp[i].frear());
                    }

                    break;
                case 4:
                    System.out.println("-----Abstração - Exercícios 7 e 8-----");
                    break;
                case 9:
                    System.out.println("Volte sempre!");
                default:
                    break;


            }
        }while(op!=9);
    }
}