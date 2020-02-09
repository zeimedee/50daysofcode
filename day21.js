/*
*Author: Alexander Domakyaareh
*File: create a function that will return the number of words in a string
*/

let sentence = "the quick brown fox jumps over the lazy dog"
const numOfWords = (str) => {
    let result = str.split(' ');
    return result.length;
}
console.log(`there are ${numOfWords(sentence)} words in '${sentence}'`);

