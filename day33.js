/*
*Author: Alexander Domakyaareh
*File: write a function which will compute the average mark of students
*/

const avgMark = (marks) =>{
    let total = 0;
    marks.map(el=>{
        total += el ;
        
    })
    let average = total/ marks.length;
    return average;
}

let scores =[75,85,52,58,59]

console.log(avgMark(scores));
