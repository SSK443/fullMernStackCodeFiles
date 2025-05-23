//Write a function to add two numbers.

function add(a,b){
  return a+b;
}
console.log(add(10,30));


// Check if a number is even or odd.

function evenOrOdd(n){
if(n%2!==0){
  console.log(`odd ${n}`);
  
}else{
  console.log(`even ${n}`);
  
}
}

evenOrOdd(5)

//Calculate the factorial of a number.

function factorial(n){
  let fact=1;
  for(let i=n;i>0;i--){
fact=fact*i
  }
  return fact;
}

console.log(factorial(5));


//Generate the first n Fibonacci numbers.

function Fibonacci(n){
  let fib=[0,1];
  for(let i=2;i<=n;i++){
    fib[i]=fib[i-1]+fib[i-2];
  };
  return fib.slice(0,n)
};
console.log(Fibonacci(20));

// Swap two variables without a temporary variable.

function  Swap(a,b){
[a,b]=[b,a]
return `a value: ${a} b value :${b}`
}
console.log(Swap(10,4));

let a =5;
let b=10;
[a,b]=[b,a]
console.log(`a:${a} b:${b}`);

//Check if a number is prime.

function prime(n){
for(let i=2;i<=n;i++){
  if(n%i==0){
    console.log( n,'non prime');
    break;
  }else{
    console.log(n,'prime');
    break;
    
  }
}
}
prime(5)

//method2

function prime2(n){
  let isPrime=true;
for(let i=2;i<=n;i++){
  if(n%i==0){
    isPrime=false;
    break;
  }

}
return `${isPrime}`?`${n} prime`:`${n} non prime`
}

console.log(prime2(9));

//Reverse a string.

function reverseString(word){
  let result=[];
  for(i=word.length-1;i>=0;i--){
result.push(word[i])
  }
  return result.toString()
}
console.log(reverseString("name"));

// method 2

function reverseString2(word){
 return word.split("").reverse().join()
}
console.log(reverseString2("long"));

//Check if a string is a palindrome.



//Find the largest number in an array.

const myArray=[1,2,4,5];

