/*
*Author: Alexander Domakyaareh
*File: print first 10 fibonacci numbers without recursion
*/

let fib=[0]
let currentNumber=1;
let previousNumber = 0
let temp;

for (let i = 1; i < 10; i++) {
temp = currentNumber;
currentNumber = previousNumber + currentNumber;
previousNumber = temp;
fib.push(previousNumber)


}
console.log(`the first 10 fibonacci numbers are [${fib}]`);
