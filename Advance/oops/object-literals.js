const object ={
  name:'ssk',
  age:44,
  show:function(){
    console.log(this.name); // current context related to object 
    
  }
}
console.log(object.show());

const my={
  name:'chayithu',
  age:22,
fu:()=>{
  console.log(this.age);
  
}
}
console.log(my.fu());
