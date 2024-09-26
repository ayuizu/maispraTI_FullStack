package lists;

public class SinglyLinkedList {
    // Cada elemento é armazenado em um nó que contém um valor e um ponteiro para o próximo nó na lista

    //Head: elemento com dado data e com ponteiro next que aponta para o proximo elemento
    private Node head;

    //Inner class - representa o nó
    //Classe estática - não pode acessar classes do método Outer
    /*Uma classe estática em Java é uma classe que não pode ser instanciada. Ou seja, não podemos criar objetos de uma
    classe estática. Só podemos acessar seus membros usando o próprio nome da classe. Em outras palavras,
    uma classe estática é uma classe que contém apenas membros estáticos*/
    private static class Node{
        //Dado dentro do elemento
        int data;
        //Ponteiro que aponta para proximo elemento da lista
        Node next;

        public Node(int data) {
            this.data = data;
            this.next = null;
            //Sempre que é instanciado, aponta para null
        }
    }

    //Construtor
    public SinglyLinkedList(){
        //No começo é vazia, não tem um elemento "cabeça"
        this.head = null;
    }

    //Obter tamanho da lista
    public int getSize(){
        int count = 0;
        Node current = this.head;

        while(current!=null){
            count++;
            current = current.next;
        }

        return count;
    }

    //Verificar se lista está vazia
    public boolean isEmpty(){
        return this.head == null;
    }

    //Adicionar nó
    public void addNode(int data){
        //Cria novo nó com dado data e ponteiro para null
        Node newNode = new Node(data);

        //Se o head da lista está vazio, head=nó; se não, percorrer lista até encontrar o último nó
        if(this.head == null){
            this.head = newNode;
        }else{
            //Se a lista ja tem um nó, cria nó current e atribui o head. Percorre todos até chegar ao último nó (que aponta pra null)
            //current = head
            //current.next = para onde aponta o current; enquanto não for null, atualiza o current até o final da lista
            Node current = this.head;
            while(current.next != null){
                current = current.next;
            }
            //Current = Nó 10 next é nulo (último da lista). Então fazemos com que o nó 10 aponte pro novo nó
            current.next=newNode;
        }
    }

    //Obter elemento
    public int getHead(int index){
        //Current = head atual (último nó)
        Node current = this.head;
        int count = 0;

        while(current!=null){
            if(count==index){
                return current.data;
            }
            count++;
            current = current.next;
        }

        throw new IndexOutOfBoundsException("Index fora dos limites/inválido");
    }

    //Remover elemento
    public void removeElement(int index){
        //Pega primeiro elemento da lista
        Node current = this.head;

        //Se head for null - erro - não tem elementos na lista
        if(this.head == null){
            throw new IndexOutOfBoundsException("Index fora dos limites/inválido");
        }

        //Se index = 0 (1º elemento):
        if(index==0){
            //Remover o primeiro elemento -> fazer com que minha head aponte pro próximo
            //Head = elemento 1, não mais o 0
            this.head = this.head.next;
            return;
        }

        //Percorrer lista até encontrar nó desejado
        int count = 0; //Acompanha posição do head
        Node previous = null; //Acompanha a posição do anterior
        //Se current não for o ultimo elemento (apontar pra null) e se contador for menor que o index
        while(current != null && count < index){
            //Nó anterior recebe current
            previous=current;
            //Current recebe o next
            current = current.next;
            count++;
        }
        if(current == null){
            throw new IndexOutOfBoundsException("Index fora dos limites/inválido");
        }

        //Anterior vai receber o corrent.next (vai ser null)
        previous.next = current.next;

        //O elemento não deixa de existir, só não é mais apontado
        //Garbage collector - conceito mais avançado

    }
}

