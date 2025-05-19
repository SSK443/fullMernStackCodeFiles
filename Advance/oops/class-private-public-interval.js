//private in class

class Person {
  #name; // private property

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name; // accessed only inside
  }
}

const p = new Person("John");
console.log(p.getName()); // "John"
console.log(p.#name); // ❌ SyntaxError: Private field '#name' must be declared in an enclosing class

//public

class Person {
  constructor(name) {
    this.name = name; // public
  }

  greet() {
    // public method
    return `Hello, ${this.name}`;
  }
}

const p = new Person("Alice");
console.log(p.name); // "Alice"
console.log(p.greet()); // "Hello, Alice"


//internal
class Person {
  constructor(name) {
    this._name = name; // internal by convention
  }

  get name() {
    return this._name;
  }
}

const p = new Person("Sam");
console.log(p._name); // "Sam" — accessible but usually avoided