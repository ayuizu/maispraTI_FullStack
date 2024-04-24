//*Exercicio 08 - Ordem crescente
/*Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.*/
const prompt = require('prompt-sync')();
console.log("Dois números em ordem crescente");
//?Dados de entrada
let num1 = parseFloat(prompt("Digite o 1º número: "));
let num2 = num1;
//?Processamento e Saída
do{
    num2=parseFloat(prompt("Digite o 2º número: "));
}while(num2==num1);
if(num1<num2){
    console.log("Números em ordem crescente: ",num1,", ",num2);
}else{
    console.log("Números em ordem crescente: ",num2,", ",num1);
}


