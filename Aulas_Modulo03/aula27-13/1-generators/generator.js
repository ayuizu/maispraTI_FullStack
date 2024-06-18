//? Posso pausar uma função, e dar continuidade quando necessário
//? Indicado pelo function*
//* yield: A palavra-chave yield pausa a execução de uma generator function e o valor da expressão em frente a
//* palavra-chave yield é retornado para a chamada do generator. Ele pode ser considerado uma versão da palavra-chave return para o generator.
//Cada next() exibe o próximo resultado

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/function*

//-----------------------------------------------------------------------

function* myGenerator(){
    let i = 0;
    while(true){
        yield i++;
    }
}

let obj = myGenerator();

let valorObj = obj.next();

console.log(obj);
console.log(valorObj);

//-----------------------------------------------------------------------

function* myGenerator2(){
    yield 5;
    console.log("Voltamos para a função");
    yield 10;
}

let obj2 = myGenerator2();

let valorObj10 = obj2.next();
let valorObj20 = obj2.next();
let valorObj30 = obj2.next();

console.log(obj2);
console.log(valorObj10);
console.log(valorObj20);
console.log(valorObj30);

//-----------------------------------------------------------------------

function* myGenerator3(){
    yield [1,2,3,4,5]
}
//Retornou vetor inteiro

function* myGenerator4(){
    yield* [1,2,3,4,5]
}
//Retornou valor a valor

let obj3 = myGenerator3();

let valorObj31 = obj3.next().value;
let valorObj32 = obj3.next().value;
let valorObj33 = obj3.next().value;

console.log(obj3);
console.log(valorObj31); //Retornou vetor inteiro
console.log(valorObj32); //unidefined
console.log(valorObj33); //unidefined

let obj4 = myGenerator4();

let valorObj41 = obj4.next().value; //se colocar .value retorna direto o valor
let valorObj42 = obj4.next().value;
let valorObj43 = obj4.next().value;
let valorObj44 = obj4.next();
let valorObj45 = obj4.next();

console.log(obj4);
console.log(valorObj41); //Retornou 1
console.log(valorObj42); //Retornou 2
console.log(valorObj43); //Retornou 3
console.log(valorObj44); //Retornou 4
console.log(valorObj45); //Retornou 5

//-----------------------------------------------------------------------

//*Loop infinito controlado
//*Só vai dar done:true quando não tiver mais valores. Nesse caso não vai acontecer nunca
function* fibonacci(){
    let n1=1;
    let n2=1;

    while(true){
        let current = n2;
        n2=n1;
        n1+=current;

        yield current;
    }
}

let fibo = fibonacci();
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next().value);
console.log(fibo.next());
console.log(fibo.next());
console.log(fibo.next());