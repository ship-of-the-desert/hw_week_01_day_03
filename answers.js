// currencyConverter(currency, amount)
function currencyConverter(currency , amount){
var amount1; 


    currency.toUpperCase();
  if (currency ==="USD"){
    currency = " US duller";
    amount1 = amount / 3.75;
    return console.log(amount + "Riyal = "  +amount1 + currency )
  }
   else if (currency === "GBP"){
    currency = " egeph puond "
    amount1 = amount/ 4.967;
    return console.log(amount + "Riyal = " +amount1 + currency )
   }
   else if (currency === "EGP"){

    amount1 = amount1 * 4.68;
    return console.log(amount + "Riyal = " +amount1 + currency )
   }
   else if (currency === "BD"){

    amount1 = amount1 * 10;
    return console.log(amount + "Riyal = " +amount1 + currency )
   }
   else { 
    return console.log(" rung inpot")

   }

}
currencyConverter("USD",5);


//
boolean result;
function isCharacterAVowel(character){

    
    character.toUpperCase;
        if(character == "A" || character== "E" || character == "I" || character == "O" || character == "U" ) {
            result = true;
        }
        else{
            result = false;
        }
    return result;
    }



//pow(base, exponent)

function pow(base, exponent){
return Math.pow(base, exponent)

}
function pow(base,exponent){
    return Math.pow(base, exponent)
    
    }
    console.log(pow(2,4));

