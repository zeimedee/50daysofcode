/*
*Author: Alexander Domakyaareh
*File: create a function that accepts 2 arrays of numbers a returns a result of an
*array with numbers found in array 1 and 2 but not in both 
*/

let array1 = [1,2,3,4,5,6];
let array2 = [1,2,3,9,0,7]
let result;


const scan =(a1,a2)=>{
    let a1v = a1.filter(val => !a2.includes(val));
    let a2v = a2.filter(val => !a1.includes(val));
    return result = a1v.concat(a2v); 
    
}


console.log(`the numbers found in array [${array1}] and [${array2}] but not in both are [${scan(array1,array2)}]`);
