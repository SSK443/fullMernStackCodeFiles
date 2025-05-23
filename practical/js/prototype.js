function data(user,add){
this.user=user;
this.add=add;
}
data.prototype.show=function(){
  return` my name is:${this.user}`
}
data.prototype.increase=function(){
  return ` my add is: ${this.add}`
}

const showData=new data("sssk","white house");
console.log(showData.increase(),
showData.show());


Object.prototype.finder=function(prop){
return this.hasOwnProperty(prop)
}

const me={
  user:1,
  age:22,

}
console.log(me.finder("user"));
console.log(me.finder("lover"));

Array.prototype.increment=function(item){
return this.map((e)=>e+1)
}


const myArray=[1,3,4,4]
console.log(myArray.increment());


String.prototype.trueHeight=function(){
  return this.trim().toLowerCase()
}
const word="SSSk";
console.log(word.trueHeight());


