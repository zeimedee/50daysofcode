/*
*Author: Alexander Domkayaareh
*File:  calculate average of an array of 10 numbers
*/

let nums =[1,2,3,4,5,6,7,8,9,10]
let sum = 0;

nums.map((el)=>{
    sum += el;
});

console.log(`the average of ${nums} is ${sum/nums.length} `);
