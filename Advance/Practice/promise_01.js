// const promiseOne=new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log('Asyn task is complete ');
//     resolve(););
    
    
//   },1000)
// })
// promiseOne.then((function(){
//   console.log('promiseOne Consumed');
  
// }))


// new Promise(function(resolve,reject){
//   setTimeout(()=>{
// console.log('asyn task completed 2');
// resolve()

//   },3000)
// }).then(function(){
//   console.log('promiseTwo consumed');
  
// })

// const promiseThree=new Promise(function(resolve,reject){
//  setTimeout(()=>{ resolve({ name: "ddd", age: 44 });
//  console.log(" async task 3 completed");},4000)
  
// })
// promiseThree.then(function(user){
// console.log(user);

// })

//promiseFour

// new Promise(function(resolve,reject){
//  setTimeout(() => {
//    let error = false;
//    if (!error) {
//      resolve({ name: "ssk", age: 44 });
//    } else {
//      reject("js something Wrong");
//    }
//  }, 5000);
// }).then(function(firstdata){
// return firstdata.name;

// })
// .catch(function(error){
//   console.log(error);
  
// }).finally(function(){
//   console.log('promise finished');
  
// })

// promiseFive

// new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     let error=false
// if(!error){
//   resolve({ employee: "tcs", age: 30 });
// }reject('error occurred')
//   },2000)
// }).then(function(data){
//   console.log(data.age);
  
//   return data
// }).then(function(seconddata){
//    console.log(seconddata.employee);
//   return seconddata.employee
 
  
// }).catch((error)=>{
//   console.log(error);
  
// }).finally(()=>{
//   console.log('promisse five completed');
  
// })
/////
const promiseSix=new Promise(function(resolve,reject){
  setTimeout(()=>{
    let error=false;
if(!error){
resolve({name:'jonh',age:444})
}else{
  reject('wow errr')
}
  },1000)
});

async function consumedPromiseSix() {
try {
const response=  await promiseSix;
console.log(response.name);

} catch (error) {
  console.log(error);
  
}
}
consumedPromiseSix();