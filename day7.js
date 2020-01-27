/*
*Author: Alexander Domakyaareh
*File: function to convert celsius to fahrenheit
*/

const convert = (temp) => {
    let F = (temp * 9/5) + 32;
    console.log(`${temp} degrees celsius is ${F} fahrenheit`)
}

convert(32);