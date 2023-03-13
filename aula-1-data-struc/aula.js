// variaveis e seus escopos
function escopoVariaveis() {
    const CONSTANTE = 28;
    var a;
    let b;
    console.log(a);
    console.log(b);
    {
        var x = 1;
        let y = 2;
        console.log(x);
        console.log(y);
    }
    console.log(x);
    // console.log(y);

    if (true) {
        let z = 10000;
        var w = 50000;
        console.log(z);
        console.log(w);
    }
    console.log(w);
  //  console.log(z);
}

// console.log(escopoVariaveis());


// loops for
var vetor = [1, 2, 3, 4, 5, 6, 7];
function loopIndice(vet) {
    for (indice in vet) {
        console.log(indice, vet[indice]);
    }
}

// console.log(loopIndice(vetor));

function loopValor(vet) {
    for (item of vet) {
        console.log(item);
    }
}

// console.log(loopValor(vetor));

function loop(vet) {
    for (i = vet.length - 1; i >= 0; i--) {
        console.log(i, vet[i]);
    }
}

// console.log(loop(vetor));


// objetos e mapas

// definindo um objeto
var objeto = {
    "a": 1,
    "b": 2,
    "c": 3
};


// adicionar ou alterar valor de uma chave.
objeto.d = 4;
objeto["e"] = 5;

// console.log(objeto);

// pegar o valor de uma chave

objeto.d;
objeto["d"];

// console.log(objeto);


// criar um Map a partir de um objeto padrao
var mapa = new Map(Object.entries(objeto));

// console.log(mapa);

// adicionar ou alterar o valor de uma chave
mapa.set("f", 6);

// pegar valor da chave "c"
mapa.get("c");

mapa.set({"k": "v"}, [1, 2, 3, 4]);

mapa.size;

// console.log(mapa);



// Exercicios 

// Trazer o maior elemento do vetor

vetor1 = [1, 2, 3, 4, 5, 6, 7]; // 7

vetor2 = [19, -10, 4, -20, 7, 2, 5, -3]; // 19

vetor3 = []; // null

vetor4 = [1, 9, 4, -9, 6, 6, 7, -7, 14]; //14

function maiorElemento(vetor) {
    if(vetor.length === 0) return null;
    let maior = vetor[0];
    for (num of vetor) {
        if(num > maior) {
            maior = num;
        }
    }
    return maior;
}

// console.log(maiorElemento(vetor4));

// Criar funcao para retornar a media de idade do vetor de usuarios users

usuarios = [
    {
        "name": "usuario 1",
        "age": 29
    },
    {
        "name": "usuario 2",
        "age": 15
    },
    {
        "name": "usuario 3",
        "age": 55
    },
    {
        "name": "usuario 4",
        "age": 30
    },
    {
        "name": "usuario 5",
        "age": 21
    },
    {
        "name": "usuario 6",
        "age": 27
    },
    {
        "name": "usuario 7",
        "age": 48
    }
]

function mediaIdade(vetor) {
    let acc = 0;
    for (usuario of vetor) {
        acc += usuario.age;
    }
    return Math.round(acc / vetor.length);
}
// console.log(mediaIdade(usuarios));


function mediaIdade2(vetor) {
    let somaIdade = vetor.reduce((acc, usuario) =>
        acc+usuario.age);
    
    return Math.round(somaIdade / vetor.length);
}
// console.log(mediaIdade(usuarios));



// Trazer a maior soma de elementos do subarray do vetor.
// Sempre tera pelo menos um numero positivo no vetor

vetor1 = [1, 2, 3, 4, 5, 6, 7]; // 28

vetor2 = [5, -10, 4, -209, 7, 2, 5, -3]; // 14

vetor3 = []; // 0

vetor4 = [1, 9, 4, -9, 6, 6, 7, -7, 14]; // 31

vetor5 = [1, 2, -1, 400];

function subSomaMax(vetor) {
    let somaMax = 0;
    let somaAtual = 0;
    for(numero of vetor) {
        somaAtual += numero;
        somaAtual = Math.max(0, somaAtual);
        somaMax = Math.max(somaAtual, somaMax);
    }

    return somaMax;
}
// console.log(subSomaMax(vetor5));


