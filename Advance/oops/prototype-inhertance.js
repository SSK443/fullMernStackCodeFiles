//inhertance

const user={
  name:'ssk',
  email:'surajskumar443@gmail.com',

};
const teacher={
  salary:60000,
  __proto__:user,
};
console.log(`${teacher.name} ${teacher.email} ${teacher.salary}`);

const TeachingSupport = {
  isAvailable: false,
};

// TeachingSupport.__proto__=teacher
// console.log(TeachingSupport.isAvailable);

Object.setPrototypeOf(TeachingSupport,teacher)
console.log(TeachingSupport.name);
