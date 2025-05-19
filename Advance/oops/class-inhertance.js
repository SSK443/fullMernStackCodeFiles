class user{
  constructor(userName){
    this.userName=userName;

  }
  logMe=()=>{
return `${this.userName}`
  }
}
const userDetail=new user("maya");
console.log(userDetail.logMe());

class teacher extends user{
  constructor(userName,dep,salary){
    super(userName);
    this.dep=dep;
    this.salary=salary;

  }
  show=()=>{
    console.log(this.userName);
    
  }
}

const teacherDetails=new teacher('maya',"It",45345);
console.log(teacherDetails);
teacherDetails.show();

console.log(userDetail instanceof user);//


