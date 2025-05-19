

// Object.defineProperty(Math, "PI", {
//   value: 3.141592653589793,
//   writable: true,
//   enumerable: true,
//   configurable: true,
// });
// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

const myObject =new  Object()
myObject.name="ssk";
myObject.age=33;
myObject.gender="male";
console.log(myObject);


myObject.name="zara";

const descriptor = Object.getOwnPropertyDescriptor(myObject, "name");
console.log(descriptor);



Object.defineProperty(myObject, "name", {
  writable: false,
  enumerable: false,
  // configurable: false,
});
myObject.name = "zara";
console.log(myObject);