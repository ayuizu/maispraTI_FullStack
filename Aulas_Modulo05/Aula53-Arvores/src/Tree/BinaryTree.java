package Tree;

class Node{
    //Tem dois child (left e right)
    int value;
    Node left;
    Node right;

    public Node(int value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
public class BinaryTree {
    //Primeiro nó é o root
    Node root;

    public BinaryTree(){
        this.root=null;
    }

    //Adicionar nó em árvore - forma recursiva (método chama ele mesmo)
    public void add(int value){
        //Primeir é a raiz
        this.root = addRecursive(this.root, value);
    }

    //Add recursivo - analisa nó a nó do root até encontrar uma posição pro valor novo
    private Node addRecursive(Node current, int value){
        //Se atual for nulo, insere um nó
        if(current == null){
            System.out.println("Inserindo nó " + value);
            return new Node(value);
        }
        //Adiciona maior valor à direita, menor valor à esquerda do nó atual-- manter alguma ordem lógica
        if(value < current.value){
            current.left = addRecursive(current.left, value);
            System.out.println("Valor " + value + " é menor que " + current.value + " - Add esquerda");
        }else if(value > current.value) {
            current.right = addRecursive(current.right, value);
            System.out.println("Valor " + value + " é maior que " + current.value + " - Add direita");
        }
        return current;
    }

    //Percorrer árvore de forma ordenada
    public void orderedPrint(Node current){
        //Primeiro verificar se árvore existe
        if(current!=null){
            orderedPrint(current.left);
            System.out.println(current.value);
            orderedPrint(current.right);
        }
    }

    //Remover nó da árvore
    public void remove(int value){
        this.root=removeRecursive(this.root,value);
    }
    public Node removeRecursive(Node current, int value){
        //Se for vazio, não remove nada
        if(current == null){
            return null;
        }
        //Verificar se valor a ser removido é maior ou menor que o nó atual
        if(value < current.value){
            current.left = removeRecursive(current.left, value);
        }else if(value > current.value){
            current.right = removeRecursive(current.right, value);
        }else{
            //Se encontrar valor, verificar se o nó tem filhos
            if(current.left == null && current.right == null){
                return null; // Sem  filhos - pai aponta pra nulo
            }else if(current.left == null){
                return current.right; // 1 filho - pai deixa de apontar pro procurado e aponta pro filho, "pula" procurado
            }else if(current.right == null){
                return current.left; // 1 filho - pai deixa de apontar pro procurado e aponta pro filho, "pula" procurado
            }else { //2 filhos
                //Pega menor dos filhos
                int smallestValue = findSmallestValue(current.right);
                //Nó procurado é substitudo pelo menor filho
                current.value=smallestValue;
                //Maior filho passa pela recursividade compradando com valor menor -- remove filho menor
                current.right = removeRecursive(current.right, smallestValue);
            }
        }
        return current;
    }
    //Encontrar o menor valor
    private int findSmallestValue(Node root){
        return root.left == null ? root.value : findSmallestValue(root.left);
    }

    //Binary Search Tree - pesquisar depois

    public static void main(String[] args){
        BinaryTree tree = new BinaryTree();
        tree.add(10);
        tree.add(11);
        tree.add(9);
        tree.add(8);
        tree.add(20);
        tree.add(15);
        tree.add(22);

        System.out.println("Printando árvore");
        tree.orderedPrint(tree.root);

        System.out.println("Removendo 22");
        tree.remove(22);
        tree.orderedPrint(tree.root);
        System.out.println("Removendo 11");
        tree.remove(11);
        tree.orderedPrint(tree.root);
    }
}

