new Promise(function(resolve,reject){
  let error=true;
  setTimeout(()=>{
    if (!error) {
      resolve({ name: "vferferf" });
    } else {
      reject("something wrong");
    }
  },2000)
}).then(function(user){
console.log(user);

}).catch(function(error){
  console.log(error);
  
}).finally(function(){
  console.log('done');
  
})

const api=new Promise(function(resolve,reject){
setTimeout(()=>{
  let error=true
  if(error){
    resolve({age:30, asyn:'done'})
  }else{
    reject('something fucked u')
  }
},1000)
})
async function data(){
  try {
    const news = await api;
    console.log(news);
    
  } catch (error) {
    console.log(error);
    
  }
}
data()