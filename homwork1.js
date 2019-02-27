// Areej 

function currencyConverter(currency , amount )
{
    if (currency == "USD")
    return amount * 3.75;

     else if (currency == "GBP")
     return amount * 4.95;

   else if  (currency == "EGP")
   return amount * 0.21;

         else if (currency == "BD")
         return amount * 9.95;

         else 
         return " google it ;)";
}
        console.log(currencyConverter("USD", 4)+ "riyals");



// P 2: isCharacterAVowel(character)
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


// P 3: pow(base, exponent)

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
// Just to compare the result with Math.pow
console.log(Math.pow(3,10))
