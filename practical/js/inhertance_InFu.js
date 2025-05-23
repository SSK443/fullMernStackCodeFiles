function john(userName){
  this.userName=userName;
}
function ram(userName,name,age){
  john.call(this,userName)
  this.age=age;
  this.name=name;

}

const Show=new ram('john','ssk',23)
console.log(Show);



function company(name,size){
this.name=name;
this.size=size;
}

function motherCompanys(name,size,networth){
company.call(this,name,size)
this.networth=networth;
}

const companyDetails=new motherCompanys("ssk",1,10);
console.log(companyDetails.networth);
console.log(companyDetails.name);
console.log(companyDetails.size);


