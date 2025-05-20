function creatConstrutorFn(name,age){
this.name=name;
this.age=age;
this.show=function(){
  console.log(`${this.age} ${this.name}`);
  
}

return this.show()

}

const data=new creatConstrutorFn('ssk',23);
console.log(data);

data.show()