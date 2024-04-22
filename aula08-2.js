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

//substr tá entrando em desuso, extrarir da posição inicial (7) posições adiante (5) //ragis
let nome3='Dick Viragista Medalha';
console.log(nome3.substr('7','5'));

//Colocar tudo em maísculo ou minísculo
console.log(nome2.toLocaleUpperCase());
console.log(nome2.toLocaleLowerCase());

//Remover espaço ou outro caractere
let nome4=" Batman ";
console.log('-'+nome4.trim( )+'-');

//*Funções avançadas: Matemáticas
// Documentação https://www.w3schools.com/java/java_math.asp

//Arredonda para cima
let x1 = Math.ceil(10.100); //11
console.log("Para cima",x1);
//Arredonda para cima
let y1 = Math.floor(10.111); //10
console.log("Para baixo",y1);
//Arredonda para mais prox
let z1 = Math.round(10.70); //11
console.log("Mais prox",z1); 
let w1 = Math.round(10.50); //11
console.log("Mais prox",w1);
let w2 = Math.round(10.30); //10
console.log("Mais prox",w2);

//Datas
let data = new Date();

console.log("Hoje é dia",data.getDate()); //conta do 1
console.log("Estamos no mês", data.getMonth()+1); //conta do zero, pq? Pq a vida n é um morango
console.log("Estamos no ano", data.getFullYear()); //conta do 1

console.log("Estamos no dia",data.getDate(),"/",data.getMonth()+1,"/",data.getFullYear());
console.log(data.toString()); //Imprime toda data em ingles, com data e fuso

data.setDate(data.getDate()+720); 
console.log(data.toString()); //Sun Apr 12 2026 15:29:46

data.setFullYear(data.getFullYear()+5);
console.log(data.toString()); //Sat Apr 12 2031 15:30:55

console.log(data.getTime()); //1933785105275 data em miliseg (ms) desde 1/1/1970

//Ver mais exemplos complexos no código disponibilizado pelo prof da aula

//Em potrugues?
// console.log(data.toString("pt-BR"));
// console.log(data.toString("yyyy-MM-dd"));


//*Exercicio 01: encontre a quantidade de milissegundos entre duas datas
let data1 = new Date("2024-04-22");
let data2 = new Date("2024-05-14");

let milisegundosEntreDatas=Math.abs(data2.getTime()-data1.getTime());
console.log(milisegundosEntreDatas); //1900800000 (ms)




