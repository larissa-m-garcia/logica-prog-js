## Exercicio Final

### Entrada do sistema

Nosso sistema deve receber a lista de clientes a seguir:

```javascript
[
    {
        id: 1,
        nome: "Luiz Julio",
        email: "luiz.julio@teste.com",
        telefone: null,
        idade: 39,
        compras: [{
            item: "televisao",
            valor: 1000
        },
        {
            item: "microondas",
            valor: 1300
        }]
    },
    {
        id: 2,
        nome: "davi marcelo",
        email: "Davi.Marcelo@teste.com",
        telefone: "TELEFONE",
        idade: 27,
        compras: [{
            item: "geladeira",
            valor: 2000
        },
        {
            item: "fogao",
            valor: 450
        }]
    },
    {
        id: 3,
        nome: "Augusto Cesar",
        email: "augusto.cesar@teste.com",
        telefone: "(34)99093-9203",
        idade: 22,
        compras: [{
            item: "fogao",
            valor: 2000
        }]
    },
    {
        id: 4,
        nome: "Eliane Louise",
        email: "eliane.louise",
        telefone: "(81)988888888",
        idade: 26,
        compras: [{
            item: "televisao",
            valor: 4000
        },
        {
            item: "lava roupas",
            valor: 5000
        }]
    },
    {
        id: 5,
        nome: "Laura Heloisa",
        email: "laura.heloisa@teste.com",
        telefone: "2399999999",
        idade: 55,
        compras: [{
            item: "lava loucas",
            valor: 1500
        },
        {
            item: "laptop",
            valor: 7000
        }]
    },
    {
        id: 6,
        nome: "Jose Dias",
        email: "jose.dias@teste.com",
        telefone: null,
        idade: 62,
        compras: [{
            item: "liquidificador",
            valor: 350
        },
        {
            item: "batedeira",
            valor: 1000
        }]
    },
]
```


### Regras de validacao

#### Vetor de clientes

- Nosso sistema obrigatoriamente deve receber um vetor nao vazio.

#### Objeto cliente
- Nome deve ser uma string nao vazia (nao pode ser null/undefined);
- Email deve ser uma string nao vazia (nao pode ser null/undefined); (Nao sera necessario fazer a validacao se o email e' valido)
- Idade deve ser um inteiro > 18 (nao pode ser null/undefined);
- Telefone pode ser null ou undefined, mas se for uma string, deve ser um telefone valido.
- Nao sera necessario validar o vetor de compras.


### Funcoes do sistema

O sistema devera conter 3 funcionalidades:
 - Trazer a media de idade dos clientes;
 - Retornar um objeto (ou mapa) de compras com o seguinte formato:
   ```javascript
      {
        <id_do_cliente>: [{item: <nome_do_item>,
                           valor: <valor_do_item>}]
      }
   ```
 - Trazer o valor medio do total de compras de todos os clientes;


### Dicas

Nao tentem fazer tudo em uma funcao. O ideal e' dividir a solucao em *funcoes puras* que resolvam apenas uma parte do problema e combina-las depois em uma funcao principal.

Para decidir qual funcao executar, podem usar o switch/case para deixar o codigo um pouco mais limpo, caso prefiram.
