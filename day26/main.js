const items = ["apple", "banana", "grape", "orange"];

const search = "ap";

const result = items.filter(item =>
  item.toLowerCase().includes(search.toLowerCase())
);

console.log(result); // ["apple", "grape"]


// Array destructuring
const numbers = [10, 20, 30];
const [first, second, third] = numbers;

console.log(first);  // 10
console.log(second); // 20

// Object destructuring
const user = {
  name: "Alice",
  age: 22,
  city: "Chennai"
};
const { name, age, city } = user;
console.log(name); // Alice
console.log(age);  // 22



const original = [1, 2, 3];
// Copy array
const copy = [...original];

copy.push(4);

console.log(original); // [1, 2, 3]
console.log(copy);     // [1, 2, 3, 4]



// Accept multiple values as arguments
function sum(...numbers) {
  let total = 0;

  for (let num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(10, 20, 30, 40)); // 100