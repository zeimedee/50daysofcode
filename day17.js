/*
*Author: Alexander Domakyaareh
*File: function to reverse a string
*/

let str = 'alexander';

const reverseString=(str)=>{
    return str.split('').reverse().join('');
}

console.log(`the reverse of ${str} is ${reverseString(str)}`);
