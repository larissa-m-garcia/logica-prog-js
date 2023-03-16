// lancando um erro


// try {
//     const teste = 2 + 2;
//     return teste(2, 3);
// } catch (e) {
//     if(e instanceof RangeError) {
//         console.log("Erro de range");
//     } else if(e instanceof ReferenceError) {
//         console.log("Erro de referencia");
//     } else if (e instanceof TypeError){
//         console.log("Erro de tipo");
//     }
// }



function Excecao(mensagem) {
    this.message = mensagem;
    this.name = "Meu Erro";
}

Excecao.prototype = Error.prototype;


function arq(caminho) {
    try {
        //let blablabla = arquivo(caminho);
        throw new Excecao("Deu ruim!");
        console.log("NAO TEM ERRO!");
    } catch (e) {
        if (e instanceof Excecao) {
            console.error("NOVA EXCECAO!");
        }
        console.error("Erro " + e.name);
        console.error("Mensagem: " + e.message);
    } finally {

    }
    // fechar(blablabla);
}



// Exercicio
// Escrever uma funcao que recebe 3 parametros.
// dia, mes e ano (como numeros) e a imprime da seguinte forma
// extenso(31, 3, 2023): 31 de marco de 2023.
// Precisa ser uma data valida. Caso nao seja, fazer o throw de uma
// Exception customizada.


// escreverDataPorExtenso(10.5,12,2023);



// Expressoes regulares em JS


const regex = new RegExp("^[a-z]+\\(*[a-z]+\\)*$");

console.log(regex.test("testea()"));