// trabalhando com strings

let string1 = 'Uma string qualquer...';
let string2 = string1.replace("...", "!");
let string10 = string1.replaceAll(" ", ".");

// console.log(string1);
// console.log(string2);
// console.log(string10);

let string3 = string2.concat(" Algo mais aqui!");


// console.log(string2 + " Algo mais aqui!");

// console.log(string3);

string2 = 'Uma string qualquer!';


let string4 = string2.slice();
let string5 = string2.slice(2);
let string6 = string2.slice(0, 5); // [ [

// console.log(string4);
// console.log(string5);
// console.log(string6);

let string7 = string2.split(" ");

// console.log(string7);

// convertendo string para numeros

let n1 = parseInt("19");
let n2 = parseInt("122.4");

let n3 = parseFloat("1.4");

// console.log(NaN + 2);

// console.log(n1);
// console.log(n2);
// console.log(n3);


// exercicios

// escrever uma funcao que recebe uma URL
// e deve retornar a query-string dela como um 
// dicionario.

const URL1 = "https://ada.tech/?nome=Outro+Nome&param2=10&param3=10&param4=10";



// console.log(parseQueryString(URL1));

// Utilizar a funcao implementada acima para
// trazer a soma de todos os parametros da query string
// que sao numeros;

