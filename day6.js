/*
*Author: Alexander Domakyaareh
*File: calculate sum of all even numbers between 10 and 30
*/
var sum = 0;

for (let i = 10; i <= 30; i++) {
    if(i%2 == 0){
        console.log(`${sum} + ${i} = ${sum += i}`)
       
    }
    
}
console.log(`sum of even numbers between 10 and 30 is ${sum}`);
