// 01  Write a function to add two numbers.

function add(n1,n2){
  return n1+n2
}
console.log(add(5, 5));

//2 Check if a number is even or odd.

function evenOdd(n){
if(n%2==0){
  console.log('even'+ n);
  
}else{
  console.log('odd'+ n);
  
}
}

evenOdd(5)

// 03  Calculate the factorial of a number.

function factorial(n){
  let fact;
  for(i=1;i<=n;i++){
fact=fact*i
  }
  return fact;
}

console.log(factorial(10));

// 04 Generate the first n Fibonacci numbers.

function fibonacci(n){
let fib=[0,1];
for(let i=2;i<n;i++){
  fib[i]=fib[i-1]+fib[i-2];

}
return fib.slice(0,n)

}
console.log(fibonacci(10));


//5 Swap two variables without a temporary variable.


let a=5;
let b=10;
a=a+b;
b=a-b;
a=a-b;
console.log(a,b);


// function swapWithoutTemp(a, b) {
//   a = a + b;
//   b = a - b;
//   a = a - b;
//   return [a, b];
// }

// let [newA, newB] = swapWithoutTemp(5, 10);
// console.log("a:", newA); // 10
// console.log("b:", newB); // 5


/// 06 Check if a number is prime.