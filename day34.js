/*
*Author: Alexander Domakyaareh
*File: write a function which separates odd and even numbers
*/

let odd =[];
let even =[];

const oddOrEven = (num) =>{
        num.map(el=>{
            if(el % 2 == 0){
                even.push(el)
            }else{
                odd.push(el)
            }
        })
        let results = `odd numbers are ${odd}\neven numbers are ${even}`
        return results;
        
}

let sample = [1,2,3,4,5,6,7,8,9,10];

console.log(oddOrEven(sample));
