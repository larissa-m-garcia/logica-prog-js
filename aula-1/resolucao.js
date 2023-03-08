//Criar a funcao getCharFrequencies. Essa funcao deve receber uma string e devolver
//a frequencia de cada caracter da string.

var str1 = 'world';
var str2 = 'rekqodlw';

var str3 = 'codewars';
var str4 = 'cedewaraaossoqqyt';

var str5 = 'steak';
var str6 = 'katas';

var str7 = '';
var str8 = 'a';

function getCharFrequencies(s){
    var mapa = new Map();
    for(c of s){
        if(mapa.get(c)){
            mapa.set(c, mapa.get(c)+1);
        }
        else{
            mapa.set(c, 1);
        }
    }
    return mapa;

}

// console.log(getCharFrequencies("asdffff"));

// getCharFrequencies com reduce.
function getCharFrequencies2(s) {
    return [...s].reduce((acc, c) => {
        if(acc.get(c)) {
            return acc.set(c, acc.get(c) + 1);
        } else {
            return acc.set(c, 1);
        }
    }, new Map());
}

// console.log(getCharFrequencies2("asdfff"));

//Criar a funcao contem onde serao passadas duas strings (s1 e s2).
//contem? devera verificar se os caracteres (com quantidade) de s1 estao contidos
//em s2. Retorna true ou false.

function contem(s1, s2){
    let objFreqS1 = getCharFrequencies(s1);
    let objFreqS2 = getCharFrequencies(s2);
    if(objFreqS2.size === 0 ||
       objFreqS1.size === 0 ||
       objFreqS1.size > objFreqS2.size){
        return false
    }
    else{
        for(k of objFreqS1.keys()){
            if(objFreqS1.get(k) > objFreqS2.get(k) ?? 0){
                return false;
            }
        }
    return true;
    }

}

console.log(contem(str1, str2)); // true
console.log(contem(str3, str4)); // true
console.log(contem(str5, str6)); // false
console.log(contem(str7, str8)); // false
console.log(contem(str8, str7)); // false