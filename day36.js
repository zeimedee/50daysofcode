/*
*Author: Alexander Domakyaareh
*File: Create a program to print the item prices and stock from the JSON endpoint ?
*/


const fetch = require('node-fetch');

var URL = 'https://my-json-server.typicode.com/Tenison/jsonData/db';

var jsonEndpoint = async (link)=> {
    
    try {
        const result = await fetch(link);
        const response = await result.json();
        let data = await response.codingChallenge;
        //console.log(data);
        return data;
        
    } catch (error) {
        console.log(error.message);    
    }  
}


let item = jsonEndpoint(URL);


item.then(res =>
    console.log(res)
    );