// 1) Quantidade de Alunos Aprovados ===============================================

const alunos = [
    { nome: "Filipe Diogo", nota: "80" },
    { nome: "Enzo Miguel", nota: "77" },
    { nome: "Mateus Danilo", nota: "88" },
    { nome: "Olivia Stella", nota: "95" },
    { nome: "César Paulo", nota: "68" },
  ];

  function quantidadeAprovados(alunos){
    return alunos.reduce((acc, aluno) => {
        return (aluno.nota > 70) ? (acc + 1) : acc
    }, 0)
  }

  (console.log(quantidadeAprovados(alunos)))

//2) Montar nome completo de usuário ==================================================

const usuarios = [ 
    {
      "primeiroNome": "Antonio",
      "segundoNome": "Freitas",
      "terceiroNome": "Oliveira",
      "age": 35
    },
    {
      "primeiroNome": "Manuel",
      "segundoNome": "Guedes",
      "terceiroNome": "Peixoto",
      "age": 23
    }        
];

function montarNomesCompletos(usuarios){
    return usuarios.map((usuario) => {
        return {
            "nome": usuario.primeiroNome.concat(" ", usuario.segundoNome, " ", usuario.terceiroNome),
            "age":usuario.age
        }
    })
}
console.log(montarNomesCompletos(usuarios))

//3) Remover Feedbacks Duplicados ====================================================
const feedbacks = [
    "Melhorar responsividade do site",
    "Erros confusos",
    "Os botões são intuitivos",
    "Erros confusos",
  ];

function removerFeedbacksDuplicados(feedbacks){
    return feedbacks.reduce((acc, feedback) => {
        return (acc.includes(feedback) ? acc : [...acc, feedback])
    },[])
}

console.log(removerFeedbacksDuplicados(feedbacks))

//4) Verificar em que posição da fila o paciente está ==================================
const pacientes = [
  "Bento Raimundo Cavalcanti",
  "Oliver Samuel Cardoso",
  "Geraldo Ryan Danilo Carvalho",
  "Isis Tatiane Sophie Santos",
  "Clarice Esther Moraes",
];

function verificarPosicaoPacienteFila(pacienteProcurado){
  return pacientes.indexOf(pacienteProcurado) + 1
}

console.log(verificarPosicaoPacienteFila("Isis Tatiane Sophie Santos"));

// 5) Verificar se o usuário está autenticado ==========================================
const usuarios2 = [
  { nome : 'Tiago', autenticado: true },
  { nome : 'Miguel', autenticado: false},
  { nome : 'Priscila', autenticado: true },
  { nome : 'Luiz', autenticado: false},
  { nome : 'Ricardo', autenticado: true },
];

function verificarUsuarioAutenticado(usuarioBuscado){
  return usuarios2.find((usuario) => usuario.nome == usuarioBuscado)
}

console.log(verificarUsuarioAutenticado('Miguel'));