// a callback function a function which can be passed to another function as a parameter
function A(a, callback) {
  console.log(a);
  callback();
}
function B() {
  console.log("I am B");
}
A(10, B); // A is called with 10 and B as parameters




//callback chainning is a technique where multiple callback functions are called in a sequence, where each function is called after the previous one has completed. This is often used to handle asynchronous operations, such as making API calls or reading files. Here's an example of callback chaining:
function boilWater(callback) {
  console.log("Boiling water");
  callback(serveTheCup);
}
function addTeaPowder(callback) {
  console.log("Adding tea powder");
  callback();
}
function serveTheCup() {
  console.log("Serving into cup");
}
//boilWater(addTeaPowder); // boilWater is called with addTeaPowder as a parameter

// hell of callback chaining
boilWater(() => {
  addTeaPowder(() => {
    serveTheCup();
  });
});



// promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. A promise can be in one of three states: pending, fulfilled, or rejected. A promise is created using the Promise constructor, which takes a function as an argument. The function is called the executor function, and it takes two parameters: resolve and reject. The resolve function is called when the asynchronous operation is successful, and the reject function is called when the asynchronous operation fails. Here's an example of how to use promises:
function boilWater() {
  return new Promise((resolve, reject) => {
    const waterAvailable = true;
    if (waterAvailable) {
      console.log("Boiling water");
      resolve();
    } else {
      reject("Water is not available");
    }
  });
}
function addTeaPowder() {
  return new Promise((resolve, reject) => {
    const teaPowderAvailable = false;
    if (teaPowderAvailable) {
      console.log("Adding tea powder");
      resolve();
    } else {
      reject("Tea powder is not available");
    }
  });
}
function serveTheCup() {
  console.log("Serving into cup");
}

// promise chaining
boilWater()
  .then(() => addTeaPowder())
  .then(() => serveTheCup())
  .catch((error) => console.error(error)); // catch is used to handle any errors that may occur during the promise chain


console.log("A");
function B() 
{
  for (let i = 0; i < 1000000000; i++) {
  } 
  console.log("B");
}

B();
console.log("C");

async function B() {    
    for (let i = 0; i < 1000000000; i++) {
    }
    console.log("B");
}
B();
console.log("C");



function boilWater() {
  return new Promise((resolve, reject) => {
    const waterAvailable = true;
    if (waterAvailable) {
      console.log("Boiling water");
      resolve();
    } else {
      reject("Water is not available");
    }
  });
}
function addTeaPowder() {
  return new Promise((resolve, reject) => {
    const teaPowderAvailable = false;
    if (teaPowderAvailable) {
      console.log("Adding tea powder");
      resolve();
    } else {
      reject("Tea powder is not available");
    }
  });
}
function serveTheCup() {
  console.log("Serving into cup");
}

async function ExecuteSteps() {
    try {
        await boilWater();
        await addTeaPowder();
        serveTheCup();
    } catch (error) {
        console.error(error);
    }
}

ExecuteSteps();


function A() {
  setTimeout(() => {
    console.log("A");
  }, 1000);
}
function B() {
  setTimeout(() => {
    console.log("B");
  }, 1000);
}
function C() {
  setTimeout(() => {
    console.log("C");
  }, 1000);
}

A();
B();
C();