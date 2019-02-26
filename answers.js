// Currency Converter

function currencyConverter (amount, currency){
    if (currency === "USD"){
        return (amount * 3.75)
    } else if (currency === "GBP"){
        return (amount * 4.97)
    } else if (currency === "EGP"){
        return (amount * 0.21)
    } else if (currency === "BD"){
        return (amount * 9.95)
    }
}


console.log(currencyConverter(100,"USD"));
console.log(currencyConverter(100,"GBP"));
console.log(currencyConverter(100,"EGP"));
console.log(currencyConverter(100,"BD"));

// VOWELS

function isCharacterAVowel (letter){
  if( letter === "a" || 
      letter === "A" || 
      letter === "o" || 
      letter === "O" || 
      letter === "u" || 
      letter === "U" || 
      letter === "e" || 
      letter === "E" || 
      letter === "i" || 
      letter === "I" 
       ){
    return (letter + " is a vowel") 
  } else {
    return (letter + " is NOT a vowel")
  }
}

console.log(isCharacterAVowel("I"))
console.log(isCharacterAVowel("x"))
console.log(isCharacterAVowel("a"))
console.log(isCharacterAVowel("s"))

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