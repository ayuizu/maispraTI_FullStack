//*Exercicio 01 - Temperatura de Celsius para Farenheit


//*Exercicio 02 - Percentual de votos em eleição em um município
const prompt = require('prompt-sync')();
//Dados de entrada
let eleitores = parseInt(prompt("Digite o numero de eleitores: "));
let votosBrancos = parseInt(prompt("Digite o numero de votos brancos: "));
let votosNulos = parseInt(prompt("Digite o numero de votos nulos: "));
let votosValidos = parseInt(prompt("Digite o numero de votos válidos: "));
//Processamento
let percentualVotosBrancos=(votosBrancos/eleitores)*100;
let percentualVotosNulos=(votosNulos/eleitores)*100;
let percentualVotosValidos=(votosValidos/eleitores)*100;
//Saida
console.log("Brancos: " + percentualVotosBrancos + "%" + "\nNulos: " + percentualVotosNulos + "%" + "\nVálidos: " + percentualVotosValidos + "%");