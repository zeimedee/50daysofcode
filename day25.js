/*
*Author: Alexander Domakyaareh
*File: create a function which will convert a csv text into a bi-dimensional array
*/

var data ="alex,zieme,0206000359 \n" +
           "zoro,dog,17-01-2019";


const csvToArray = (data) => {
        var arLines = data.split('\n');
         
        for(var i = 0; i< arLines.length; i++  ){
            var arline = arLines[i].split(';')
            arLines[i] = arline;

        }

        return arLines;
}

var ar = csvToArray(data);

console.log(ar);
