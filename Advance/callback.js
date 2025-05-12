function mainFunction(callback){
  console.log('main in running completed');
  callback()
  
}
function myCallBack(){
  console.log('my callback is running bro');
  
}

mainFunction(myCallBack)
console.log('---------------------------------');

function dataFetch(callback){
  setTimeout(function(){
    console.log('data fectch complete phase 1');
    callback()
  
  },1000)
}

function dataProcessing(){
  console.log('mycallback ');
  
}
dataFetch(dataProcessing)


console.log('--------------------------');
function greetName(name,callback){
  setTimeout(()=>{
console.log(`hello mr ${name}`);

callback()
  },3000)
}
function callingBack(){
  console.log('u r passed in data');
  
}
greetName('kuttu',callingBack)