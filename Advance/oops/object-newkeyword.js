function addMe(num){
  return num+5;
}
addMe.power=5
console.log(addMe.power);// in function also can access object properties using propotpe in hertance.
console.log(addMe(4));
console.log(addMe.prototype);// empty object



function User(userName,score){
  this.userName=userName;// this. currentcontext
  this.score=score
}

User.prototype.increment=function(){ //custom properties are injected into user function
  this.score++//currentcontext
}

User.prototype.printInfo=function(){
  console.log(`${this.userName}`);
  
}
const user1=new  User('mohit','33');
const user2= new User('shilpa','44');
console.log(user1.printInfo());

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
