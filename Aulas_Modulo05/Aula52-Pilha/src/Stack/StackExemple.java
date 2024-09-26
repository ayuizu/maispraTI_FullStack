package Stack;

import java.util.EmptyStackException;

class Node{
    int data;
    Node next;

    public Node(int data) {
        this.data=data;
        this.next=null;
    }
}
public class StackExemple{
    //Pilhas: o último a ser adicionado é o primeiro a ser removido, como uma pilha de pratos
    //Sem colection
    //Com colection

    //Referencia numa pilha: no topo

    /*Pilha
    [n1] topo - valor 5 - next = null

    [n2] topo - valor 10 - next = n1
    [n1] valor 5 - next = null

    [n3] topo - valor 15 - next = n2
    [n2] valor 10 - next = n1
    [n1] valor 5 - next = null

    //Elementos novos entram sempre no topo, e o primeiro a sair tbm é o topo
    //Next sempre aponta pra baixo
    //Primeiro elemento sempre aponta pra null (tem nada embaixo)
     */

    private Node top;

    public StackExemple(){
        //Inicialmente o next é null
        this.top=null;
    }

    //Adicionar elemento
    public void push(int data){
        Node newNode=new Node(data);
        //Aqui o next vai receber o nó anterior
        newNode.next=this.top;
        //Depois meu topo é o new node
        this.top=newNode;
    }

    //Está vazio?
    public boolean isEmpty(){
        return this.top==null;
    }

    //Remover elemento (e dizer qual foi removido)
    public int pop(){
        if(isEmpty()){
            throw new RuntimeException("Stack is Empty");
        }
        int poppedData = this.top.data;
        this.top = this.top.next;

        return poppedData;
    }

    public int peek(){
        if(isEmpty()){
            throw new RuntimeException("Stack is Empty");
        }
        return this.top.data;
    }
    /*
    @Override

    public void toString(){

    }*/


    public static void main(String[] args) {
        StackExemple s=new StackExemple();
        s.push(1);
        s.push(2);
        s.push(3);
        s.push(4);
        System.out.println(s.toString());
        System.out.println("Elemento desemplilhado: " + s.pop());
        System.out.println(s.toString());
        System.out.println("Top: " + s.top);




    }
}
