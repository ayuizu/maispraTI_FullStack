package queue;
import java.util.LinkedList;
import java.util.Queue;
import java.util.PriorityQueue;

public class QueueExample {
    public static void main(String[] args){
        //AULA 52
        //Queue funciona como interface - tem métodos de Queue (é do tipo Queue) - MÉTODOS DEFINIDOS PELA QUEUE
        //Mas funciona como LinkedList, é implementado como LinkedList
        //
        Queue<Integer> queue = new LinkedList<>();

        //Queue<Integer> queuee = new Queue<>();
        //Queue é uma classe abstrata, não pode ser instanciada

        //Enfileirando
        queue.add(10);
        queue.add(30);
        queue.add(50);
        queue.add(70);
        queue.add(80);

        System.out.println("Fila: " + queue.toString());
        //Mostra primeiro elemento da fila
        System.out.println("Elemento da frente da fila: " + queue.peek());
        //Removendo primeiro elemento da fila
        System.out.println("Elemento removido: " + queue.poll());
        //Mostra novo primeiro elemento da fila
        System.out.println("Elemento da frente da fila após remover 1 elemento: " + queue.peek());
        System.out.println("Fila: " + queue.toString());


    }
}
