class Animal{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  report(){
    console.log(`name:${this.name} age:${this.age}`);
    
  }
}

class dog extends Animal{
  constructor(name,age,breed){
    super(name,age)
    this.breed=breed;
  }
reports(){
  super.report()
}
static show1(){
  console.log(`${this.breed}`);
  
}
}
const dogDate=new dog("kuttu",4,"golden Retriever")
console.log(dogDate);
dogDate.reports()
dogDate.show1()