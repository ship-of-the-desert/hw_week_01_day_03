// HW WEEK 01 DAY 03

/*currencyConverter(currency, amount)
Define a function currencyConverter that takes two arguments an amount and
 a currency (USD, GBP, EGP, BD) and returns the converted version of the amount in Riyals.
  Use the if-then-else construct available in Javascript.

Hint :

1 Riyal = 4.68 Egyptian pound
1 Riyal = 0.10 Bahraini dinar*/

var currencyConverter=function(currency, amount){
    if(currency == 'USD'){
        console.log(amount+' USD equal to '+(amount*3.75)+' SAR')  
    }
    if(currency == 'GBP'){
        console.log(amount+' GBP equal to '+(amount*4.97)+' SAR') 
    }
    if(currency == 'EGP'){
        console.log(amount+' EGP equal to '+(amount*0.21)+' SAR') 
    } 
    if(currency == 'BD'){
        console.log(amount+' BD equal to '+(amount*10)+' SAR') 
    }  
    else if(currency != 'USD' && currency != 'GBP' && currency != 'EGP' && currency != 'BD') {
        console.log('Please enter one of the following currencies (USD, GBP, EGP, BD)')
    }
}



/*isCharacterAVowel(character)
Write a function isCharacterAVowel that takes a character 
(i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.

A, E, I, O, U
*/


var isCharacterAVowel=function(character){
    if(character == 'A' || character == 'E' || character == 'I' || character == 'O' || character == 'U'){
        console.log(true)
    } else {
        console.log(false)
    }
    }



/*pow(base, exponent)
Define a function pow that replicates the Math.pow() method in JavaScript's Math object.*/


var pow=function(base, exponent){
    if(exponent == 0){
        return console.log(1)
    }
    else if (exponent == 1){
        return console.log(base)
    }
    else {
        return console.log(base ** exponent)
    }
}
    
