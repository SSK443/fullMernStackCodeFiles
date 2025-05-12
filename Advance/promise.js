
// promise stop callback hell.

//callback hell is multiple callbacks inside in a callback

// create promise 

const promiseOne=new Promise(function(resolve,reject){// is callback
setTimeout(function(){
 
  console.log("Asyn task is complete");
   resolve();// callback function called here
},1000)
})

promiseOne.then(function(){
  //this is callback function
  console.log("promise consumed");
  //.then connected with resolve of promiseOne function
})


// another way write a promise

new Promise(function(resolve,reject){
setTimeout(()=>{
    console.log("Asyn task 2 is complete");
    resolve()

},2000)
}).then(function(){
    console.log("promise consumed 2");

})

// third promise

new Promise(function(resolve,reject){
  setTimeout(()=>{
    resolve({userName:'sssk',age:33})
  },3000)
}).then(function(userData){
  console.log(userData);
  
})

//promise 4

const createPromise=new Promise(function(resolve,reject){
  setTimeout(()=>{
let error=true;
if(!error){
  console.log('');
 resolve({ userName: "suraj s kumar", age: 22, gender: "male" });// connected with .then()
  
}else{

  reject("error has come");//connect with .catch()
}
  },4000)
});

createPromise.then((user)=>{ //here in the first .then() can use promiseChain to pass function parameter (data) to second .then(). we cannot directly use first then's() return data by place it in a variable or returing directly in first .then() instead use promiseChaining.
  return user.age
}).then((userAge)=>{
console.log(userAge);

}).catch((error)=>{
console.log(error);

}).finally(()=>{
  console.log("promise fullfill in resolve or rejection");
  
})

//promise 5 use asyn await

const promiseFive=new Promise(function(resolve,reject){
setTimeout(()=>{
  
  let error = true;
  if (!error) {
    resolve({ userName: "ragesh", age: 30, gender: "male" });
  } else {
    reject("js something wrong");
  }
},4000)
});

async  function consumedPromiseFive(){
 try {
   const response = await promiseFive;
   console.log(response);
  
 } catch (error) {
  console.log(error);
  
 }
}
//async  await doesnot directly  error handle .so we have to use try{} catch(){} block

consumedPromiseFive()