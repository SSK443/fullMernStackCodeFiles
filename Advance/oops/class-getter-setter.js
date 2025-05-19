class myData {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get name() {
    return this._name.toUpperCase().split("");
  }
  set name(value) {
    console.log(value);

    this._name = value;
  }
}
const show = new myData("john", 23);

console.log(show.name);




// setter and getter in function

function setterAndGetter(name, age) {
  this._name = name;
  this._age = age;
  Object.defineProperty(this, "name", {
    get: function () {
      return this._name.toUpperCase();
    },
    set: function (value) {
      this._name = value;
    },
  });
  Object.defineProperty(this, "age", {
    get: function () {
      return this._age.toString();
    },
    set: function (value) {
      this._age = value;
    },
  });
}
const person = new setterAndGetter("sss", 34);
console.log(person);
console.log(`${person.name} ${typeof person._age}`);


// private in class
class me {
  #myName;
  #myAge;
  constructor(name, age) {
    this.#myName = name;
    this.#myAge = age;
  }
  get name() {
    return this.#myName.toUpperCase();
  }
  set name(value) {
    console.log(value);
    this.#myName = value;
  }
  get age(){
    return this.#myAge
  }
  set age(value){
    this.#myAge=value
  }
}
const meData=new me("manohar",444)
console.log(meData.name);
console.log(meData.age);

// setter and getter in object

const test={
  name:'ssk',
  age:33,
  get name(){
    return this.name.toUpperCase();
  },
set name(value){
this.name=value;
}


}

