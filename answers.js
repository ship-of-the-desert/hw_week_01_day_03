// Q 1: currencyConverter(currency, amount)

function currencyConverter(amount,currency){
    var amountConverted;
  if (currency=="USD"){
      amountConverted= amount *  0.27;
      return  (amount+' Riyals = '+ amountConverted +" United States Dollar"); 
    }   
   else if (currency=="GBP"){
    amountConverted=amount* 0.20;
      return (amount+' Riyals = '+ amountConverted +" British Pound Sterling"); 
    }
    else if (currency=="EGP"){
        amountConverted=amount* 4.68;
    return (amount+' Riyals = '+amountConverted + " Egyptian pound");
    }
    else if (currency=="DB"){
        amountConverted=amount*  0.10;
    return (amount+' Riyals = '+amountConverted + " Bahraini dinar");
    }
    else {
    return ("Please Enter the ammount in SR and currency USD, GBP, EGP, and BD ")
    }

}

console.log(currencyConverter(1,"USD"))
console.log(currencyConverter(1,"GBP"))
console.log(currencyConverter(1,"EGP"))
console.log(currencyConverter(1,"DB"))
//..................................


// Q 2: isCharacterAVowel(character)



//..................................


// Q 3: pow(base, exponent)

//..................................