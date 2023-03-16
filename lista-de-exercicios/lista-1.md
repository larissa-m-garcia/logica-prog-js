## 1) Quantidade de Alunos Aprovados

#### Ao final do curso de javascript os alunos devem receber suas notas e saberem se foram aprovados ou não.
#### Antes de publicar as notas o professor desse curso gostaria de saber quantos alunos passaram.
#### Sabendo que para ser aprovado o aluno deva ter uma nota maior do que 70, analise a lista abaixo:

```
const alunos = [
  { nome: "Filipe Diogo", nota: "80" },
  { nome: "Enzo Miguel", nota: "77" },
  { nome: "Mateus Danilo", nota: "88" },
  { nome: "Olivia Stella", nota: "95" },
  { nome: "César Paulo", nota: "68" },
];
```

- Para resolver esse problema, crie uma função chamada quantidadeAprovados que deve:

1. Receber um array de objetos onde cada objeto seja composto pelos atributos nome e nota.
2. Retornar a quantidade de alunos aprovados.



## 2) Montar nome completo de usuário

#### Um sistema foi projetado para colher dos usuários durante o cadastro seu primeiro nome, segundo nome e terceiro nome. Após alguns anos os desenvolvedores notaram que nunca precisaram desses valores de forma separada e agora precisam inserir um só atributo.
#### A lista original é assim:

```
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
```

#### Agora eles precisam que a lista fique assim:

```
const usuarios = [ 
    {
      "nome ": "Antonio Freitas Oliveira",
      "age": 35
    },
    {
      "nome ": "Manuel Guedes Peixoto",
      "age": 23
    }        
];
```

- Para resolver esse problema, crie uma função chamada montarNomesCompletos que deve:

1. Receber um array de objetos onde cada objeto seja composto pelos atributos primeiroNome, segundoNome e terceiroNome.
2. Retornar um array nos quais os objetos tenham apenas os atributos nome e idade. 
3. Esse novo atributo idade deve ser a junção dos antigos atributos primeiroNome, segundoNome e terceiroNome.



## 3) Remover Feedbacks Duplicados

#### Um consultor de marketing sugeriu que uma empresa coletasse feedbacks de seus usuários.
#### Após o fim da coleta eles perceberam que vários usuários reportaram as mesmas sugestões.
#### Segue o modelo coletado:

```
const feedbacks = [
  "Melhorar responsividade do site",
  "Erros confusos",
  "Os botões são intuitivos",
  "Erros confusos",
];
```

- Para resolver esse problema, crie uma função chamada removerFeedbacksDuplicados que deve:

1. Receber um array de string.
2. Retornar esse array sem valores duplicados. 



## 4) Verificar em que posição da fila o paciente está

#### Um hospital acaba de atualizar seu sistema de chamada por senhas. Bem como já funcionava, esse sistema tem uma fila preferencial e cada paciente preenche seu nome ao dar entrada no hospital.
#### Por estar ainda em desenvolvimento, a lista é composta apenas pelo nome completo das pessoas.
#### O secretário fará a chamada do próximo paciente, porém para gerar o relatório de tempo de espera ele precisa saber qual a posição do paciente na fila.
#### A lista que o secretário possui é essa aqui:

```
const pacientes = [
  "Bento Raimundo Cavalcanti",
  "Oliver Samuel Cardoso",
  "Geraldo Ryan Danilo Carvalho",
  "Isis Tatiane Sophie Santos",
  "Clarice Esther Moraes",
];
```

- A próxima da fila é "Isis Tatiane Sophie Santos",  agora o secretário precisa saber qual a posição dela na fila, lembrando que a posição 0 não faz sentido para ele, devemos começar da posição 1.
- Para resolver esse problema, crie uma função chamada verificarPosicaoPacienteFila que deve:

1. Receber uma string (nome do paciente).
2. Retornar um número com a posição do paciente da fila. A fila deve comecar da posicao 1.



## 5) Verificar se o usuário está autenticado

#### Num sistema responsável pela transferência usando PIX, a base de usuários é atualizada em tempo real. Em determinado momento um usuário solicite realizar um PIX e é necessário saber se realmente aquele usuário está autenticado corretamente na plataforma.
#### A lista original é assim:
    
```
const usuarios = [
    { nome : 'Tiago', autenticado: true },
    { nome : 'Miguel', autenticado: false},
    { nome : 'Priscila', autenticado: true },
    { nome : 'Luiz', autenticado: false},
    { nome : 'Ricardo', autenticado: true },
];
```

- Caso seja informado o nome “Luiz” por exemplo, a resposta deve ser essa:
    
```    
{ nome : 'Luiz', autenticado: false }
```

- Para resolver esse problema, crie uma função chamada verificarUsuarioAutenticado que deve:

1. Receber uma string.
2. Retornar um objeto cujo atributo "nome” atenda à busca.
3. Utilize a função `find()` no seu desenvolvimento.