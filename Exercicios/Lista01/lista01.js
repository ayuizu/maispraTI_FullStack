//*Exercicio 01 - Temperatura de Celsius para Farenheit


//*Exercicio 02 - Percentual de votos em eleição em um município

const prompt = require('prompt-sync')();

let eleitores = parseInt(prompt("Digite o numero de eleitores: "));
let votosBrancos = parseInt(prompt("Digite o numero de votos brancos: "));
let votosNulos = parseInt(prompt("Digite o numero de votos nulos: "));
let votosValidos = parseInt(prompt("Digite o numero de votos válidos: "));

let percentualVotosBrancos=(votosBrancos/eleitores)*100;
let percentualVotosNulos=(votosNulos/eleitores)*100;
let percentualVotosValidos=(votosValidos/eleitores)*100;

console.log("Brancos: " + percentualVotosBrancos + "%" + "\nNulos: " + percentualVotosNulos + "%" + "\nVálidos: " + percentualVotosValidos + "%");

//*Exercicio 03 - Operações
/*● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros*/
// const prompt = require('prompt-sync')();
// //?Dados de entrada
// let num1 = parseInt(prompt("Digite o 1º numero: "));
// let num2 = parseInt(prompt("Digite o 2º numero: "));
// let num3 = parseInt(prompt("Digite o 3º numero: "));
// let num4 = parseInt(prompt("Digite o 4º numero: "));
// //?Processamento
// let novoNum1=num1+25;
// let novoNum2=num2*3;
// let novoNum3=num3*1.12;
// num4=num1+num2+num3;
// //?Saida
// console.log("1º número + 25: " + novoNum1);
// console.log("2º número x 3: " + novoNum2);
// console.log("3º número + 12%: " + novoNum3);
// console.log("4º número = soma dos 3 primeiros originais: " + num4);

//*Exercicio 04 - Estou aprovado?
/*. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação)*/
// const prompt = require('prompt-sync')();
// //?Dados de entrada
// let nota1 = parseFloat(prompt("Digite a 1º nota: "));
// let nota2 = parseFloat(prompt("Digite a 2º nota: "));
// //?Processamento
// let media=(nota1+nota2)/2;
// //?Saída
// if(media>=6){
//     console.log("Parabéns! Você foi aprovado.");
// } 

//*Exercicio 05 - Estou aprovado ou reprovado?
/*Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0*/
// const prompt = require('prompt-sync')();
// //?Dados de entrada
// let nota1 = parseFloat(prompt("Digite a 1º nota: "));
// let nota2 = parseFloat(prompt("Digite a 2º nota: "));
// //?Processamento
// let media=(nota1+nota2)/2;
// //?Saída
// if(media>=6){
//     console.log("Parabéns! Você foi aprovado.");
// } else{
//     console.log("Você foi reprovado! Estude mais.");
// }

//*Exercicio 06 - Triangulos
/*Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.*/
// console.log("Que tipo de triângulo é esse?");
// const prompt = require('prompt-sync')();
// //?Dados de entrada
// let A = parseFloat(prompt("Digite o tamanho do 1º lado: "));
// let B = parseFloat(prompt("Digite o tamanho do 2º lado: "));
// let C = parseFloat(prompt("Digite o tamanho do 2º lado: "));
// //?Processamento e Saída
// if(A<B+C && B<A+C && C<A+B){
//     if((A==B && A!=C) || (A==C && A!=B)|| (B==C && B!=A)){
//         console.log("Este é um triângulo isósceles!");
//     }else if(A!=B && B!=C && A!=C){
//         console.log("Este é um triângulo escaleno!");
//     }else if(A==B && B==C){
//         console.log("Este é um triângulo equilátero!");
//     }
// }else{
//     console.log("As medidas digitadas não formam um triângulo!");
// }

//*Exercicio 07 - Preço de maçãs
/*As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.*/
// console.log("Calculadora de valor da compra de maçãs \nR$ 0,30/un ou R$0,25/un a partir da 12ª");

// const prompt = require('prompt-sync')();
// //?Dados de entrada
// let numMaca = parseInt(prompt("Digite o número de maçãs compradas: "));
// let valorCompra = 1.0;
// //?Processamento e Saída
// if(numMaca>0 && numMaca<12){
//     valorCompra = numMaca*0.3;
// }else if(numMaca>=12){
//     valorCompra = numMaca*0.25;
// }else{
//     console.log("Número digitado inválido.");
// }
// if(numMaca>0){
//     console.log(`O valor total da compra de ${numMaca} maçãs é de R$ ${valorCompra.toFixed(2)}.`);
//     //toFixed(2) = exibir 2 casas decimais
// }