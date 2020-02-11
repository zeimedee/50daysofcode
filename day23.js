/*
*Author: Alexander Domakyaareh
*File: calculate the sum of numbers received in a comma delimited string
*/

let numbers = "1,2,3,4,5,6,7,8,9";
let sum = 0;

let array = numbers.split(',')
array.map(el =>{
     
    let num = parseInt(el)
    sum += num
});
console.log('the sum of array ' + array + ' is ' + sum)