// No desenvolvimento de APIs
// preciamos garantir que os dados de entrada
// farao sentido para o nosso sistema.
// em uma rota de cadastro de usuario, vamos receber um
// objeto JSON contendo os seguintes campos:
// nome <string>, idade <inteiro>, telefone <string>
// precisamos validar se esses dados estao de acordo com os tipos desejados.
// caso nao estejam, soltar uma excessao descrevendo o erro e o campo do erro.

// Implementar expressao regular para checagem do campo de telefone.
// deve seguir o formato (NN)NNNNN-NNNN (espaco opcional entre o ddd e o numero,
// o numero e a primeira parte do telefone pode ter 4 ou 5 digitos e o hifen tambem opcional.)

const user1 = {
    nome: null,
    idade: 20,
    telefone: "(11)999999999"
}

const user2 = {
    nome: "laura heloisa",
    idade: "29",
    telefone: "(34)999999999"
}

const user3 = {
    nome: "Augusto Cesar",
    idade: 30.3,
    telefone: "TELEFONE"
}

const user4 = {
    nome: "Eliane Louise",
    idade: 40,
    telefone: "(11) 98382-9832"
}

function NomeException(mensagem) {
    this.message = mensagem;
    this.name = "TypeError no nome";
}

function IdadeException(mensagem) {
    this.message = mensagem;
    this.name = "TypeError na idade";
}

function TelefoneException(mensagem) {
    this.message = mensagem;
    this.name = "TypeError no telefone";
}    

NomeException.prototype = TypeError.prototype;
IdadeException.prototype = TypeError.prototype;
TelefoneException.prototype = TypeError.prototype;

const regexTelefone = new RegExp("^\\([0-9]{2}\\)\\s?[0-9]{4,5}\\-?[0-9]{4}$")
// s = espaço

function verificaTipos(pessoa){
  if(typeof pessoa.nome !== 'string'){
    throw new NomeException("O nome deve ser uma string");
  } else if(!Number.isInteger(pessoa.idade) ) {
    throw new IdadeException("Idade deve ser um número inteiro");
  } else if(typeof pessoa.telefone !== 'string'){
    throw new TelefoneException("O telefone deve ser uma string");
  } else if(!regexTelefone.test(pessoa.telefone)){
    throw new TelefoneException("O telefone deve seguir o formato (NN)NNNNN-NNNN");
  }
}

const usuarios = [user1, user2, user3, user4]

usuarios.forEach(usuario => {
  try {
    verificaTipos(usuario)
    console.log(`User ${usuario.nome} lido com sucesso!`)
  } catch (e){
      console.log(e.message)
  }
})




