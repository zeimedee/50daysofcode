/*
*Author: Alexander Domakyaareh
*File: calculate the sum of digits of an positive integer
*/

const sumOfDigits = (num) =>{
        let sum = 0;
        let str = num.toString();
        str.split('').map(
            el =>{
                nnum = parseInt(el)
                sum += nnum;
            }
        )
        return sum;
}


console.log(sumOfDigits(51));


