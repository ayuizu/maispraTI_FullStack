package Stack;

public class StackTest {

    public static void main(String[] args) {
        StackExemple stack = new StackExemple();
        stack.push(10);
        stack.push(100);
        stack.push(1000);
        stack.push(10000);

        System.out.println(stack);
        System.out.println("Elemento do topo: " + stack.peek());
        System.out.println("Elemento desempilhado: " + stack.pop());
        System.out.println("Novo elemento do topo: " + stack.peek());

        //Testando stackoverflow - não vai dar stackoverflow, vai estourar a memoria heap, não necessariamente a stack/pilha
        /*
        try{
            while(true){
                stack.push(1);
            }
        }catch(StackOverflowError error){
            System.out.println("Stack Overflow detectado" + error);
        }
        */


    }
}
