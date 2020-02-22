/*
*Author: Alexander Domakyaareh
*File:create a function to implement the caesar cipher
*/
const cypherFactor = 3;

const Ccypher = (data) => {
  let result =  data.split('').map(el=>{
        return String.fromCharCode(el.charCodeAt(0) + cypherFactor)
        
    });
    return result.join('');
}

console.log(Ccypher('alexander new cipher'));
