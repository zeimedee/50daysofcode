/*
*Author: alexander Domakyaareh
* File: create a phone number from a array of numbers
*/
let digits = [1,2,3,4,5,6,7,8,9,0]

const createPhone = (num) => {

    let a = num.splice(0,3).join('');
    let b = num.splice(0,3).join('');
    let c = num.splice(0,4).join('')   
     return `(${a}) ${b}-${c}`

}


console.log(createPhone(digits));

