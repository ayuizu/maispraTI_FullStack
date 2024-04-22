/*Array ou Vetor*/
//Declarar variavel = alocar 01 posição de espaço na memoria
//Declarar vetor = alocar um espaço da memoria para varios valores, sob um nome de "variável"
//Array em JS é um objeto. Precisa ser instanciado

//FUNÇÃO DE CALLBACK - o que é

//Para criar uma lista de compras, teria que declarar 50 variáveis, ou criar um array
let listaCompras = Array(); //Array com primeira letra maiuscula
/*Colocando valores no array*/
//Posição a posição
listaCompras[0]="Shampoo";
listaCompras[1]="Condicionador";
listaCompras[2]=100;
listaCompras[3]="Chocolate";
//Se pular um item ele aparece como <1 empty item>
listaCompras['x']=100;
console.log(listaCompras);
//Ou criamos já com [valores]
let listaFrutas=['Banana','Morango'];
console.log(listaFrutas);
listaFrutas[2]='Laranja'; //Adiciona um item
console.log(listaFrutas);
listaFrutas[0]="Abacate"; //Altera um item
console.log(listaFrutas);
//Ou criamos com Array(valores)
let listaViagem=Array('Passagens','Malas');
console.log(listaViagem);

/*Arrays multidimensionais*/
//Uma posição num array pode ter outra array (e pode acontecer infinitamente) como se fosse uma matriz

let lista_coisas=Array();
//Precisa declarar a segunda array
lista_coisas['Frutas']=Array();
lista_coisas['Frutas'][0]='Morango';
lista_coisas['Frutas'][1]='Banana';
lista_coisas['Frutas'][2]='Morango';
lista_coisas['Frutas'][2]='Uva';
//Precisa declarar a segunda array
lista_coisas['Viagem']=Array();
lista_coisas['Viagem'][0]="Passagens";
lista_coisas['Viagem'][1]="Malas";
console.log(lista_coisas);
//Ou
// lista_coisas[0]=Array();
// lista_coisas[0][0]="Morango";

/*Inserção de elementos no final da array*/
lista_coisas['Frutas'].push('Banana');
console.log(lista_coisas);
/*Inserção de elementos no inicio da array*/
lista_coisas['Frutas'].unshift('Laranja');
console.log(lista_coisas);
//Isso altera a posição de todos os itens
lista_coisas['Frutas'][2]='Trocado';
console.log(lista_coisas);

/*Exclusão de elemento final do Array*/
lista_coisas['Frutas'].pop();
console.log(lista_coisas);

/*Exclusão de elemento inicio do Array*/
lista_coisas['Frutas'].shift();
console.log(lista_coisas);
//PAREI VIDEO EM 49:19