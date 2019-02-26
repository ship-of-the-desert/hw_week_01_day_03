function convertCurrency(value,from) {
    switch (from) {
        case 'USD' : return value*3.75; break;
        case 'GBP' : return value*4.98; break;
        case 'EGP' : return value*0.21; break;
        case 'DB' : return value*9.95; break;
        default : return "please choose between USD, GBP, EGP or BD";
    }
}
console.log(convertCurrency(1,'USD'));
console.log(convertCurrency(1,'GBP'));
console.log(convertCurrency(1,'EGP'));
console.log(convertCurrency(1,'DB'));

function isItVowel(letter) {
    if (letter.length===1) {
    switch (letter.toLowerCase()) {
        case 'a': return true; break;
        case 'e': return true; break;
        case 'i': return true; break;
        case 'o': return true; break;
        case 'u': return true; break;
        default: return false; break;
        }
    } else {
        return 'please enter a single letter'
    }
}
console.log(isItVowel('U'))
console.log(isItVowel('x'))

function pow(num,power) {
    return num**power
}
console.log(pow(5,2))