package lists;

import java.util.Arrays;

public class CustomList {
    //Atributos
    private int[] elements;
    private int size;

    //Construtor
    public CustomList() {
        elements = new int[10];
        size=0;
    }
    /*
    public CustomList(int size) {
        this.size = size;
        elements = new int[size];
    }
    */

    public int getSize(){
        return this.size;
    }

    //Adicionar elemento à lista
    public void addElement(int element){
         //Verificar se lista tá cheia - se estiver, aumentar o tamanho da lista
        if(this.size==this.elements.length){
            this.resize();
        }
        //elements na posição size vai receber element, e incrementa +1 após isso
        // ++i diferente de i++
        this.elements[size++]=element;
    }
    //Aumentar tamanho da lista
    private void resize(){
        int[] newElements = new int[this.elements.length*2];
        for(int i = 0; i<this.elements.length ; i++){
            newElements[i] = this.elements[i];
        }
        this.elements=newElements;
    }

    //Obter elemento através do index
    public int getElement(int index){
        if(index>=this.size || index<0)
                throw new IndexOutOfBoundsException("Index inválido, fora dos limites.");
        return this.elements[index];
    }

    public void remove(int index){
        if(index>=this.size || index<0)
            throw new IndexOutOfBoundsException("Index inválido, fora dos limites.");
        //Remover um elemento: deslocar demais elementos para esquerda
        for(int i = index; i<this.size-1; i++){
            this.elements[i]=this.elements[i+1];
        }
        //Reduzir tamanho da lista
        this.size--;
    }
    /*
    @Override
    public String toString(){
        return Arrays.toString(Arrays.copyOfRange(this.elements,0,this.size));
    }
    */

    public String toString(){
        String str="";
        for(int i = 0; i<this.size; i++){
            str+=this.elements[i]+" ";
        }
        return str;
    }
}
