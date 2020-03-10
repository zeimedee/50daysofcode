/*
*Author: Alexander Domakyaareh
*File: rotate an array to the right one position
*/

const rotateRight = (array) => {
        let last = array.pop();
        array.unshift(last);
}

var ar = [1,2,3,4,5,6];
rotateRight(ar);
console.log(ar);
