import java.util.ArrayList;

public class Catalogo {
    private int pagina;
    private ArrayList<Produto> produtos;

    public Catalogo(){
        this.pagina = 0;
    }

    public Catalogo(int pagina){
        this.pagina = pagina;
    }

    public Catalogo(int pagina, ArrayList<Produto> produtos){
        this.pagina = pagina;
        this.produtos = produtos;
    }

    public int getPagina() {
        return this.pagina;
    }
    public void setPagina(int pagina) {
        this.pagina = pagina;
    }
    public ArrayList<Produto> getProdutos() {
        return this.produtos;
    }
    public void setProdutos(ArrayList<Produto> produtos) {
        this.produtos = produtos;
    }

    public String toString(){
        String texto = "";
        for(int i=0; i<this.produtos.size(); i++){
            texto+=this.produtos.get(i).toString()+"\n";
        }
        return texto;
    }

}
