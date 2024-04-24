//*Aula 07 - 17/04/2024*//

//*----------------------Array ou Vetor------------------------------*/
//Declarar variavel = alocar 01 posição de espaço na memoria
//Declarar vetor = alocar um espaço da memoria para varios valores, sob um nome de "variável"
//Array em JS é um objeto. Precisa ser instanciado

//!FUNÇÃO DE CALLBACK - o que é

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

//?Arrays multidimensionais
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

//?Inserção de elementos no final da array
lista_coisas['Frutas'].push('Banana');
console.log(lista_coisas);
/*Inserção de elementos no inicio da array*/
lista_coisas['Frutas'].unshift('Laranja');
console.log(lista_coisas);
//Isso altera a posição de todos os itens
lista_coisas['Frutas'][2]='Trocado';
console.log(lista_coisas);

//?Exclusão de elemento final do Array
lista_coisas['Frutas'].pop();
console.log(lista_coisas);

//?Exclusão de elemento inicio do Array
lista_coisas['Frutas'].shift();
console.log(lista_coisas);


//?Encontrar um elemento no Array
// let listaProdutos = Array("Lousa", "Computador", "Caneta", "Chuteira");
// let aux = listaProdutos.indexOf("Chuteira"); //devolve posição do elemento = 3

// if (aux == -1) {
// console.log("Elemento não existe no Array");
// } else {
// console.log("Elemento existe e está na posição " + aux);
// }

//Ordenação
// console.log(listaProdutos.sort()); //ordena alfabeticamente [ 'Caneta', 'Chuteira', 'Computador', 'Lousa' ]

// let listaNum = Array(1, 3, 4, 2, 10); //tbm ordena alfabeticamente [1,10,2,3,4]
// console.log(listaNum.sort());

//*-----------------Funções--------------------*//
//Para não repetir várias vezes o mesmo cod, criar função
//Declarando função:
//Esses parametros não necessariamente sao fixos no JS -- se declarar mais parametros ou n declarar numero, interpreta igual
// function calcularAreaTerreno(largura, comprimento) {
// let area = largura * comprimento; //!escopo de função
// return area;
// }
// //!area não é acessivel aqui
// let prompt = require("prompt-sync")();
// let lg = prompt("Digite a largura do terreno em metros: ");
// let cp = prompt("Digite o comprimento do terreno em metros: ");

// //Chamada função e passagem de parametros
// let resultado = calcularAreaTerreno(lg, cp);
// console.log("O terreno possui " + resultado + " metros quadrados.");

//*Escopo: onde variavel pode ser acessada

//*Global - permite que variavel seja acessada em qqr parte do cod
// let variavelGlobal;
// let x = 5;

//*Função - aprenas dentro da função
// function variavelFunc(var1, var2) {
// let variavelFuncao = var1 + var2; //Funcao
// return variavelFuncao;
// }
//VariavelFuncao não é eacessivel aqui

//*Bloco - variaveis dentro de blocos como if, for, while
// if (variavelGlobal > 0) {
// let maior = true; //Bloco
// if (maior) {
//     console.log("OK");
// }
// }
//Variavel maior não é acessivel aqui

//*Função anonima: sem nome
//Usado para função de callback
// let exibirFuncao = function () {
// //variavel em JS pode armazenar funções tbm - wraper, enveopando função numa variavel
// console.log("Está é uma função anonima");
// };

// exibirFuncao();

//*Callback é uma função que desenvolvo já com intuito de passar ela pra outra função como parâmetro
//*Uma função que é passada como parâmetro para outra função é uma função de callback
//*Callback garante que uma função não seja executada antes que uma dada tarefa seja concluida

function exibirFuncao(callbackSucesso, callbackErro) {
  if (true) {
    callbackSucesso("Funções de callback em caso de sucesso");
  } else {
    callbackErro("Função de callBack em caso de erro");
  }
}

let callbackSucesso = function (titulo) {
  console.log(titulo);
};

let callbackErro = function (erro) {
  console.log(erro);
};

exibirFuncao(callbackSucesso, callbackErro); //Função exibirFuncao com parametros callbackSucesso e callbackErro

let mensagem = function () {
  console.log("Essa mensagem é exibida depois de 3 segundos");
};
setTimeout(mensagem, 3000); //faz a função acima aparecer após 3s (3000ms)

//Ou

setTimeout(function () {
  console.log("Essa msg é exibida após 2s");
}, 2000); //inclusive é exibida antes da mensagem de 3s

let soma = function (num1, num2) {
  return num1 + num2;
};
let subtracao = function (num1, num2) {
  return num1 - num2;
};
let multiplicacao = function (num1, num2) {
  return num1 * num2;
};
let divisao = function (num1, num2) {
  return num1 / num2;
};

function calculadora(
  operadora,
  num1,
  num2,
  soma,
  subtracao,
  multiplicacao,
  divisao
) {
  switch (operaca) {
    case "soma":
      soma(num1, num2);
      break;
  }
}

calculadora("soma", 10, 10, soma); //escreve operação, num1, num2 e a função soma
