//console.log("Hello World");

// let mensagem = "Hellow World, sou a Ayumi";
// console.log(mensagem);

console.log("Hello World");

// nome = "Ayumi";
// console.log("Meu nome é", nome, "e estou na aula 4 do professor Jaques");

//Formas de declarar variavel
nome = "Ayumi"; //Não recomendado. Cria uma var global em todo sistema
let NOME = "Jaques"; //Mais comum, de claração padrão. Não podemos redeclarar com let NOME de novo
var name = "Jaques"; //Forma antiga e inadequeada. Podemos redeclarar com var name de novo
const NAME = "Jaques";

console.log(typeof NOME);
let num1 = 10;
let num2 = 5;
console.log(typeof num1);

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 ** num2);

let numTeste1 = "5.5"; //String
console.log(numTeste1 + num1); //O + concatena
console.log(numTeste1 - num1); //considera número

let numTeste2 = parseInt(numTeste1);
console.log(numTeste2 + num1);
let numTeste3 = parseFloat(numTeste1);
console.log(numTeste3 + num1);

//typeof(<variavel>);
let meuNumber = 10;
console.log(typeof meuNumber);

let minhaString = "Sou desenvolvedor";
console.log(typeof minhaString);

let meuBoolean = true;
console.log(typeof meuBoolean);
