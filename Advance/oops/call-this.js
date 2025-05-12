function createUser(userName){
 this.userName = userName;
  
}
function userDetails(userName,password,age){
  createUser.call(this,userName)
  
  this.userName=userName
this.password=password;
this.age=age;
}

const userDetailShow=new userDetails("ssk",1245,34);
console.log(userDetailShow);




