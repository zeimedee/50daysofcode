/*
*Author: Alexander Domakaareh
*File: shuffle an array of strings
*/

const shuffle = (str) => {
    var m= str.length, i,t ;
    //while there remains elements to be shuffled
    while(m){
            //pick a random element
            i = Math.floor(Math.random() * m--)

            //and swap with the current element
            t = str[m];
            str[m] = str[i];
            str[i] = t;
    }     
        return str;
}

var array =['alex', 'zoro', 'diego', 'iggy', 'zieme']

console.log(shuffle(array));
