let person = {
  name: "John",
  age: 25,
  sayHello: function() {
    console.log("Hello, my name is " + this.name);
  }
};
// Access properties
console.log(person.name); // John
console.log(person.age);  // 25

// Modify properties
person.name = "Alice";
person.age = 30;

console.log(person.name); // Alice
console.log(person.age);  // 30

//Call the object method:
person.sayHello(); // Hello, my name is Alice