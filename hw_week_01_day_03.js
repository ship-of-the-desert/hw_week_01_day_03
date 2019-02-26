/*
 * Filename: c:\Users\mort8k\Documents\Courses\wdi4\ship_of_the_desert\week01\hw_week_01_day_03\hw_week_01_day_03.js
 * Path: c:\Users\mort8k\Documents\Courses\wdi4\ship_of_the_desert\week01\hw_week_01_day_03
 * Created Date: Tuesday, February 26th 2019, 5:18:46 pm
 * Author: Mortaja Alqassab <moqassa@gmail.com>
 * 
 * Copyright (c) 2019 MiSK Academy
 */

 //* Creat currencyConverter fucntion
 /**
  *
  *
  * @param {string} currency
  * @param {number} amount
  * @returns {number} convertedAmount
  */
 function currencyConverter(currency, amount)
 {
    
    var currencies = ['USD', 'GBP', 'EGP', 'BD'];
    var convertionRate = [3.75, 4.49, 0.21, 9.95];
    var convetedAmount;

    if (currencies.includes(currency))
    {
        index = currencies.indexOf(currency);
        converetdAmount = amount * convertionRate[index]; 
        return converetdAmount
    }
    else
    {
        return `Please use one of the listed currencies ${currencies}`;
    }

    console.log(currencies.indexOf(currency))
 }

 


/**
 *
 *
 * @param {string} character
 * @returns {boolean} vowel or not
 */
function isCharacterAVowel(character)
{
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(character))
    {
        return true;
    }
    else
    {
        return false;
    }
}


/**
 *
 *
 * @param {number} base
 * @param {number} exponent
 * @returns {number} The power of a number
 */
function pow(base, exponent)
{
    return base**exponent;
}


console.log(currencyConverter('RU', 1));
console.log(isCharacterAVowel('n'));
console.log(pow(10, 2));