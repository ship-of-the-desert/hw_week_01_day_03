//Name: Khuzam Shubbar

//Problem 1: currency converter

/* function that converts the amount to riyals
    inputs: amount, currency
    output: amount in riyals
*/
function currencyConverter(amount, currency) {
    switch (currency) {
        case 'USD': return 'Amount is ' + (amount*3.75) + ' Riyals';
        case 'GBP': return 'Amount is ' + (amount*4.97) + ' Riyals';
        case 'EGP': return 'Amount is ' + (amount*0.21) + ' Riyals';
        case 'BD': return 'Amount is ' + (amount*10) + ' Riyals';
    }
}

console.log(currencyConverter(20,'BD'));

//Problem 2: is character vowel

/* functions that checks if the character is a vowel or not
    inputs: character (letter)
    output: true for vowel false otherwise
*/
function isCharacterAVowel (char) {
    if (char === 'a' || char=='o' || char=='u'
            || char=='e' || char=='i') {
        return true;
    } else {
        return false;
    }
}

console.log(isCharacterAVowel('f'));

//Problem 3: pow

/* function that calculates the value of base^power
    input: base, exponent
    output: base^power
*/

function pow(base, exponent) {
    if (exponent > 1) {
        return base * pow(base, exponent-1);
    } else if (exponent==0) {
        return 1;
    } else {
        return base;
    }
}

console.log(pow(3,10));