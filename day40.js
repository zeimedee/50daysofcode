/*
*Author: Alexander Domakyaareh
*File: convert a decimal to binary and return the number of ones in the binary
*/

const bit = (num) => {
    let ones = 0;
    let bin = num.toString(2);
    bin.split('').map(el =>{
        if(el == 1 ){
            ones += 1;
        }
    })
    return ones;
}

console.log(bit(3));
