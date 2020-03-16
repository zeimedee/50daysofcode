/*
*Author: Alexander Domakyaareh
*File: write a function to remove all vowels in a string
*/

let vowels = ['a','e','i','o','u','A','E','I','O','U']

const noVowels = (str) => {
    let arr = str.split('');
   
    let res = arr.filter(val => !vowels.includes(val) );
    let result = res.join('')
     
    return result;
}
let string = 'corona virus'

console.log(noVowels(string));
