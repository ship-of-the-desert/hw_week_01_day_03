/*

// Currency Converter

function currencyConverter (amount, currency){
   if (currency === “USD”){
       return (amount * 3.75)
   } else if (currency === “GBP”){
       return (amount * 4.97)
   } else if (currency === “EGP”){
       return (amount * 0.21)
   } else if (currency === “BD”){
       return (amount * 9.95)
   }
}


console.log(currencyConverter(100,“USD”));
console.log(currencyConverter(100,“GBP”));
console.log(currencyConverter(100,“EGP”));
console.log(currencyConverter(100,“BD”));

// VOWELS

function isCharacterAVowel (letter){
 if( letter === “a” ||
     letter === “A” ||
     letter === “o” ||
     letter === “O” ||
     letter === “u” ||
     letter === “U” ||
     letter === “e” ||
     letter === “E” ||
     letter === “i” ||
     letter === “I”
      ){
   return (letter + ” is a vowel”)
 } else {
   return (letter + ” is NOT a vowel”)
 }
}

console.log(isCharacterAVowel(“I”))
console.log(isCharacterAVowel(“x”))
console.log(isCharacterAVowel(“a”))
console.log(isCharacterAVowel(“s”))

// Exponents

function pow(base, exponent)
{
  if (exponent === 0) {
   return (1);
   } else {
   return base * pow(base, exponent-1)
 }
}

console.log(pow(9, 2))
console.log(pow(23, 4))
console.log(pow(2, 9))
console.log(pow(2, 4))

//
currencyConverter(currency, amount)
Define a function currencyConverter that takes two arguments 
an amount and a currency (USD, GBP, EGP, BD) 
and returns the converted version of the amount in Riyals. Use the if-then-else construct available in Javascript.
Hint :
1 Riyal = 4.68 Egyptian pound
1 Riyal = 0.10 Bahraini dinar


function currencyConverter1(usd) {
    const result = usd * 3.75;
    console.log(`The amount of ${usd} USD equals ${result} SAR `);

}
currencyConverter1(100); 


function currencyConverter2(gbp) {
    const result = gbp * 5.5;
    console.log(`The amount of ${gbp} GBP equals ${result} SAR `);

}
currencyConverter2(1000); 


function currencyConverter3(egp) {
    const result = egp / 4.68;
    console.log(`The amount of ${egp} EGP equals ${result} SAR `);

}
currencyConverter3(4000); 


function currencyConverter4(bd) {
    const result = bd * 10;
    console.log(`The amount of ${bd} BD equals ${result} SAR `);

}
currencyConverter4(300); 

*/

function currencyConverter(currency, amount) {

    if (currency === "USD") {
        //const result = amount * 3.75;
        return (`The amount of ${amount} USD equals ${amount * 3.75} SAR `);

    } else if (currency === "GBP") {
        //const result = amount * 5.5;
        return (`The amount of ${amount} GBP equals ${amount * 5.5} SAR `);

    } else if (currency === "EGP") {
        //const result = amount / 4.68;
        return (`The amount of ${amount} EGP equals ${amount / 4.68} SAR `);

    } else (currency === "BD")
    //const result = amount * 10;
    return (`The amount of ${amount} BD equals ${amount * 10} SAR `);



}

console.log(currencyConverter("USD", 100));
console.log(currencyConverter("GBP", 100));
console.log(currencyConverter("EGP", 100));
console.log(currencyConverter("BD", 100));
