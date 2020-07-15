/**
 * Author: Alexander Domakyaareh
 * File: is n divisible by x and y
 */

 const isDivisible = (n,x,y) => {
        if(n%x == 0 && n%y == 0){
            return true;
        }else{
            return false;
        }
        
 }


console.log(isDivisible(10,2,3));