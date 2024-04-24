//*-----------------Exercicio 12-----------------

const prompt = require('prompt-sync')();
console.log("O número é par ou ímpar?");
console.log("--Digite 0 ou um valor negativo para sair.\n");

let num1=1;
while(num1>0){
    num1=parseInt(prompt("Digite um número inteiro: "));
    if(num1<=0){
        break;
    }else if(num1%2==0){
        console.log(num1, "é um número é par.\n");
    }else{
        console.log(num1, "é um número é ímpar.\n");
    }
}
if(num1<=0){
    console.log("Fim do programa");
}