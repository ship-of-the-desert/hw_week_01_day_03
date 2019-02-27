//convert currency to Riyal
function currencyConverter(amount,currency)
{
//checks if currency is Dollar, prints the amount then converts it to Riyal
    if(currency=="USD")
    {   
        console.log(amount+' '+currency)+' = ';
        return amount*3.75;
    }
//checks if currency is Pound , prints the amount then converts it to Riyal
        else if(currency=="GBP")
        {
            console.log(amount+' '+currency+' = ');
            return amount*4.97;
        }
//checks if currency is Egyptian pound, prints the amount then converts it to Riyal
            else if(currency=="EGP")
            {
                console.log(amount+' '+currency+' = ');
                return amount*0.21;
            }
//checks if currency is Bahraini dinar, prints the amount then converts it to Riyal
                else if(currency=="BD")
                {
                    console.log(amount+' '+currency+' = ');
                    return amount * 9.95;
                }
}
console.log(currencyConverter(10,"USD")+ " Riyal\n");
console.log(currencyConverter(10,"GBP")+ " Riyal\n");
console.log(currencyConverter(10,"EGP")+ " Riyal\n");
console.log(currencyConverter(10,"BD")+ " Riyal\n");

//checks if the character is a vowel
function isCharacterAVowel(character)
{
    //checks if the character is a vowel, then return true
    if(character=='A'||character=='a'||
       character=='E'||character=='e'||
       character=='I'||character=='i'||
       character=='O'||character=='o'||
       character=='U'||character=='u')
       {
    return true;
       }
        //checks if the character is not a vowel, then return false
       else{
           return false;
       }
}
console.log(isCharacterAVowel('m'));
console.log(isCharacterAVowel('A'));


//the function pow returns the base value to the power of the exponent
function pow(base, exponent){
if( exponent == 0)
 {
   return 1; 
} else 
   if (exponent === 1) {
       return base * exponent}
       else{
   return base * pow(base, exponent - 1)
 }
}
console.log(pow(2,3));

// function pow(base, exponent)
// {
//     if(exponent==0)
//     {
//         return 1;
//     }
//         else if (exponent % 2 == 0) 
//         {
//         return pow(base, (exponent / 2)) * pow(base, (exponent / 2)); 
//         }
//             else
//             {
//             return base * pow(base, (exponent / 2)) * pow(base, (exponent / 2));
//             }
// }