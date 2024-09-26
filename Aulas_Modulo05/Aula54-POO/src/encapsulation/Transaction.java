package encapsulation;

//Aula 56 - Encapsulamento

//INTERFACES

public interface Transaction {
    //O que aparece
    void execute();
    String getDetails();

    //Metodo default - padrão para todos os filhos, sem necessidade de alterar as classes que herdam a intarface
    /*Motivação: adicionar novas funcionalidades às interfaces existentes sem quebrar o código que faz uso delas*/
    /*Nas versões anteriores do Java, ao adicionar um novo metodo numa interface, somos obrigados a alterar todas as classes que herdam dessa interface*/
    default void testeDefault(){
        System.out.println("Teste");
    }
    //Metodo static - consegue chamar direto na interface, sem necessidade de instanciação
    static void testeStatic(){
        System.out.println("Teste2");
    }
}
