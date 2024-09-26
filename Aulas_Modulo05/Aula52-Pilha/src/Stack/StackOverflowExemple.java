package Stack;

public class StackOverflowExemple {
    //Quando a pilha excede o tamanho
    //Pode acontecer um loop infinito

    public static void recursiveCall() {
        System.out.println("Chamando recursivamente");
        recursiveCall();
    }

    public static void main(String[] args) {
        try{
            recursiveCall();
        }catch(StackOverflowError error){
            System.out.println("Stack Overflow detectado" + error);
        }
    }
}
