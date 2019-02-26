function currencyConverter(num,cur){
    if (cur=="usd"){
        var sr=num*3.75
        return (num+"USD = "+sr+"SR")
    }
    else if (cur=="gbp"){
        var sr=num*4.98
        return (num+"GBP = "+sr+"SR")
    }
    else if (cur=="egp"){
        var sr=num*4.68
        return (num+"EGP = "+sr+"SR")
    }
    else if (cur=="bd"){
        var sr=num*0.10
        return (num+"BD = "+sr+"SR")
    }
}
console.log("currency Converter: ");

console.log(currencyConverter(3,"usd"));
console.log(currencyConverter(10,"gbp"));
console.log(currencyConverter(22,"egp"));
console.log(currencyConverter(77,"bd"));



// _____________________________________________ //
function isCharacterAVowel(character){
    if (character=="A" || character=="a"){
        return true;
    }
    else if (character=="O" || character=="o"){
        return true;
    }
    else if (character=="E" || character=="e"){
        return true;
    }
    else if (character=="I" || character=="i"){
        return true;
    }
    else if (character=="U" || character=="u"){
        return true;
    }
    else {
        return false;

    }

}
console.log("is Character A Vowel ?? ");
console.log(isCharacterAVowel("s"));
console.log(isCharacterAVowel("a"));
console.log(isCharacterAVowel("U"));


// ____________________________________________________________ //



function pow(base, exponent){
    var c=1;
    var i=0;
    for(i=0; i<exponent; i++){
        c=c*base;
    }
    return c;
    

}
console.log(pow(2,3));







