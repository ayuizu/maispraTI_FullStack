//Aula 08 - a partir de 1h05

//*Exercício com matrizes

//*Exercício 01 - Somar todos os elementos de uma matriz

let matriz1 = Array();
matriz1[0]=[1,2,3,4];
matriz1[1]=[5,6,7,8];
matriz1[2]=[9,10,11,12];

console.log(matriz1);
console.log(matriz1.length); //conta elementos na matriz 2D
console.log(matriz1[0].length); //conta elementos no elemento da matriz 3D

function somarMatriz(matriz){
 let i=0;
 let soma=0;
 let j =0;
 for(i=0;i<matriz.length;i++){
    for (j=0;j<matriz[i].length;j++){
        soma=soma+matriz[i][j]
    }
 }
 return soma;    
}
console.log("A soma dos elementos da matriz é", somarMatriz(matriz1));

//Fonte firacode

//*Exercicio 02: Encontrar o maior número em uma matriz

let matriz2 = Array();
matriz2[0]=[1,2,13,4];
matriz2[1]=[5,6,17,8];
matriz2[2]=[91,10,11,12];

function maiorElementoMatriz(matriz){
 let i=0;
 let j =0;
 let maior = matriz[0][0];
 for(i=0;i<matriz.length;i++){
    for (j=0;j<matriz[i].length;j++){
        if(matriz[i][j]>maior){
            maior = matriz [i][j];
        }
    }
 }
 return maior;    
}
console.log("O maior elemento da matriz é",maiorElementoMatriz(matriz2));

//*Funções avançadas: String
/*String é considerado um valor primitivo, porém, ao ser interpretado o JS os converte em objetos,
possuindo propriedades e métodos*/

//Um dos métodos de uma String é o length (tamanho dela)
console.log("Jaques Hyago".length);

//Caractere na posição X (começa no 0)
console.log("Jaques Hyago".charAt(7)); //H
console.log("Jaques Hyago".charAt(0)); //J

//Posição de uma letra (primeira ocorrencia)
let nome="Gabriela";
console.log(nome.indexOf('a')); //1
console.log(nome.indexOf('A')); //-1 não tem

//Substituir texto
let nome2='Dick Vigarista Medalha';
console.log(nome2);
let nomeAlterado = nome2.replace('Dick Vigarista','Pica Pau');
console.log(nomeAlterado); //Pica Pau Medalha

//substr  tá entrando em desuso, extrarir da posição inicial (7) posições adiante (5)
let nome3='Dick Viragista Medalha';
console.log(nome3.substr('7','5'));

//Colocar tudo em maísculo ou minísculo
console.log(nome2.toLocaleUpperCase());
console.log(nome2.toLocaleLowerCase());

//Remover espaço ou outro caractere
let nome4=" Batman ";
console.log('-'+nome4.trim( )+'-');

//AULA ATÉ 2H25