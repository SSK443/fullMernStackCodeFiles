class user{
  constructor(userName,password,email){// is normal function
this.userName=userName;
this.password=password;
this.email=email;
  }
checkEmail(){// method or function 
if(this.email.endsWith("gmail.com")){
  
  console.log('valid email');
  console.log(this.email.toLowerCase());
  
  
}else{
  console.log('non valid emailid');
  
}
}
encryptPassword(){
  return `${this.password+Math.round(Math.random()*1000)}`
}
}
const showDetailOfUser=new user("ssk","monika","surajskumar443gmail.com");
console.log(showDetailOfUser);

showDetailOfUser.checkEmail();
console.log(showDetailOfUser.encryptPassword());


function user1(userName, password, email) {
  this.userName = userName;
  this.password = password;
  this.email = email;
}

user1.prototype.checkEmail=function(){// method or function 
  if(this.email.endsWith("gmail.com")){
    
    console.log('valid email');
    console.log(this.email.toLowerCase());
    
    
  }else{
    console.log('non valid emailid');
    
  }
  }
  user1.prototype.encryptPassword=function(){
    return `${this.password+Math.round(Math.random()*1000)}`
  }
  const showDetailOfUser1 = new user("ssk", "monika", "surajskumar443gmail.com");
  console.log(showDetailOfUser1);
  
showDetailOfUser1.checkEmail();
console.log(showDetailOfUser1.encryptPassword());
