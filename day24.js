/*
*Author: Alexander Domakyaareh
*File: create a function that returns an array with the words in a text
*/
let text = 'the quick brown fox jumps over the lazy dog';

const words = (str) => {
    let result = str.split(' ');
    return result;

}

console.log(words(text));
