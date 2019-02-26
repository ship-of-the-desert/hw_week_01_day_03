// Problems

// Q1   currencyConverter(currency, amount)
function currencyConverter(currency, amount){
    if(currency.toUpperCase() == 'USD'){
        return amount*3.75
    }
    else if(currency.toUpperCase() == 'GBP'){
        return amount*4.97
    }
    else if(currency.toUpperCase() == 'EGB'){
        return amount*0.21
    }
    else if(currency.toUpperCase() == 'BD'){
        return amount*9.95
    }
    else{
        return "Enter a valid currency, please. We only convert USD, GBP, EGB and BH."
    }
}

//console.log(currencyConverter('bd',2));



// Q2   isCharacterAVowel(character)
function isCharacterAVowel(character){
    if(character.toUpperCase() ===  'A' ||
        character.toUpperCase() === 'E' ||
        character.toUpperCase() === 'I' ||
        character.toUpperCase() === 'O'){
        return true;
    }
    else{
        return false
    }
}

//console.log(isCharacterAVowel('a'));



// Q3   pow(base, exponent)
function pow(base, exponent){ 
    if(isNaN(base) || isNaN(exponent)){
    return 'Enter valid numbers'
    }
    else{
        return base ** exponent
    }
}

//console.log(pow(3, 3));

