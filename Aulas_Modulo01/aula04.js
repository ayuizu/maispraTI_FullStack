// // let contador = 1;
// // console.log(contador);
// // console.log(contador++);
// // console.log(contador);

// // let num1 = 2;
// // let passo = 5;
// // num1 += passo;
// // console.log(num1);
// // num1 **= passo;

// console.log(10 < 5); //false
// console.log(10 <= 5); //false
// console.log(10 > 5); //true
// console.log(10 >= 5); //true
// console.log(10 == "10"); //true - verifica valor
// console.log(10 === "10"); //false - verifica valor E tipo
// console.log(10 != "10"); //false - valores são iguais
// console.log(10 !== "10"); //true - verifica valor E tipo - é diferente
// //Operadores lógicos
// console.log(10 > 5 && 10 > 2); //true
// console.log(10 > 5 || 10 > 2); //true
// console.log(10 > 5 && !10 > 2); //false

// //Autenticação
// const usuario = "Jaques";
// const senha = "123";

// const autenticacao = usuario === "Jaques" && senha === "123";

// console.log(autenticacao);

// //Pensando
// console.log(true); //true
// console.log(!true); //false
// console.log(!!true); //true
// console.log(!!!true); //false

//Estrutura de controle condicional - IF / ELSE IF / ELSE
// const nota = 36;

// if (nota >= 60) {
//   console.log("Aprovado");
// } else if (nota >= 40) {
//   console.log("Recuperação");
// } else {
//   console.log("Reprovado");
// }

// const idade = 30;

// if (idade >= 18 && idade <= 32) {
//   console.log("Pode realizar o concurso");
// } else {
//   console.log("Não pode realizar o concurso;");
// }

//Operador ternário <cond> ? true : false;
// let resultadoTernario = 10 < 100 ? true : false;
// console.log(resultadoTernario);

const prompt = require("prompt-sync")();
let teste = prompt("Digite aqui seu nome:");
console.log(teste);

//digitar node aula4.js no terminal para rodar
