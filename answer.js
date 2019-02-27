
 function currencyConverter(num1,currencyUnit){

   
    if ( currencyUnit =="USD"){
        return num1*3.75
        
    }
    if ( currencyUnit =="GBP"){
        return num1*4.97
        
    }
    if ( currencyUnit =="EGP"){
        return num1*4.68
        
    }
    if ( currencyUnit =="BD"){
        return num1*0.10
        
    }
         
            
        }
        currencyConverter(1,"USD")
        currencyConverter(1,"GBP")
       currencyConverter(1,"EGP")
        currencyConverter(30,"BD")
    
    function isCharacterAVowel(name){
    
    if ( name =="a" || name =="e"|| name=="i" || name =="o" ||name =="i"){
    return true 
    }
    else
    return false
    }
    
    
    
    
    
    function pow (num1 , num2){
    
    return   num1**num2
    
    }
      console.log( pow(2,6))
     
     console.log(isCharacterAVowel("b")) 
     console.log(currencyConverter(4,"BD"))