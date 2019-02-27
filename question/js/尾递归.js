
//未优化的尾递归
//阶乘函数

// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }
//
// console.log(factorial(5))
//
// function factorial(n, total) {
//   if (n === 1) return total;
//   return factorial(n - 1, n * total);
// }
//
// console.log(factorial(5, 1)) // 120

//时间复杂度从O

//Fibonacci

// function Fibonacci (n) {
//   if ( n <= 1 ) {return 1};
//
//   return Fibonacci(n - 1) + Fibonacci(n - 2);
// }
//
// console.log(Fibonacci(10)) // 89
// console.log(Fibonacci(100)) // 堆栈溢出

function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
  if( n <= 1 ) {return ac2};

  return Fibonacci2 (n - 1, ac2, ac1 + ac2);
}
console.log(Fibonacci2(100));
