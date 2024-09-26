package util;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class DataHora {


    //A nível de teste dá para ter um main em cada arquivo
    public static void main(String[] args) {
        //Parametro = array de String de nome args. Main é um metodo padrão, que espera argumentos
        if(args.length>0){
            System.out.println("Argumentos: ");
            for(String arg:args){
                System.out.println(arg);
            }
        }else{
            System.out.println("Nenhum arguemnto fornecido");
        }

        if(args.length<2){
            System.out.println("Forneça dois argumentos: ");
            return;
        }
        try{
            int arg1 =Integer.parseInt(args[0]);
            int arg2 =Integer.parseInt(args[1]);

            int soma = arg1+arg2;
            System.out.println("A soma dos argumentos é " + soma);
        }catch(NumberFormatException e){
            System.out.println("Por favor, forneça números validos");

        }


        LocalDate hoje = LocalDate.now();
        System.out.println(hoje);

        DateTimeFormatter formatters = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        String text = hoje.format(formatters);
        LocalDate parsedDate = LocalDate.parse(text, formatters);

        System.out.println("date: " + hoje);
        System.out.println("Text format " + text);
        System.out.println("parsedDate: " + parsedDate.format(formatters));

        System.out.println(parsedDate);
    }
}
