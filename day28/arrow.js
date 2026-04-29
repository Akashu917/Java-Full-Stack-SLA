// Traditional
function add(a, b) {
  return a + b;
}

// Arrow function (concise)
let add = (a, b) => a + b;

// Single parameter (no parentheses needed)
let square = x => x * x;

// No parameters
let greet = () => "Hello!";
 

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

const person1 = new Person("Alex", 25);
console.log(person1.greet());