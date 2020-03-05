/*
*Author: Alexander Domakyaareh
*File: sum of 2 
*/

var c = [];
let i = 0;

const sumOf2 = (a1,a2,s) => {

    a1.map(el=>{
        let need = s - el;
        c.push(need);
    });
        for(let j = 0 ; j < c.length; j++){
            if(c[j] + a2[j] === s){
                return true;
                break;
            }else{
                return false
            }
        }       
}

let array1 = [1,2,3,4,5];
let array2 = [1,6,4,8,9];
let sum = 6;
let result = sumOf2(array1,array2,sum);
console.log(c);
console.log(array2);
console.log(sum);

console.log(result);
