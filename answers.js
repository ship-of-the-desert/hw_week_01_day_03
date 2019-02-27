

// currencyConverter(currency, amount)


function currencyconverter (x,n){
    if (n==='DB'){
        z=  x*10;
        return `${x} ${n} is ${z} SR`
    }
 
    else if (n==='EP'){
        z=  x/4.68;
        return `${x} ${n} is ${z} SR`
    }
 
    else if (n==='USD'){
        z=  x*3.75;
        return `${x} ${n} is ${z} SR`
    }
 
     else if (n==='GBP'){
        z=  x*4.95;
        return `${x} ${n} is ${z} SR`
    }
 
 }
 
 console.log(currencyconverter(20,'GBP'));







    // isCharacterAVowel(character)
    function Vowel(x) {

        var result;
      
        result = x== 'a' ||  x== 'A' ||  x== 'e' ||  x== 'E' ||  x== 'i' ||  x== 'I' ||  x== 'o' ||  x== 'O' ||  x== 'u' ||  x== 'U';
        return result;
      }
      
      var input;
      
      do {
        input = prompt("Enter a character ");
        if (input.length == 1) {
          console.log(Vowel(input));
        }
      } while (input.length != 1);





///////////////////////
// pow(base, exponent)

  function exponent (x,n){
    console.log(x**n);
}
    exponent(7,3);