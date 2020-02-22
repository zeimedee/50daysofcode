/*
*Author: Alexander Domakyaareh
*File: implement the bubble sort algorithm
*/
 var swaps = 0;
  var isSorted = false ; 

const bubbleSort = (input) => {

    for (let i = 0; i <= input.length; i++) {
         for(let j = 0; j <= input.length; j++){
            if(input[j] > input[j+1]){
              let temp = input[j];
                input[j] = input[j+1];
                input[j+1] = temp;    
                
         }      
         swaps += 1; 
         }

    }
    return input;


}

let test =[2,3,5,8,1,4]
console.log(bubbleSort(test));
console.log(swaps);
