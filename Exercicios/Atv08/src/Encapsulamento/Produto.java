package Encapsulamento;

public class Produto {
    private String nome;
    private double preco;
    private int quantidade;

    //Metodos construtores
    public Produto(){

    }
    public Produto(String nome, double preco, int quantidade) {
        this.nome = nome;
        setPreco(preco);
        setQuantidade(quantidade);
    }

    //Metodos de acesso
    public String getNome() {
        return this.nome;
    }
    public double getPreco() {
        return this.preco;
    }
    public int getQuantidade() {
        return this.quantidade;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public void setPreco(double preco){
        if(preco>=0){
            this.preco = preco;
        }else{
            this.preco = 0;
            System.out.println("Preço inválido. Preço definido como R$ 0,00");
        }
    }
    public void setQuantidade(int quantidade)  {
        if(quantidade>=0){
            this.quantidade = quantidade;
        }else{
            this.quantidade=0;
            System.out.println("Quantidade inválida. Quantidade definida como 0");
        }
    }

    //Metodo para imrpessao
    @Override
    public String toString(){
        return "Produto: " + this.nome + "\nPreço: R$ " + this.preco + "\nQuantidade: " + this.quantidade;
    }

    //Outros métodos
    public double aplicarDesconto(double porcentagem) throws Exception {
        if(porcentagem>=0 && porcentagem<=50){
            return this.preco*(100-porcentagem)/100;
        }else{
            throw new Exception("Desconto inválido. Deve ser entre 0 e 50%");
        }
    }

}
