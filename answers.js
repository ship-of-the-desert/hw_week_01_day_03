


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
