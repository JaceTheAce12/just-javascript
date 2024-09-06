// Prototypes

let pizza = {};

pizza.__proto__.taste = 'pineapple';
console.log(pizza.taste);

let human = {
    teeth: 32
  };
  
  let gwen = {
    // We added this line:
    __proto__: human,
    age: 19
  };

console.log(gwen.teeth); // undefined without the prototype. 32 with the prototype


// An object with no prototype

let weirdo = {
  __proto__: null
};


console.log(weirdo.hasOwnProperty); // undefined
console.log(weirdo.toString); // undefined

// The object prototype is an object with no prototype

// below is called prototype pollution
let obj = {};
obj.__proto__.smell = 'banana';

let sherlock = {}
let watson = {}

console.log(sherlock.smell); // "banana"
console.log(watson.smell); // "banana"