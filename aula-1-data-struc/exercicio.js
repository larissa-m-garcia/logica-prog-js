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
function getCharFrequencies(s) {
    return [...s].reduce((acc, char) => { //[...s] turning a string into a vector
        return  (acc.get(char)) ? (acc.set(char, acc.get(char) + 1)) : (acc.set(char, 1));       
    }, new Map())
}

//Criar a funcao contem onde serao passadas duas strings (s1 e s2).
//contem? devera verificar se os caracteres (com quantidade) de s1 estao contidos
//em s2. Retorna true ou false.

function contem(s1, s2) {
    if(s1.length === 0 || s2.length === 0 || s1.length > s2.length)
        return false
    else{
        let objStr1 = getCharFrequencies(s1);
        let objStr2 = getCharFrequencies(s2);
        for(key of objStr1.keys()){
            if(objStr1.get(key) > (objStr2.get(key) ?? 0)) //?? mean 'if undefined or null' replace for ... 0 in this case
                return false
        }
        return true
    }    

}
console.log(contem(str1, str2)); // true
console.log(contem(str3, str4)); // true
console.log(contem(str5, str6)); // false
console.log(contem(str7, str8)); // false
console.log(contem(str8, str7)); // false