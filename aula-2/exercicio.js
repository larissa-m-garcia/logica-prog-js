// implementar uma funcao de ordem superior chamada remover.
// seu comportamento eh o contrario da funcao filter, entao
// caso o predicado avalie para verdadeiro para um certo item,
// ele deve ser removido do vetor.

function remover(pred, vetor) {
  return vetor.filter((nome) => !(nome == pred));

}

function remover2(pred, vetor) {
  const novoVetor = [];
  for (nome of vetor)
    if(!(pred == nome)) novoVetor.push(nome);
  return novoVetor;
}

// testar a funcao remover com o seguinte vetor

const nomesUsuarios = [
    "Luiz Julio",
    "Davi Marcelo",
    "Augusto César",
    "Laura Heloisa",
    "Eliane Louise",
  ];

  console.log(remover2("Laura Heloisa", nomesUsuarios))