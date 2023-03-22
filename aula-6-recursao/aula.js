// recursao

// escrever uma funcao para encontrar o fatorial do numero passado.

function fact(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}

// console.log(fact(100));

function fact2(n) {
    function factCauda(n, res) {
        if (n <= 1) {
            return res;
        } else {
            return factCauda(n - 1, n * res);
        }
    }
    return factCauda(n, 1);
}

// console.log(fact(5));





function soma1(v) {
    return v.map(el => el+1);
}

console.log(soma1([1,2,3,4]));


function soma1Reduce(v) {
    return v.reduce((acc, el) => {
        acc.push(el+1);
        return acc;
    }, []);
}

console.log(soma1Reduce([1,2,3,4]));


function filtraPar(v) {
    return v.filter(el => el % 2 === 0);
} 

console.log(filtraPar([1,2,3,4]));


function filtraParReduce(v) {
    return v.reduce((acc, el) => {
        if(el % 2 === 0) acc.push(el);
        return acc;
    }, []);
}

console.log(filtraParReduce([1,2,3,4]));



// Mais sobre HoF = Higher order function



// Implementar um map usando recursao e usando reduce



// Implementar um filter usando recursao e usando reduce
