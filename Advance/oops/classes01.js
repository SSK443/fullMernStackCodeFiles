class Me{
  constructor(name,age){
    this.name=name;
    this.age=age
  }
  show=()=>{
    console.log(this.age);
    
  }
}
const showdata=new Me("aaa",44);
showdata.show()
