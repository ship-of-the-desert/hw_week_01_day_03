// First HomeWork;
function currencyConvertor(currency, amount) {
    
    var egiptianPound = "Egypt";
    var egyptToRiyal = (amount * 4);
    var bahrainDinar = "Bahrain";
    var bahrainToRiyal = (amount *0.10);
    var gBP = "Englend"
    var gBPtoRiyal = (amount * 0.20);
    var uSD = "USA";
    var usdToRiyal = (amount * 0.27);
    

    if (currency == egiptianPound) {
        console.log(egyptToRiyal +" Riyals");
    }
    if (currency == bahrainDinar) {
        console.log(bahrainToRiyal+" Riyals");
    }
    if (currency == gBP) {
        console.log( gBPtoRiyal+" Riyals" );   
    }
    if (currency == uSD) {
        console.log( usdToRiyal+" Riyals");
    }
}


currencyConvertor("Bahrain", 20);
currencyConvertor("Englend", 20);
currencyConvertor("USA", 20);
currencyConvertor("Egypt", 20); 


//homework Two;

function isCharacterAVowel(character){
    if (character=="Y" || character=="y"){
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
 
 
 //Third HomeWork 
 
 
 
 function pow(base, exponent){
    var c=1;
    var i=0;
    for(i=0; i<exponent; i++){
        c=c*base;
    }
    return c;
 
 
 }
 console.log(pow(2,3));