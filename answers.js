


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
       // _________________________________ //

    // the vowel letter 

    function isCharacterAVowel (char)
    {
        if (char =="A" || char =="a"){
            return true;
        }
        else if (char =="O" || char =="o"){
            return true;
        }
        else if (char =="E" || char =="e"){
            return true;
        }
        else if (char =="I" || char =="i"){
            return true;
        }
        else if (char =="U" || char =="u"){
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
       
    
    
