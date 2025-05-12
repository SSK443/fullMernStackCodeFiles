let myName="hitesh  ";
// console.log(myName.trueLength);

let myHeros=["thor","spiderman"];

let heroPower={
  thor:'hammer',
  spiderman:'sling'
  ,
  getSpiderPower:function(){
    console.log('spidy power is ${this.spiderman}');
    
  }
}

Object.prototype.hitesh=function(){
  console.log("hlo Iam ssk");
  
}
// heroPower.hitesh();

Array.prototype.heySsk=function(){
  console.log("ssk is back");
  
}
// myHeros.heySsk()
// myName.hitesh()

String.prototype.trueLength=function(){
  console.log(`${this}`);
  console.log(`${this.trim().length}`);
  
  
}
myName.trueLength()