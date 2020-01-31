/*
*Author: Alexander Domakyaareh
*File: function the receives an array of number as an argument and returns an array of only the positive numbers
*/

let array =[1,-2,3,-9,-5,4,3,7,10];
let result =[];

const positiveArray =(args)=>{
    args.map((el)=>{
        if( el > 0){
            result.push(el);
        }
    });
    console.log(`positive numbers in [${array}] are [${result}]`);

}
positiveArray(array);
