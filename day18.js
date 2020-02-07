/*
*Author: Alexander Domakyaareh
*File: create a function that will merge 2 arrays and retuen the result as a new array
*/
let array1 = ['fried','vegetable', 'rice'];
let array2 = ['chicken','beef','sauce']

const merge=(A1,A2)=>{
    let result = A1.concat(A2);
    return  result;
}
   



console.log(`new array is [${merge(array1,array2)}]`);
