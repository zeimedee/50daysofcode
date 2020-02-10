/*
*Author: Alexander Domakyaareh
*File: create a function that will capitalize the first letter in a string
*/


let str = 'javascript is bae';

const capitalize = (input) => {
    let result = input.split(' ').map(el =>{
      return  el.charAt(0).toUpperCase() + el.slice(1);
    });

    return result.join(" ");
}

console.log(capitalize(str));
