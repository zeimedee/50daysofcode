/*
*Author: Alexander Domakayaareh
*File: function to convert fahrenheit to celsius
*/

 const convert = (temp) => {
     let F = (temp - 32) * 5/9;
     console.log(`${temp} Fahrenheit is ${F} degrees Celsius`);
     
 }

 convert(32);