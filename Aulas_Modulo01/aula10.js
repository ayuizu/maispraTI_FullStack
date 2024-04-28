//* -----------------------------------Exercício 01 -----------------------------------
// const professor = {
//   nome: "Tony Stark",
//   materia: "Matemática",
//   notas: {
//     aluno1: 3.5,
//     aluno2: 4.0,
//     aluno3: 2.8,
//   },
// };

//*For in para iterar sobre as propriedades dentro das notas, calcule a média da turma e imprima.
//*Caso a média seja acima de 3.0 indique que a turma está acima da média de provação.

// let somaNotas = 0;
// let numeroAlunos = 0;

// for (let x in professor["notas"]) {
//   //acessando objeto notas dentro do objeto professor - professor.notas ou professor['notas']
//   somaNotas += professor.notas[x];
//   numeroAlunos++;
// }

// let media = somaNotas / numeroAlunos;

// console.log(`A média das notas é ${media.toFixed(2)}`);
// console.log(
//   media >= 3
//     ? `A turma do ${professor.nome} está acima da média de aprovação`
//     : `A turma do ${professor.nome} está abaixo da média de aprovação`
// );

//* -----------------------------------Exercício 02 -----------------------------------

// const biblioteca = [
//   { titulo: "12 Regras para Vida", autor: "Jordarn Peterson", ano: "1925" },
//   { titulo: "O Hobbit", autor: "Jordarn Peterson", ano: "1937" },
//   { titulo: "Senhora do Jogo", autor: "Sidney Sheldon", ano: "2009" },
//   { titulo: "Zé Carioca", autor: "Disney", ano: "1940" },
//   { titulo: "Nação Dopamina", autor: "Anna Lembke", ano: "2021" },
// ];

//*For of para iterar sobre o array biblioteca
//*Para cada livro, verifica se foi publicado antes de 2000
//*Imprimior o titulo e o ano dos livros que artendem essa condição

// for (let livro of biblioteca) {
//   if (livro.ano < 2000) {
//     console.log(
//       `O livro ${livro.titulo}, escrito por ${livro.autor}, foi publicado em ${livro.ano}.`
//     );
//   }
// }

//* -----------------------------------Exercício 03 -----------------------------------

// const filmes = [
//   { titulo: "Tropa de Elite", genero: "Ação" },
//   { titulo: "Capitão Fantástico", genero: "Drama" },
//   { titulo: "O Poderoso Chefão", genero: "Crime" },
//   { titulo: "Clube de Luta", genero: "Drama" },
//   { titulo: "Oppenheimer", genero: "Biografia" },
//   { titulo: "High School Musical", genero: "Musical" },
//   { titulo: "Barbie", genero: "Live Action" },
// ];

//*Com forEach para iterar sobre o array, crie um objeto para armazenar a contage mde filmes por gênero
//*Para cada file no array, verifique se o gênero já existe no objeto contagem.
//* Se existir, incremente a contagem, se não, adicione o gênero ao objeto com contagem inicial de 1
//*Após o loop, imrpima cada gênero e o número de filmes correspondente

// let contagemGeneros = {};

// filmes.forEach((filme) => {
//   if (contagemGeneros[filme.genero]) {
//     contagemGeneros[filme.genero]++;
//   } else {
//     contagemGeneros[filme.genero] = 1;
//   }
// });

// for (let genero in contagemGeneros) {
//   console.log(`${contagemGeneros[genero]} filme(s) do gênero ${genero}.`);
// }

//* ---------------------------------Pesquisa Binária ---------------------------------

//*Desenvolva um algoritmo que seja capax de receber uma lista ordenada e um valor correto.
//*E execute uma pesquisa binária para encontrar o valor correto.

// let listSize = 256;
// let elements = {};
// elements[0] = {};
// elements[1] = {};

// for (let i = 0; i < listSize; i++) {
//   elements[0][i] = i;
// }
// for (let j = 0; j < listSize; j++) {
//   elements[1][j] = 1000 + j;
// }

// const binarySearch = (list, item) => {
//   let low = 0;
//   let high = list.length - 1;
//   let count = 0;

//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     const guess = list[mid];
//     console.log(guess);
//     count++;

//     if (guess === item) {
//       return `O valor ${item} está na posição ${mid} e foram necessárias ${count} tentativas para descobri-la.`;
//     } else if (guess > item) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return null;
// };

// const myList = [];
// for (let j = 1; j <= 256; j++) {
//   myList[j] = j;
// }
// console.log(binarySearch(myList, 256));

//* ---------------------------------Spread and rest ---------------------------------
//*-----Spread: espalhar

// let tituloArtigo = "Movimento ágil";
// console.log(tituloArtigo);
// console.log(...tituloArtigo); //M o v i m e n t o   á g i l
// console.log([...tituloArtigo]); //['M', 'o', 'v', 'i', 'm', 'e', 'n', 't', 'o', ' ', 'á', 'g','i', 'l'  ]

// let listaTimes1 = ["Inter", "Gremio"];
// let listaTimes2 = ["São Paulo", "Santos"];

// let listaTimesCompletos = [
//   "Flamengo",
//   "Corinthians",
//   ...listaTimes1,
//   ...listaTimes2,
// ];
// console.log(listaTimesCompletos);

// let pessoa = { nome: "Pedro", idade: 15 };
// let dadosCompletos = { endereco: "Rua de teste", ...pessoa };
// console.log(dadosCompletos);

//*-----Rest: juntar

function soma(...param) {
  let resultado = 0;
  console.log(param);
  param.forEach((elemento) => (resultado += elemento));
  return resultado;
}
console.log(soma(3, 8, 5, 7));

function multiplicacao(m, ...p) {
  //multiplica array por "m" e soma tudo
  console.log(m);
  console.log(p);

  let resultado = 0;
  p.forEach((elemento) => (resultado += m * elemento));

  return resultado;
}
console.log(multiplicacao(5, 7, 12, 3, 50));
