package queue;

public class SimpleQueue {
    private Node firts; //Primeiro da fila
    private Node last; //Último da fila

    //Construtor
    public SimpleQueue() {
        this.firts = null;
        this.last = null;
    }

    class Node{
        //Precisa de um ponteiro para o primeiro e para o último da fila
        int data;
        Node next;

        public Node(int data) {
            this.data=data;
            this.next=null;
        }
    }

    //Enfileirar (adicionar ao final)
    public void enqueue(int data) {
        Node newNode = new Node(data);

        //Sew a fila está vazia, o primeiro e último vão ser o novo nó (só vai ter 1 elemento)
        if(this.last==null){
            this.firts=newNode;
            this.last=newNode;
        }else{
            // Caso a fila não esteja vazia, o último vai ser o novo nó
            this.last.next = newNode; //atualiza referência do antigo último (10 aponta pra 11)
            this.last=newNode; //atualiza último para o novo nó (último igual a 11, quee aponta pra null)
        }
    }

    //Desenfilerar (remover o primeiro) (e exibir os dados do primeiro)
    public int dequeue() {
        //Se estiver vazio, lança exceção
        if(this.firts==null){
            throw new IllegalStateException("Queue is empty");
        }
        //"Tirar" o primeiro da fila, fazer o first apontar para o segundo
        int data = this.firts.data;
        this.firts = this.firts.next;
        //Se depois que tirar o primeiro a fila ficar fazia, last = null tbm
        if(this.firts==null){
            this.last=null;
        }
        //Funciona como um get
        return data;
    }
}
