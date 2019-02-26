function currencyConverter (amount, currency){
    if (currency === "USD"){
        return (amount * 3.75)
    } else if (currency === "GBP"){
        return (amount * 4.97)
    } else if (currency === "EGP"){
        return (amount * 0.21)
    } else if (currency === "BD"){
        return (amount * 9.95)
    }
}
console.log(currencyConverter(100,"USD"));
console.log(currencyConverter(100,"GBP"));
console.log(currencyConverter(100,"EGP"));
console.log(currencyConverter(100,"BD"));