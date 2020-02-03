/*
*Author: Alexander Domakyaareh
*File: print the nth fibonacci number using recursion
*/

const fibonacci = (n) => {
    if(n == 1) return 0;
    if( n < 2) return 1;

    var fib = fibonacci(n-1) + fibonacci(n-2)
    return fib;
}


console.log(fibonacci(10));


