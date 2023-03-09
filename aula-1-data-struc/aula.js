// variaveis e seus escopos
function escopoVariaveis() {
    var x;
    let y;
    console.log(x);
    console.log(y);
    {
        var x = 1;
        let y = 2;
        console.log(x);
        console.log(y);
    }
    console.log(x);
    console.log(y);

    if (true) {
        let z = 10000;
        var w = 50000;
        console.log(z);
        console.log(w);
    }
    console.log(w);
    console.log(z);
}


// loops for
var vetor = ["a", "b", "c", "d", "e"];
function loopIndice(vet) {
    for (indice in vet) {
        console.log(indice, vet[indice]);
    }
}

function loopValor(vet) {
    for (valor of vet) {
        console.log(valor);
    }
}

function loop(vet) {
    for (i = vet.length - 1; i >= 0; i--) {
        console.log(i, vet[i]);
    }
}


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

// pegar o valor de uma chave

objeto.d;
objeto["d"];


// criar um Map a partir de um objeto padrao
var mapa = new Map(Object.entries(objeto));

// adicionar ou alterar o valor de uma chave
mapa.set("f", 6);

// pegar valor da chave "c"
mapa.get("c");



// Exercicios 

// Trazer o maior elemento do vetor

vetor1 = [1, 2, 3, 4, 5, 6, 7]; // 7

vetor2 = [19, -10, 4, -20, 7, 2, 5, -3]; // 19

vetor3 = []; // null

vetor4 = [1, 9, 4, -9, 6, 6, 7, -7, 14]; //14



// Criar funcao para retornar a media de idade do vetor de usuarios users

users = [
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
    return 0;
}


// Trazer a maior soma de elementos em sequencia de um vetor vetor.
// Sempre tera pelo menos um numero positivo no vetor

vetor1 = [1, 2, 3, 4, 5, 6, 7]; // 28

vetor2 = [19, -10, 4, -20, 7, 2, 5, -3]; // 19

vetor3 = []; // 0

vetor4 = [1, 9, 4, -9, 6, 6, 7, -7, 14]; //31

function somaMax(vetor) {

}