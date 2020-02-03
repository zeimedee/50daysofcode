/*
*Author: Alexander Domakyaareh
*File: create a function that returns a boolean specifying if a number is prime or not
*/


const checkPrime = (num) =>{
    if( num === 2){ return true;}
    else if(num > 1){
        for (var i= 2; i < num; i++){
            if(num % i !== 0) return true;
            else if (num === i)return false;
            else return false;
        }
    }else{
        return false;
    }

}

console.log(checkPrime(8));
console.log(checkPrime(2));
