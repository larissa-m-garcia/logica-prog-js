

const listaClientes = [
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
        //telefone: "TELEFONE",
        telefone: "(34)99093-9203",
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
        //telefone: "2399999999",
        telefone: "(34)99093-9203",
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

function VetorVazioException(mensagem){
    this.message = mensagem
    this.name = "Erro no vetor"
}

function TelefoneException(mensagem){
    this.message = mensagem
    this.name = "TypeError no telefone"
}

VetorVazioException.prototype = Error.prototype
TelefoneException.prototype = TypeError.prototype

function verificaVetor(listaClientes){
    if(listaClientes.length === 0){
        throw new VetorVazioException("A lista de clientes não pode ser vazia")
    }
}

const regexTelefone = new RegExp("^\\([0-9]{2}\\)\\s?[0-9]{4,5}\\-?[0-9]{4}$")
// s = espaço


function verificaTipos(cliente){
    if(cliente.nome === null || cliente.nome === undefined){
        throw new TypeError("O nome não podem ser null ou indefined")
    }else if(cliente.email === null || cliente.email === undefined){
        throw new TypeError("O email não podem ser null ou indefined")
    }else if(cliente.idade === null || cliente.idade === undefined){
        throw new TypeError("O idade não pode ser null ou undefined")
    }else if(!Number.isInteger(cliente.idade)){
        throw new TypeError("O idade deve ser um número inteiro")
    }else if(!cliente.idade > 18){
        throw new RangeError("A idade deve ser um inteiro maior que 18")
    }else if(typeof cliente.telefone === 'number'){
        throw new TelefoneException("O telefone deve ser uma string");
    }else if(typeof cliente.telefone === 'string' && !regexTelefone.test(cliente.telefone)){
        throw new TelefoneException("O telefone deve seguir o formato (NN)NNNNN-NNNN");
      }
}

function mediaIdadeClientes(clientes){
    return clientes.reduce((acc, cliente) => acc += cliente.idade, 0) / listaClientes.length    
}

function comprasClientes(clientes){
    return clientes.reduce((acc, cliente) => acc.set(cliente.id, cliente.compras) , new Map())
}

function mediaComprasClientes(clientes){
    aux = clientes.reduce((acc, cliente) => {
        ({valorTotal, qtde} = cliente.compras.reduce((acc2, item) => {
            acc2.valorTotal += item.valor 
            acc2.qtde += 1
            return acc2;
        }, { valorTotal: 0, qtde: 0 }))
        acc.valorTotal += valorTotal
        acc.qtde += qtde
        return acc;
    }
 , { valorTotal: 0, qtde: 0 })
 return aux.valorTotal / aux.qtde;
}


function aplicaFuncionalidade(clientesArray, opcao){
    try{
        verificaVetor(clientesArray);
        clientesArray.forEach(cliente => {
            verificaTipos(cliente)
        }); 
        switch (opcao) {
            case 1:
                console.log(mediaIdadeClientes(clientesArray));
                break;
            case 2:
                console.log(comprasClientes(clientesArray));
                break;
            case 3:
                console.log(mediaComprasClientes(clientesArray));
                break;
            default:
                break;
        }
    } catch(e){
        console.log(e.name + ": " + e.message)
    }
}

//passar a lista de clientes e a funcionalidade escolhida (1,2 ou 3)
console.log(aplicaFuncionalidade(listaClientes, 1))



