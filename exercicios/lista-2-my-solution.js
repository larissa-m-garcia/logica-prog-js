// 1) Calcular volume de várias caixas
const caixas = [
    [4, 2, 4],
    [3, 3, 3],
    [1, 1, 2],
    [2, 1, 1],
  ];

function calcularVolumeDeconstiasCaixas(arrayDeCaixas){
    return arrayDeCaixas.reduce((acc, caixa) => acc += caixa.reduce((acc2, medida) => medida * acc2, 1), 0)
}

console.log(calcularVolumeDeconstiasCaixas(caixas));

//2) Obter valor com desconto
const descontos = [
    { valorOriginal: 1500, porcentagemDoDesconto: 50 },
    { valorOriginal: 89, porcentagemDoDesconto: 20 },
    { valorOriginal: 100, porcentagemDoDesconto: 75},
  ];

function obterValorComDescontodeve(arrayDeProdutos){
    return arrayDeProdutos.reduce((acc, prod) => {
        let desconto = prod.valorOriginal * (prod.porcentagemDoDesconto / 100)
        return [...acc, {valorOriginal: prod.valorOriginal, valorComDesconto: prod.valorOriginal-desconto}]
    }, []) 
}

console.log(obterValorComDescontodeve(descontos));


// 3) Ordenar Preços

const bebidas = [
    {
      nome: "suco de pessego",
      preco: 5,
    },
    {
      nome: "suco de uva",
      preco: 6.5,
    },
    {
      nome: "suco de manga",
      preco: 5.5,
    }
  ];

function ordernarPorPrecosMaisBaixos(arrayDeBebidas){
    return arrayDeBebidas.sort((bebida1, bebida2) => bebida1.preco - bebida2.preco)
}

console.log(ordernarPorPrecosMaisBaixos(bebidas));