//*-----------------Exercicio 12-----------------

const prompt = require('prompt-sync')();
console.log("Tabuadas de 1 a N");

for(let i=0;i<5;i++){
    let N1 = parseInt(prompt("Digite um número N: "));
    for(let j=1;j<=N1;j++){
        console.log(j,"x",N1,"=",j*N1);
    }
}

