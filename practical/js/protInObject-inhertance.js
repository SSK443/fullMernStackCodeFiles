const User={
  name:"lakshmen",
  age:22
}

const User1={
  // __proto__:User,
  name1:"madhu",
  age1:22,
}
console.log(User1.name);
  console.log(User1.name1);

  User1.__proto__=User;
  console.log(User1.age1);
  console.log(User.name1);
  
  
  
