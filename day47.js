/*
 * Author: Alexander Domakyaareh
 *File: fake binary, take a string and return 0 for numbers less then 5 and 1 for numbers above 5 in a new string
*/

const fakeBin =  (num) => {
    let result = [];
    let array = num.split("");
    array.map(val=>{
        let n = parseInt(val)
         n < 5 ? result.push(0) : result.push(1) ; 
    });
    return result.join("");
}

console.log(fakeBin("125601"));