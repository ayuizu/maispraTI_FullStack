import queue.SimpleQueue;

import java.util.ArrayList;
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {

        //----------------------LISTAS (cont)------------------------

        //Array - tamanho fixo e tipado, acesso rápido via index
        //Lista - tamanho dinâmico, acesso rápido aos elementos via index
        ArrayList<Integer> list = new ArrayList<>();

        list.add(89);
        list.add(91);
        list.add(86);
        list.add(79);
        System.out.println(list);
        System.out.println("Elemento 0: " + list.get(0));
        System.out.println("Removendo elemento 1: " + list.remove(1));
        System.out.println("Tamanho da lista: " + list.size());
        System.out.println(list);

        //Lista Simplesmente Encadeada - acessar elementos, melhor pra buscar índice (que dupla)
        //Lista Duplamente Encadeada - acessar elementos, mas se precisar adicionar e remover elementos no meio, é melhor que a simples
        LinkedList<Integer> linkedList = new LinkedList<>();

        linkedList.add(89);
        linkedList.add(91);
        linkedList.add(86);
        linkedList.add(79);
        System.out.println(linkedList);
        System.out.println("Elemento 0: " + linkedList.get(0));
        System.out.println("Removendo elemento 1: " + linkedList.remove(1));
        System.out.println("Tamanho da lista: " + linkedList.size());

        /*
        Imagine que o aplicativo precisa exibir uma lista de produtos em uma página de catálogo.
        O ArrayList pode ser usado para armazenar esses produtos, pois o acesso aos detalhes do produto por índice (para exibição na página) é muito rápido.
         */

        //Se colocar ArrayList produtos = new ArrayList<> funciona tbm >> mas pode dar erro em tempo real. perde segurança
        ArrayList<String> produtos = new ArrayList<>();
        produtos.add("Maçã");
        produtos.add("Banana");
        produtos.add("Laranja");
        produtos.add("Bergamota");
        produtos.add("Manga");
        produtos.add("Uva");
        System.out.println(produtos);
        System.out.println("Elemento 0: " + produtos.get(0));
        System.out.println("Removendo elemento 1: " + produtos.remove(1));
        System.out.println("Tamanho da lista: " + produtos.size());
        System.out.println(produtos);

        //Usando o tipo Produto
        /*
        class Produto{


        }
        LinkedList<Produto> produtoObj= new LinkedList<>();
        */

        //Usando herança -- qualquer classe que seja herdeira de Produto
        /*
        class Fruta extends Produto{

        }
        class Leguminosa extends Produto{

        }
        LinkedList<? extends Produto> produtoExt = new LinkedList<>();
        */

        ArrayList<Produto> produtoArrayList = new ArrayList<>();
        Produto banana = new Produto("Banana","Fruta", 5.90, 2.50, 0.1);
        Produto laranja = new Produto("Laranja","Fruta", 8.90, 5.50, 0.2);
        Produto manga = new Produto("Manana","Fruta", 6.90, 4.50, 0.3);
        Produto feijao = new Produto("Feijao","Leguminosa", 4.90, 2.50, 1.0);
        produtoArrayList.add(banana);
        produtoArrayList.add(laranja);
        produtoArrayList.add(manga);
        produtoArrayList.add(feijao);

        Catalogo catalogo = new Catalogo(0,produtoArrayList);
        System.out.println(catalogo.toString());


        //----------------------FILAS------------------------
        //Fila Simples: remoções no início, inserções no fim
        //Fila Circular: ultimo elemento é conectado ao primeiro; reutiliza o Array
        //Fila Dupla: add ou rmv inicio ou fim
        //Filas com prioridade: add ou rmv de acordo com prioridade

        /*Imagine um sistema de atendimento ao cliente onde temos uma lista de clientes aguardando para serem atendidos.
         Cada cliente é adicionado à lista e, em seguida, é atendido na ordem em que chegou (fila).*/

        //Lista de clientes
        ArrayList<Cliente> listaClientes = new ArrayList<>();

        //Fila de atendimento
        SimpleQueue simpleQueue = new SimpleQueue();

        Cliente c1 = new Cliente(1,"Pedro",5);
        Cliente c2 = new Cliente(2,"Amanda",3);
        Cliente c3 = new Cliente(3,"Luiza",4);
        Cliente c4 = new Cliente(4,"Ricardo",2);
        Cliente c5 = new Cliente(5,"Celso",5);

        listaClientes.add(c1);
        listaClientes.add(c2);


    }
}