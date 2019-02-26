// HW WEEK 01 DAY 03

/*currencyConverter(currency, amount)
Define a function currencyConverter that takes two arguments an amount and a currency (USD, GBP, EGP, BD) and returns the converted version of the amount in Riyals. Use the if-then-else construct available in Javascript.

Hint :

1 Riyal = 4.68 Egyptian pound
1 Riyal = 0.10 Bahraini dinar*/

var currencyConverter=function(currency, amount){
    if(currency == 'USD'){
        console.log(amount+' USD equal to '+(amount*3.75)+' SAR')  
    }
    if(currency == 'GBP'){
        console.log(amount+' GBP equal to '+(amount*4.97)+' SAR') 
    }
    if(currency == 'EGP'){
        console.log(amount+' EGP equal to '+(amount*0.21)+' SAR') 
    } 
    if(currency == 'BD'){
        console.log(amount+' BD equal to '+(amount*10)+' SAR') 
    }  
    else if(currency != 'USD' && currency != 'GBP' && currency != 'EGP' && currency != 'BD') {
        console.log('Please enter one of the following currencies (USD, GBP, EGP, BD)')
    }
}

