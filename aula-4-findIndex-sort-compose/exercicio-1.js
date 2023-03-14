// reimplementar o exercicio da aula 1 de forma funcional
// utilizando funcoes de ordem superior e sem if statements

var str1 = 'world';
var str2 = 'rekqodlw';

var str3 = 'codewars';
var str4 = 'cedewaraaossoqqyt';

var str5 = 'steak';
var str6 = 'katas';

var str7 = '';
var str8 = '';

//Criar a funcao getCharFrequencies. Essa funcao deve receber uma string e devolver
//a frequencia de cada caracter da string.
function getCharFrequencies(s){
    return [...s].reduce((acc, char) => { 
        return  (acc.get(char)) ? (acc.set(char, acc.get(char) + 1)) : (acc.set(char, 1));       
      }, new Map())
}


//Criar a funcao contem onde serao passadas duas strings (s1 e s2).
//contem devera verificar se os caracteres (com quantidade) de s1 estao contidos
//em s2. Retorna true ou false.
function contem(s1, s2) {
    let str2 = getCharFrequencies(s2);
    return !(s1.length === 0 || s2.length === 0 || s1.length > s2.length) &&
            [...getCharFrequencies(s1)].reduce((acc, letter) => (str2.get(letter[0]) ? str2.get(letter[0]) >= letter[1] : false) && acc
        , true);
}


console.log(contem(str1, str2)); // true
console.log(contem(str3, str4)); // true
console.log(contem(str5, str6)); // false
console.log(contem(str7, str8)); // false
console.log(contem(str8, str7)); // false





// Exercicio extra
// Escrever a funcao compose para que possamos passar um numero qualquer de funcoes
