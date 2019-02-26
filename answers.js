
//Nora Alkhunifer 
// currency Converter method 1st 
function currencyConverter(currency, amount) {
    if (currency == "USD")
        return amount * 3.75;
    else if (currency == "GBP")
        return amount * 4.95;
    else if (currency == "EGP")
        return amount * 0.21;
    else if (currency == "BD")
        return amount * 9.95;
    else
        return "I DON'T KNOW";
}

console.log(currencyConverter("USD", 50) + " Riyals");
console.log(isCharacterAVowel('s'));

//2nd the vowel letter sol.
function isCharacterAVowel(character) {
    switch (character.toLowerCase()) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
            break;
        default:
            return false;
    }
}

//power function by recalling the function until we reach the final exp that is 0 
function power(base, exponent) {
    if (exponent > 0 && exponent >= 1)
        return base * power(base, exponent - 1);
    else if (exponent < 0  && exponent <= -1)
        return 1 / power(base, -exponent);
    else if (exponent == 0)
        return 1;
    else if (exponent > 0 && exponent < 1)
        return Math.sqrt(base);
    else
        return NaN;


}
console.log(power(7, 3));
// expected output: 343
console.log(Math.pow(9, 1.5));

console.log(power(4, 0.5));
// expected output: 2

console.log(power(7, -2));
// expected output: 0.02040816326530612
//                  (1/49)

console.log(power(-7, 0.5));
// expected output: NaN

Math.ceil()
