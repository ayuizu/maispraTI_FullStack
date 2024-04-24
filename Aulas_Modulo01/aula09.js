//*-------------Explorando Objetos-----------------*//
//JavaScript é mais orientado a funções, mas consegue ser usado para OO se necessário
//Objetos em JS são maneiras de organizar dados. São representações do mundo real. Composto por propriedades e valores
//[] declara Arrays, {} declara objetos

//const objeto = {atributo:info separados por ,}
//const não pode ser reatribuida, mas o valor pode ser alterar
// const pessoa = {
//   nome: "Lucas",
//   idade: 25,
//   email: "lucas@teste.com",
//   profissao: "Músico",
//   empregada: true,
// };

// console.log(pessoa); //mostra todos os dados
// console.log(pessoa.nome); //mostra só o nome

//*Alterar atributo
// pessoa.nome = "Jurema";
// console.log(pessoa);

//*Excluir atributo
// delete pessoa.empregada;
// console.log(pessoa);

//*Métodos dentro de objetos
//arrow functio não pode mudar o escopo. melhor por funcao normal. cria escopo proprio, não liga com atributos externos internamente para dentro dela
//NÃO USAR EM CONSTRUTORES OU OBJETOS. Usado em callback
//pessoa.falar = () => {
// pessoa.falar = function () {
//   return `Meu nome é ${this.nome}, tenho ${this.idade} anos de idade e sou ${this.profissao}.`;
// }; //arrow function
// console.log(pessoa.falar());

//*Exercício 1: Criar um objeto

// const cachorro = {
//   nome: "Yuna",
//   raca: "Boxer",
//   cor: "marrom",
//   idade: 7,
//   peso: 31,
//   nomeTutor: "Ayumi",
// };
// cachorro.descrever = function () {
//   return `${this.nome} é um(a) cachorro(a) da raça ${this.raca}. Tem ${this.idade} anos e pesa ${this.peso} kg. O(a) tutor(a) é ${this.nomeTutor}`;
// };
// console.log(cachorro.descrever());

//*---------------------------Funções para objetos------------------------
//Estruturas de repetição/iteração for in, for of , for each

//? for in --------------------------------------------
// Itera sobre todas as propriedades enumeraveis de um objeto

// const pessoa = {
//   nome: "Lucas",
//   idade: 25,
//   email: "lucas@teste.com",
//   profissao: "Músico",
//   empregada: true,
//   descrever: function () {
//     console.log(
//       `Meu nome é ${this.nome}, tenho ${this.idade} anos de idade e sou ${this.profissao}.`
//     );
//   },
// };

// for (let chave in pessoa) {
//   //chave representa o nome do atributo (antes do :)
//   console.log(chave + ": " + pessoa[chave]);
// }

//? for of ------------------------------------------
// Itera sobre Arrays, Strings
// let numeros = [10, 20, 100];
// for (let numero of numeros) {
//   console.log(numero);
// } //mais fácil que o for tradicional!

// let nomes = "Jaques Hyago";
// for (let nome of nomes) {
//   console.log(nome);
// }

// for (let chave of pessoa) {
//   //TypeError: pessoa is not iterable
//   console.log(chave + ": " + pessoa[chave]);
// }

//*Exercício 2: voce tem uma lista de objetos que representam diferentes tipos de veiculos e suas caracteristicas
//*Seu objetivo é primeiro usar o FOR IN para listar todas as propriedades e valores de cada veículo.
//*Depois, utilizar o FOR OF para listar apenas os modelos dos veículos.

// const carros = [
//   {
//     marca: "Chevrolet",
//     modelo: "Cobalt",
//     cor: "Prata",
//     ano: 2012,
//     placa: "IBZ6F70",
//   },
//   {
//     marca: "Volkswagen",
//     modelo: "Gol",
//     cor: "Branco",
//     ano: 2018,
//     placa: "DEF5678",
//   },
//   {
//     marca: "Fiat",
//     modelo: "Palio",
//     cor: "Vermelho",
//     ano: 2010,
//     placa: "GHI9012",
//   },
// ];

//!Adicionar breakpoint (ponto vermelho à esq linha + F5 debug)

//for (let chave in carros) { //retorna só posição na chave carros[i = 0,1,2]. Precisa de mais um nível de acesso carros[i][j]
// for (let posicao in carros) {
//   for (let atributo in carros[posicao]) {
//     console.log(atributo + ": " + carros[posicao][atributo]);
//   }
//   console.log("\n");
// }

// for (let carro of carros) {
//   console.log(carro.marca);
// }

//? for each -----------------------------------------
//Executa uma função para cada elemento do Array

//*Com função normal
// let cores = ["Azul", "Preto", "Branco"];
// cores.forEach(function (cor, indice) {
//   console.log(indice + ": " + cor);
// });

//*Com arrow function
// let cores = ["Azul", "Preto", "Branco"];
// cores.forEach((cor, indice) => {
//   console.log(indice + ": " + cor);
// });

// let compras = [];
// compras[0] = new Array("banana", "laranja");
// compras[1] = new Array("leite", "queijo");

//Acessa só posição 0:banana,laranja 1:lete,queijo
// compras.forEach((value, index) => {
//   console.log(index + ": " + value);
// });

//Acessa só Array dentro da Array
// compras[0].forEach((value, index) => {
//   console.log(index + ": " + value);
// });

//*Exercicio 3: Construa um array de numeros e calcule a soma totoal dos numeros e tambem imprima cada numero multiplicado por dois

// let numeros = [1, 2, 3, 4, 5, 6];
// let soma = 0;
// numeros.forEach((value, index) => {
//   console.log(index + ": " + value + " x 2 = " + 2 * value);
//   soma += value;
// });
// console.log(`A soma é igual a ${soma}`);

//ES5
// let nome = "Jaques";
// let idade = 24;
// let sexo = "Masculino";

// let objeto = {
//   //se for igual pode omitir
//   nome: nome,
//   idade: idade,
//   sexo: sexo,
// };
// console.log(objeto);

//ES6
// let nome = "Jaques";
// let idade = 24;
// let sexo = "Masculino";

// let objeto = {
//   //se for igual pode omitir
//   nome: nome.
//   idade:idade,
//   sexo:sexo
// };
// console.log(objeto);

//* Outro jeito de criar objetos-------------------------
let BicicletaFactory = function (identificadorUnico, cor, tipo, marca) {
  return {
    identificadorUnico,
    cor,
    tipo,
    marca,
  };
};
let bicicleta1 = BicicletaFactory(1, "Azul", "Speed", "Caloi");
let bicicleta2 = BicicletaFactory(2, "Vermelha", "Mountain", "BMX");

console.log(bicicleta1);
console.log(bicicleta2);

let prompt = require("prompt-sync")();
bicicleta1.cor = prompt("Escreva a cor: ");
console.log(bicicleta1.cor);
console.log(bicicleta1);
