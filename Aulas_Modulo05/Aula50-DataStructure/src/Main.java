import lists.CustomList;
import lists.SinglyLinkedList;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        /*
        //Array: estrutura de armazenamento de dados de um tipo em sequencia

        //Lista (encadeada simples): parecido com Array, mas é dinâmico. Cada elemento é acessado por um indice.
        //       Pode aumentar ou diminuir o tamanho conforme necessário.
        //[ArrayList] Lista encadeada = primeira posiçao aponta pra proxima (nav unidirecional)
        //[LinkedList] Lista duplamente encadeada = uma posicao aponta pro proximo e pro anterior (nav bidirecional)
        */

        //Em Java: interface LST

        CustomList lista = new CustomList();
        System.out.println("Lista: " + lista.toString());
        System.out.println("Tamanho da lista: " + lista.getSize());

        System.out.println("Adicionando elementos à lista:");
        lista.addElement(3);
        lista.addElement(5);
        lista.addElement(7);
        lista.addElement(9);
        lista.addElement(11);
        lista.addElement(13);
        lista.addElement(15);
        lista.addElement(17);
        lista.addElement(19);
        lista.addElement(21);
        lista.addElement(23);
        lista.addElement(25);

        System.out.println("Lista: " + lista.toString());
        System.out.println("Tamanho da lista: " + lista.getSize());
        System.out.println("Elemento na posição 5: "+ lista.getElement(5));

        System.out.println("Removendo o elemento de index 3:");
        lista.remove(3);

        System.out.println("Lista: " + lista.toString());
        System.out.println("Tamanho da lista: " + lista.getSize());
        System.out.println("Elemento na posição 5: "+ lista.getElement(5));

        /*
        System.out.println("Removendo o elemento de index 20:");
        try {
            lista.remove(20);
        }catch(Error e){
            System.out.println("Erro");
        }
    */
        // Pointers - Java não usa Pointers que manipulam a memória diretamente como o C++

        SinglyLinkedList singList = new SinglyLinkedList();

        singList.addNode(30);
        singList.addNode(10);
        singList.addNode(20);
        singList.addNode(50);
        singList.addNode(40);
        singList.addNode(60);


        System.out.println("Elemento do indice 0: " + singList.getHead(0));
        System.out.println("Elemento do indice 1: " + singList.getHead(1));
        System.out.println("Elemento do indice 2: " + singList.getHead(2));
        System.out.println("Elemento do indice 3: " + singList.getHead(3));
        System.out.println("Elemento do indice 4: " + singList.getHead(4));
        System.out.println("Elemento do indice 5: " + singList.getHead(5));

        System.out.println("Removendo elemento 0");
        singList.removeElement(0);
        System.out.println("Elemento do indice 0: " + singList.getHead(0));
        System.out.println("Elemento do indice 1: " + singList.getHead(1));
        System.out.println("Elemento do indice 2: " + singList.getHead(2));
        System.out.println("Elemento do indice 3: " + singList.getHead(3));
        System.out.println("Elemento do indice 4: " + singList.getHead(4));

        System.out.println("Removendo elemento 3");
        singList.removeElement(3);
        System.out.println("Elemento do indice 0: " + singList.getHead(0));
        System.out.println("Elemento do indice 1: " + singList.getHead(1));
        System.out.println("Elemento do indice 2: " + singList.getHead(2));
        System.out.println("Elemento do indice 3: " + singList.getHead(3));

        System.out.println("É vazio? " + singList.isEmpty());
        System.out.println("Tamanho da lista: " + singList.getSize());

    }
}