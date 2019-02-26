/*
/ // A1:
//currencyConverter
function currencyConverter( amount , currency)
{
  // if ( amount.isNaN() == true)
    //{
//console.log("please enter Number");
    //}
    //else
   // {
        var Riyal ;

if ( currency === 'USD')
{
    Riyal = amount * 3.75 ;
}
if(currency === 'GBP')
{
    Riyal = amount * 4.9696 ;
}
if(currency === 'EGP')
{
    Riyal = amount * 0.21418 ;
}
if(currency === 'BD')
{
    Riyal = amount * 9.9734 ;
}

return Riyal;
}
//}
console.log(currencyConverter( 1 , 'USD'));
console.log(currencyConverter( 1 , 'GBP'));
console.log(currencyConverter( 1 , 'EGP'));
console.log(currencyConverter( 1 , 'BD'));
*/
///////////////////////////////////////////

//A2:
//isCharacterAVowel

function itisCharacterAVowel (char)
{
var char_LowCase= char.toLowerCase ();
if (char_LowCase =='a' || char_LowCase =='e' || char_LowCase =='o'||
char_LowCase =='u')

{
    return true;

}
else
{
    return false;

}
    

}

console.log(itisCharacterAVowel('a'));
console.log(itisCharacterAVowel('U'));
console.log(itisCharacterAVowel('G'));
//////////////////////////////////////