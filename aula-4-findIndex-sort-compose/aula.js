// Mais funcoes de ordem superior

const vetor = ["f", "b", "a", "d", "c", "e"];


// vetor.forEach((elemento) => {
//     console.log(elemento);
// });


const idxElemento = vetor.findIndex((el) => el === "p");

// console.log(idxElemento);

// console.log([1,5,2,3].sort());

const sorted = vetor.sort();
// console.log(sorted);

const sortNum = [10, 2, 57, 7, 11].sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    if (a === b) return 0;
});

// console.log(sortNum);

const pessoas = [
    {
        nome: "Luiz Julio",
        id: 22
    },
    {
        nome: "Davi Marcelo",
        id: 6
    },
    {
        nome: null,
        id: 6
    },
    {
        nome: "Augusto César",
        id: 30
    },
    {
        nome: "augusto César",
        id: 32
    },
    {
        nome: "Laura Heloisa",
        id: 1
    },
    {
        nome: "Eliane Louise",
        id: 33
    },
];

const pessoasClassificadas = pessoas.sort((pessoa1, pessoa2) =>
    pessoa1.id > pessoa2.id ? 1 : -1);
// console.log(pessoasClassificadas);


// Exercicio:
// Escrever uma funcao que classifica as pessoas  por ordem alfabetica.

function classificaPeloNome(pessoas) {
    return pessoas.sort((pessoa1, pessoa2) =>
    pessoa1.nome.toUpperCase() > pessoa2.nome.toUpperCase() ? 1 : -1);
}


// console.log(classificaPeloNome());


// Composicao de funcoes

const multiplica = (x, y) => y * x;

const metade = (x) => x / 2;

// console.log(metade(dobro(dobro(2))));

function compose(fn1, fn2) {
    return function (...args) {
        return fn2(fn1(...args));
    }
}

const quadruplo = compose(multiplica, metade);
console.log(quadruplo(2, 3));



const lowerCase = (str) => str ? str.toLowerCase() : '';

// console.log(lowerCase("AAAAAAAAAA"));