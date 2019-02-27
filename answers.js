

// currencyConverter(currency, amount)










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

  function exponend (x,n){
    console.log(Math.pow(x, n));
}
    exponend(7,3);