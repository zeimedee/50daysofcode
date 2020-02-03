/*
*Author: Alexander Domakyaareh
*File: Find the maximum number in an array of numbers
*/

let array =[0,5,6,7,5,3,8,100,3,10,5,4,1,0,3];
let maxN = 0 ;

array.map((el)=>{
    if(el >= maxN){
        maxN = el
    }
});
console.log(`the largest number in array [${array}] is ${maxN}`);
