/*
*Author: Alexander Domakyaareh
*File: write a function that returns the longest word in a sentence
*/
let long = '';
const longestWord = (input) => {
    let result = input.split(' ').map(el=>{
        if(el.length > long.length){
            long = el;
        }
    })
    return long;
}

let str = '50 days of code JavaScript challenge';
console.log(longestWord(str));
