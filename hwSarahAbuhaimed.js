//Q1 ,answer
function currencyConverter(amount, currency) {
    if (currency == 'USD') {
        return amount * 3.75;
    } else if (currency == 'EGP') {
        return amount * 4.68;
    }
    else if (currency == 'BD') {
        return amount * 0.10;
    }

}
console.log(currencyConverter(1, 'EGP'));

//Q2 ,answer
function isCharacterAVowel(character) {
    if (character == 'a' || character == 'e' || character == 'i'
        || character == 'u' || character == 'o') {
        return true;
    } else {
        return false;
    }
}
console.log(isCharacterAVowel('f'));
//Q3 ,answer
function pow(){
    console.log(Math.pow(2,4));
}
pow()