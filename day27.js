/*
*Author: Alexander Domakyaareh
*File: create a function that will convert a string to an array of its ASCII codes of each character
*/


const toAscii = (str) => {

    let result = str.split('').map(el=>{
        return el +' = '+ el.charCodeAt(0); 
    })
  return result;
}
let text = 'alex123';

console.log(toAscii(text));
