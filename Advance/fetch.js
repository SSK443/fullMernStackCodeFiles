// async function getDataPromise(){
// try {
//    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   //  console.log(response);
//  const data=await response.json()
//  console.log(data);
 
// } catch (error) {
//   console.log('error occured');
  
// }
// }
// getDataPromise()



///// two


fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response){
  console.log(response);
  return response.json()
})
.then(function(data){
console.log(data);

})
.catch(function(error){
  console.log('something wrong in js promise');
  
}).finally(()=>{
  console.log('promise done');
  
})