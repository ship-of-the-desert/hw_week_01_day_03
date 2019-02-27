let moneyAmount =prompt("How much money Do you have ? " , 0) ;
let Currency =prompt("what a currency do you want to conver " , 0 ) ;
var riayls ;
var USD,GBP,EGP,BD ;
function currencyConverter (x,y)
if (currency == USD)
{
    riayls = moneyAmount * 3.75 ;
    return (riayls);
}
else if (Currency == GBP)
{
   riayls = moneyAmount * 4.68 ;
   return (riayls);
}
else if (Currency == EGP)
{
   riayls = moneyAmount / 4.67 ;
   return (riayls);
}
else if (Currency == BD)
{
   riayls = moneyAmount * 0.10 ;
   return (riayls);
}

currencyConverter(z,y) ; // Cuurency converter

//------------------------

var isCharacterAVowel = function(letter) {

    var vowels = ["a", "e", "i", "o", "u"];

    for(var i = 0; i < vowels.length; i++){ 
        if(letter === vowels[i]){
            return true;
         }
    }

    return false;

}
isCharacterAVowel (a) ; // to check if tha a vowel or not

// ----------------

function pow(base, power) {
    var result = 1
    for(var i =1; i<=power; i++) {
        result = result * base
    }
    return result ;
}

   pow(2,2) ; // math power