function show(name,age){
this.name=name;
this.age=age;
this.greet=function(){
  console.log( `HI IAM ${this.name}`);
  
}
}
const person=new show('sonu',33);
console.log(person); //new create a new instances everything

//working of new
// step1 one empty object created called instances.
//step 2 a constructor function called because of new keyword
//step3 in this. keyword all argument are injected 
//step4 you get inside function