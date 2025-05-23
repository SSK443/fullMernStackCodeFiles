
class Users{
  constructor(name,age,salary,address){
   static this.name=name;
this.age=age;
this.salary=salary;
this.address=address;
  }
  show(){
    return `my name is ${this.name} \n age is ${this.age} \n my salary is ${this.salary} \n my address ${this.address}`
    
  }
}
const showUserData=new Users('maya',22,40000,"white kher");
console.log(showUserData.show());

class company extends Users {
  constructor( name, age, salary, address,companyName) {
    super(name, age, salary, address);
    this.companyName=companyName;
  }
  static company(){
    return `${super.show()} \n ${this.companyName}`;
  }
  company1(){
    return `${this.name} ${this.age} ${this.companyName}`
  }
}

const companyData = new company("loda", 22, 40000, "erferfe", "starkgroup");

console.log(companyData.company());
