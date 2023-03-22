// lancando um erro


// try {
//     // const conn_db = {CONEXAO DB}
//     const teste = 2 + 2;
//     // throw new Error("ERRO!");
//     console.log("try");
// } catch (e) {
//     console.error(e);
// } finally {
//     console.log("FINALLY");
//     // FECHA CONN
// }

function ExcecaoDeTipo(mensagem) {
    this.message = mensagem;
    this.name = "Meu Erro";
}

ExcecaoDeTipo.prototype = TypeError.prototype;


function teste() {
    try {
        throw new ExcecaoDeTipo({ detalhes: "DETALHE DO ERRO", nomeFn: "teste" });
        console.log("NAO TEM ERRO!");
    } catch (e) {
        if (e instanceof ExcecaoDeTipo) {
            console.error("NOVA EXCECAO!");
        }
        console.log("Mensagem " + e.message.detalhes);
        console.log("Nome:" + e.name);
    } finally {
        return 0;
    }
}

// console.log(teste());

// Exercicio
// Escrever uma funcao que recebe 3 parametros.
// dia, mes e ano (como numeros) e retorna a string da seguinte forma
// extenso(31, 3, 2023): 31 de marco de 2023.
// Precisa ser uma data valida. Caso nao seja, fazer o throw de uma
// Exception


function dataExtenso(dia, mes, ano) {
    const meses = [{ mes: "janeiro", dias: 31 },
    { mes: "fevereiro", dias: 28 },
    { mes: "marco", dias: 30 },
    { mes: "abril", dias: 31 },
    { mes: "maio", dias: 30 },
    { mes: "junho", dias: 31 },
    { mes: "julho", dias: 30 },
    { mes: "agosto", dias: 31 },
    { mes: "setembro", dias: 30 },
    { mes: "outubro", dias: 31 },
    { mes: "novembro", dias: 30 },
    { mes: "dezembro", dias: 31 }
    ];
    if(!(Number.isInteger(dia) && Number.isInteger(mes) && Number.isInteger(ano)))
        throw new TypeError("dia mes e ano devem ser numeros inteiros.");
    if (!mes > 0 && !mes <= 12) 
        throw new RangeError("Mes invalido: " + mes + " o valor de mes deve ser entre 1 e 12");
    if(!(dia > 0) || !(dia <= meses[mes-1].dias))
        throw new RangeError("Dia invalido: " + dia + " O valor do dia deve ser valido para o mes: " + mes);
    return dia + " de " + meses[mes-1].mes + " de " + ano;
}


function escreverDataPorExtenso(dia,mes,ano) {
    try {
        console.log(dataExtenso(dia,mes,ano));
    }
    catch(e) {
         console.log(e.message);
    }
}

// escreverDataPorExtenso(10.8,12,2023);


// Expressoes regulares em JS


const regex = new RegExp("^([0-9]{2}\\^)?$");

console.log(regex.test(""));