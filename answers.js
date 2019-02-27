// Cuurency converter 

let moneyAmount =prompt("How much money Do you have ?",0);
let currency =prompt("what a currency do you want to conver",0);
var riayls ;

function currencyConverter (a,b)
if (currency == USD)
{
     riayls = moneyAmount * 3.75 ;
     return (riayls);
}
 else if (currency == GBP)
{
    riayls = moneyAmount * 4.68 ;
    return (riayls);
}
  else if (currency == EGP)
{
    riayls = moneyAmount / 4.67 ;
    return (riayls);
}
  else if (currency == BD)
{
    riayls = moneyAmount * 0.10 ;
    return (riayls);
}

currencyConverter(100,GBP);
//is Character A Vowel
function VowelCaracter()
{

}

function vowelCaracter(char){

    var vowels = ['a', 'e', 'i', 'o', 'u'];

    for (var i = 0; i <= vowels.length; i++){
        if (letter != vowels[i]) {
        return false;
    }
    return true;
}
}

// See if "A" is a vowel
vowelCaracter(a);



 //math power
 
 function pow(base, exponent );
 {
     var result ;
   for (var i =1 ; i <= exponen; i++){
       result= result *base ;
   }
   return result ;
}
 
 pow(8,2);
 