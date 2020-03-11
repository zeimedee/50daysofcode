/*
*Author: Alexander Domakyaareh
*File: filter an array of numbers and strings and return an new array containing only the numbers
*/

const filterList = (list) => {
    let result = list.filter(el=> Number.isInteger(el));
    return result;
}

var array = [1,3,2,'alex', '76', 4, 'mit'];

console.log(filterList(array));

