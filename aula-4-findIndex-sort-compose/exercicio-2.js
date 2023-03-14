// Exercicio extra
// Escrever a funcao compose para que possamos passar um numero qualquer de funcoes

const dobro = (x) => x * 2;
const metade = (x) => x/2;
const quadrado = (x) => x*x;

function compose(...argsfn){
  return function(arg){
    return argsfn.reduce((acc, fn) => fn(acc), arg)
  }
}


const myfunc = compose(dobro, quadrado, metade);  
console.log(myfunc(7));
