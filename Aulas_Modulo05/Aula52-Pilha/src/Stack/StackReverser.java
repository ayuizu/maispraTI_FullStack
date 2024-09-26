package Stack;
import java.util.Stack;

public class StackReverser {
    public static String reverseString(String input){
        Stack<Character> stackEdu = new Stack<>();
        Stack<Character> stackRev = new Stack<>();
        //Adicionar cada caractere do String input numa Stack (stackEdu)
        for(char ch: input.toCharArray()){
            stackEdu.push(ch);
        }
        //Obter tamanho da stackEdu
        int length = stackEdu.size();
        //Para o tamanho do stackEdu, adicionar o que for removido de StackEdu em stackRev

        //stackRev vai ser o stackEdu revertido, mas como uma stack
        /*
        for(int i = 0; i < length; i++){
            stackRev.push(stackEdu.pop());
        }
        //Imprimir stackRev
        return stackRev.toString();*/

        //output vai ser o stackEdu revertido, mas como uma String
        String output =  "";
        for(int i=0; i<length; i++){
            output+=stackEdu.pop();
        }
        return output;
    }


    public static void main(String[] args) {

        System.out.println(reverseString("Adrianne"));
        System.out.println(reverseString("Ayumi"));



        //Reverter uma String
        Stack<Character> stack = new Stack<>();
        stack.push('A');
        stack.push('Y');
        stack.push('U');
        stack.push('M');
        stack.push('I');
        System.out.println(stack.toString());

        Stack<Character> stackReverse = new Stack<>();
        stackReverse.push(stack.pop());
        stackReverse.push(stack.pop());
        stackReverse.push(stack.pop());
        stackReverse.push(stack.pop());
        stackReverse.push(stack.pop());
        stack = stackReverse;
        System.out.println( stack.toString());




    }


}
