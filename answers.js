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
function isCharacterAVowel(letter){

    letter=letter.toLowerCase();
    var vowal=true;

    if ( letter=='o' ||  letter=='a' || letter=='e' || letter=='i' || letter=='u'){
        return vowal; 
    }
    else { 
        return (!vowal); 
    }
}
console.log(isCharacterAVowel("A"));
console.log(isCharacterAVowel("b"));
//..................................


// Q 3: pow(base, exponent)

function pow(base,exponent){

  if (exponent==0){
     return 1;
  }
  if (exponent==1){
  return base;
  }
  if (isNaN (exponent)){
    return NaN;
  }
  if (isEven(exponent)){
    return pow(base * base, exponent / 2);
  }
  
 return base * pow(base * base, (exponent - 1) / 2);
  

  function isEven (number){
   if (number%2===0){
       return true;
   }
   else {
   return false;
   }
  } 
  
}
//..................................
console.log(pow(2,1));
console.log(pow(2,0));
console.log(pow(2,"k"));
console.log(pow(7,3));

// Just to compare the result with Math.pow
console.log(Math.pow(2,1))
console.log(Math.pow(2,0))
console.log(Math.pow(2,"k"))
console.log(Math.pow(7,3))



