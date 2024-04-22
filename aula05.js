//Exercício 1: Par ou Impar

// const prompt = require('prompt-sync')();
// let numero = parseInt(prompt("Digite um número: "));
// if (numero%2==0){
//     console.log("É par");
// } else {
//     console.log("É ímpar");
// }


//Exercicio 2: Maior de dois números

// const prompt = require('prompt-sync')();

// let numero1 = parseInt(prompt("Digite o primeiro número: "))
// let numero2 = parseInt(prompt("Digite o segundo número: "))

// if(numero1>numero2){
//     console.log("O primeiro número é maior.");
// } else if (numero1<numero2){
//     console.log("O segundo número é maior.");
// } else {
//     console.log("Os dois números são iguais!")
// }

//Exercicio 3: Triangulo

// const prompt = require('prompt-sync')();

// let lado1 = parseInt(prompt("Insira a medida do primeiro lado: "));
// let lado2 = parseInt(prompt("Insira a medida do segundo lado: "));
// let lado3 = parseInt(prompt("Insira a medida do terceiro lado: "));

// //Testando se as medidas formam um triangulo
// /*Só irá existir um triângulo se, somente se, os seus lados obedeceram à seguinte regra:
// um de seus lados deve ser maior que o valor absoluto (módulo) da diferença dos outros
// dois lados e menor que a soma dos outros dois lados*/

// if(lado1+lado2>lado3 && lado1+lado3>lado2 && lado2+lado3>lado1){
//     console.log("É possível formar um triângulo com essas medidas.");
// }else{
//     console.log("Não é possível formar um triângulo com essas medidas.");
// }

//Exercicio 4: Calculadora simples
// const prompt = require('prompt-sync')();

// let num1 = parseInt(prompt("Insira o primeiro número: "));
// let num2 = parseInt(prompt("Insira o segundo número: "));
// let operacao = prompt("Insira a operação desejada (+, -, *, /): ");

// if (operacao==='+'){
//     resultado=num1+num2;
// }else if (operacao==='-'){
//     resultado=num1-num2;
// }else if(operacao==='*'){
//     resultado=num1*num2;
// }else if(operacao==='/'){
//     if(num2!=0){
//         resultado=num1/num2;
//     }else{
//         console.log("Erro: divisão pro zero.");
//         resultado=undefined;
//     }
// }else{
//    console.log("Erro: operação inválida.")
//    resultado=undefined;
// }
// //Só imprime o resultado se ele foir válido
// if(resultado!==undefined){
//     console.log("Resultado: ",resultado);
// }

//Exercício 5: Dia da Semana com Switch-Case

// const prompt = require('prompt-sync')();

// let dia = parseInt(prompt("Insira um número do dia da semana: "));
// let nomeDia;

// switch(dia){
//     case 1:
//         nomeDia="Domingo";
//         break; //Pra não seguir executando o código
//     case 2:
//         nomeDia="Segunda-feira";
//         break;
//     case 3:
//         nomeDia="Terça-feira";
//         break;
//     case 4:
//         nomeDia="Quarta-feira";
//         break;
//     case 5:
//         nomeDia="Quinta-feira";
//         break;
//     case 6:
//         nomeDia="Sexta-feira";
//         break;    
//     case 7:
//         nomeDia="Sábado";
//         break; 
//     default:
//         console.log("Digite um número de 1 a 7.");
//         break; 
// }

// console.log("O dia é",nomeDia);

//Exercicio 6: Calculadora simples com Sitch-Case
// const prompt = require('prompt-sync')();

// let num1 = parseInt(prompt("Insira o primeiro número: "));
// let num2 = parseInt(prompt("Insira o segundo número: "));
// let operacao = prompt("Insira a operação desejada (+, -, *, /): ");

// switch(operacao){
//     case '+':
//         resultado=num1+num2;
//         break;
//     case '-':
//         resultado=num1-num2;
//         break;
//     case '*':
//         resultado=num1*num2;
//         break;
//     case '/':
//         if(num2!=0){
//             resultado=num1/num2;
//         }else{
//             console.log("Erro: divisão pro zero.");
//             resultado=undefined;
//         }
//     default: 
//           console.log("Erro: operação inválida.")
//           resultado=undefined;
// }
// //Só imprime o resultado se ele foir válido
// if(resultado!==undefined){
//     console.log("Resultado: ",resultado);
// }

//Exercicio 7: Dias do mês
// const prompt = require('prompt-sync')();

// let mes = parseInt(prompt("Insira o número do mês (1 a 12): "));
// let diasNoMes;

// //Switch não serve para comparar maior ou menor ou etc
// switch(mes){
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         diasNoMes=31;
//         break;
//     case 2:
//         diasNoMes=28;
//         break;
//     case 4: case 6: case 9: case 11:
//         diasNoMes=30;
//         break;
//     default:
//         diasNoMes=-1;       
//         break; 
// }
// if(diasNoMes!==-1){
//     console.log("O mes",mes, "tem", diasNoMes,"dias");
// }else{
//     console.log("Erro: mês inválido.")
// }

//Exercicio 8: Tabuada usando for

// let contador = 0;
// let multiplicador = 5;

// // <variavel>; <condição de parada>; <incremento>

// for(contador=0;contador<=10;contador++){
//     console.log(`${multiplicador} * ${contador} = `, multiplicador * contador); //são crazes!
// }

//Exercicio 9: Números pares com for
// for (let i = 0; i<=100; i+=2){
//     console.log(i);
// }

//Exercicio 10: Soma de todos os numeros de 1 a 10 com for
// let soma=0;
// for (let i =0;i<=10;i++){
//     soma+=i;
// }
// console.log(soma);

//Exercicio 11: Imprimir de 10 a 0 com for

// for (let i=10; i>=0; i--){
//     console.log(i);
// }

//Exercicio 12: 10 a 0 com while
// let i =10;
// while (i>=0){
//     console.log(i);
//     i--;
// }

//Exercicio 13: Imprimir multiplos de 5 menores que 100 usando while

// let i = 1;
// let multiplicador=5;
// let resultado=1;
// while (resultado<100){ //Aqui inclui o 100 (executa depois soma e verifica)
//     console.log(resultado=i*multiplicador);
//     i++;
// }

//Exercicio 13: Soma dos numeros de 1 a 1000 usando while
//A soma é 500500
// let i = 1;
// let soma=0;
// while(i<=1000){
//     soma+=i;
//     i++;
// }
// console.log(soma);

//Exercicio 14: Pedir senha com Do-While
// const prompt = require('prompt-sync')();
// let senha;

// do { 
//     senha = prompt("Digite a senha: ");
// }while(senha!=="1234");

// console.log("Senha correta!");

//Pedir ao usuário para adivinhar um nºentre 1 a 10
// const prompt = require('prompt-sync')();
// const numeroCorreto=Math.floor((Math.random()*10)+1);
// //Math.floor(x) It is used to convert a real number having fractional part into an integer without the fractional part.
// //Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1
// console.log(numeroCorreto);
// let tentativa;
// do{
//     tentativa=parseInt(prompt("Adivinhe um número entre 1 e 10: "));
//     if (tentativa < numeroCorreto){
//         console.log("Tente um número maior.");
//     }else if(tentativa>numeroCorreto){
//         console.log("Tente num número menor.");
//     }
// }while(tentativa!==numeroCorreto);

// console.log("Parabéns! Você acertou!");

///////////////////////////////////////
/*Lista de exercícios: 16 até 30/04
Anexar .js
Só pode utilizar o que foi mostrado em aula
*/

/*Switch-case com condicional: JavaScript não aceita, e não fala sobre na documentação*/