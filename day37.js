/*
*Author: Alexander Domakyaareh
*File: rotate an array to the left one position
*/

const rotateLeft = (array) => {
        var first = array.shift();
        array.push(first);
}

var ar = [1,2,3,4,5,6]
rotateLeft(ar);
console.log(ar);
