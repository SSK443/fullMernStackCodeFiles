class user{
  constructor(userData){
    this.userData=userData
  }
  static logMe(){
    return `123`
  }
}
const showUser=new user('chopper');
console.log(showUser.logMe());

class teacher extends user{
  constructor(password,userData){
    super(userData);
    this.password=password;
    
  }
  secure(){
    return `${this.password}`
  }
}

const teacDetal=new teacher(45665,'shambu')
console.log(teacDetal.secure());
teacherDetails.logMe()