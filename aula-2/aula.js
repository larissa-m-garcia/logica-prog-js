// condicionais

function ternario(cond) {
    return cond ? 'cond eh verdadeiro' : 'cond eh falso';
}

// console.log(ternario(undefined));



function coalescencia1(cond) {
    return cond ?? 'padrao';
}


// console.log(coalescencia1('valor qualquer'));

function coalescencia2(cond) {
    return cond && 'cond foi avaliado como verdadeiro';
}

// console.log(coalescencia2(undefined));


// funcoes de ordem superior


function incrementa(arr) {
    let incrementado = arr.map((n) => n + 1);
    return incrementado;
}

// console.log(incrementa([1,2,3,4,5]));

function somatoria(arr) {
    let somatoria = arr.reduce((acc, v) => acc + v);
    return somatoria;
}

// console.log(somatoria([1,2,3,4,5]));


function filtro(arr) {
    let pares = arr.filter((n) => {
        return n % 2 === 0;
    });
    return pares;
}

// console.log(filtro([1,2,3,4,5]));


// exercicios

// implementar nossa propria funcao map (myDictMap)
// que ira percorrer um dicionario (obj padrao do js)
// e aplicara a funcao que passamos para ele para todos os valores
// das chaves desse dicionario.






// reimplementar a funcao changeStreet utilizando uma funcao de ordem superior
// para que a funcao se torne uma funcao pura.

const users = [
    {
        userName: "user1",
        address: {
            street1: "1234 fake street"
        }
    },
    {
        userName: "user2",
        address: {
            street1: "461 fake street"
        }
    },
    {
        userName: "user3",
        address: {
            street1: "886 fake street"
        }
    }
];

const changeStreet = (users, userName, newStreet) => {
    let userIdx = null;
    for (i = 0; i < users.length; i++) {
        if (users[i].userName == userName) {
            userIdx = i;
            break;
        }
    }
    if (userIdx) {
        users[userIdx].address.street1 = newStreet;
    }
    return users;
};

