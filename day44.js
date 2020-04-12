/*
*Author: Alexander Domakyaareh
*File: duplicate encode if a character in a string a string appears more than once replace each occurance with ')' else replace '('
*/


let result =[];

const duplicate = (str) => {       
       str.split('').map((val)=>{
           let reg = new RegExp('[^' + val + ']', 'ig');

           if(str.replace(reg.ignoreCase,'').length > 1){
               result.push(')')
           }else(result.push('('))

       })
        
   return result.join('');
    
}
console.log(duplicate('recede'));
