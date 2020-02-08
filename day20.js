/*
*Author: Alexander Domakyaareh
*File:create a function the accepts 2 arrays and return an array with elements in the first array but not in the second
*/
let array1 =[1,2,3,4,5,6];
let array2 =[1,2,4,9,7,8];

const scan = (a1,a2) => {
        let a1v = a1.filter(val => !a2.includes(val))
        return a1v;
        
}
console.log(`the elements in array [${array1}] which are not in array [${array2}] are [${scan(array1,array2)}]`);

