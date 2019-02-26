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
    output:
*/