console.log("Start");

console.log("Synchronous task 1");
console.log("Synchronous task 2");

console.log("End");


console.log("Start");

setTimeout(() => {
  console.log("Async task (runs later)");
}, 2000);

console.log("End");


setTimeout(() => {
  console.log("This message appears after 2 seconds");
}, 2000);


let count = 1;

const intervalId = setInterval(() => {
  console.log("Counter:", count);
  count++;
  
  // Stop after 5 counts (optional)
  if (count > 5) {
    clearInterval(intervalId);
  }
}, 1000);