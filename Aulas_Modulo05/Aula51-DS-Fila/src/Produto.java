public class Produto {

    private String nome;
    private String categoria;
    private double preco;
    private double custo;
    private double peso;

    public Produto(){

    }
    public Produto(String nome, String categoria, double preco, double custo, double peso){
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
        this.custo = custo;
        this.peso = peso;
    }
    public String getNome() {
        return this.nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getCategoria() {
        return this.categoria;
    }
    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }
    public double getPreco() {
        return this.preco;
    }
    public void setPreco(double preco) {
        this.preco = preco;
    }
    public double getCusto() {
        return this.custo;
    }
    public void setCusto(double custo) {
        this.custo = custo;
    }
    public double getPeso() {
        return this.peso;
    }
    public void setPeso(double peso) {
        this.peso = peso;
    }
    public String toString(){
        return "Nome: " + this.nome + "\nCategoria: " + this.categoria + "\n";
    }

}
