## 1) Calcular volume de várias caixas

#### Um engenheiro civil precisa calcular se em um determinado galpão cabem todos as caixas que estão chegando em um caminhão.
#### Ele possui as medidas de todas as caixas, que foram dadas assim:

```    
const caixas = [
  [4, 2, 4],
  [3, 3, 3],
  [1, 1, 2],
  [2, 1, 1],
];

- Ele gostaria de saber qual é o volume total dessas caixas juntas.
- Para resolver esse problema, crie uma função chamada calcularVolumeDeconstiasCaixas:

1. Receber um array de array onde cada array são as medidas de uma caixa.
2. Retornar um number que seja o volume total dessas caixas juntas.
3. Utilize a função `reduce()` em seu desenvolvimento.


## 2) Obter valor com desconto

#### Miguel é fanático em compras e sempre está olhando site de descontos, nem sempre o site mostra a porcentagem real de desconto e ele tem em mãos os valores originais de determinados produtos que já está olhando faz tempo.
#### Ele salvou o maior valor que aquele produto foi ofertado e o valor do desconto agora em porcentagem:

```    
const descontos = [
  { valorOriginal: 1500, porcentagemDoDesconto: 50 },
  { valorOriginal: 89, porcentagemDoDesconto: 20 },
  { valorOriginal: 100, porcentagemDoDesconto: 75},
];
```

#### Ele gostaria de que sua lista fosse retornada assim:

```
const descontos = [
  { valorOriginal: 1500, valorComDesconto: 750 },
  { valorOriginal: 89, valorComDesconto: 71.2 },
  { valorOriginal: 100, valorComDesconto: 25 },
];
```

- Para resolver esse problema, crie uma função chamada obterValorComDescontodeve:

1. Receber um array de objetos com os atributos valorOriginal e porcentagemDoDesconto.
2. Retornar um array de objetos com os atributos valorOriginal e valorComDesconto, onde o atributo valorComDesconto é o valor do produto com a porcentagem do desconto aplicada.




## 3) Ordenar Preços

#### Com a chegada da black friday o dono de uma distribuidora de bebidas está fazendo várias promoções para seus clientes. Após abaixar os preços dos seus produtos agora ele quer divulgar a lista atualizada em seu catálogo digital.
#### A lista original é essa aqui:

```
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
  },
];
```

#### Para divulgar e vender mais rápido ele gostaria de deixar os produtos mais baratos em cima, ficando assim:

```
const bebidas = [
  {
    nome: "suco de pessego",
    preco: 5,
  },
  {
    nome: "suco de manga",
    preco: 5.5,
  },
  {
    nome: "suco de uva",
    preco: 6.5,
  },
];
```

- Para resolver esse problema, crie uma função chamada ordernarPorPrecosMaisBaixos deve:

1. Receber um array de objetos com os atributos nome e preco.
2. Retornar esse mesmo array ordenando seus objetos pelos preços dos produtos mais baixos.
3. Utilize a função `sort`() em seu desenvolvimento. 