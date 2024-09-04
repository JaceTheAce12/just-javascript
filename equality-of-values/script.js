// Kinds of Equality

/* 
- strict equality a === b
- loose equality a == b
- same value equality Object.is(a, b)
*/

console.log(Object.is(2, 2)) // true
console.log(Object.is({}, {})) // false

// Object.is can compare any two values, whether they are objects or not!

let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 4;

console.log(Object.is(dwarves, continents)); // false
console.log(Object.is(continents, worldWonders)); // false
console.log(Object.is(worldWonders, dwarves)); // true

let banana = {};
let cherry = banana;
let chocolate = cherry;
cherry = {};

/*
    banana, chocolate -> {}
    cherry -> {}
*/

console.log(Object.is(banana, cherry)); // false 
console.log(Object.is(cherry, chocolate)); // false
console.log(Object.is(chocolate, banana)); // true

// Strict Equality: a === b

console.log(2 === 2); // true
// console.log({} === {}); false

// there is also a corresponding opposite !== operator

// unusual cases when it comes to ===

// 1. NaN === NaN is false, although they are the same value.
// 2. -0 === 0 and 0 === -0 are true, although they are different values.

let width = 0 / 0;
console.log(width); // NaN

let height = width * 2;
console.log(height); // NaN

// remember that NaN === NaN is always false 

console.log(width === height); // false

// however NaN is the same value as NaN

console.log(Object.is(width, height));

// Example:

function resizeImage(size) {
    if (size === NaN) {
      // This will never get logged: the check is always false!
      console.log('Something is wrong.');
    }
    // ...
  }

  /* 
    check if size is NaN:
    - Number.isNaN(size)
    - Object.is(size, NaN)

    This one works because NaN == NaN is false. So the reverse (NaN !== NaN) must be true
    - size !== size
  */

// second special case: -0

// both 0 === -0 and -0 === 0 are always true:

let width2 = 0; // 0
let height2 = -width; // -0
console.log(Object.is(width2, height2)) // false

// coding exercise

const strictEquals = (a, b) => {
    if (Object.is(a, b)) {
        if (Object.is(a, NaN)) {
            return false;
        } else {
            return true;
        }
    } else {
        if ((Object.is(a, 0) && Object.is(b, -0)) || (Object.is(a, -0) && Object.is(b, 0))) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(strictEquals(0, NaN));

// Loose Equality

console.log([[]] == ''); // true
console.log(true == [1]) // true
console.log(false == [0]); // true

// the use of double equals (loose equality) is uncommon in modern codebases try to avoid it and stick to ===

// relative common use case is:

//if (x == null) {
    // ...
 // }

// the same as writing 

//if (x === null || x === undefined) {
    // ...
 // }

  let tea = function() {
    return 0 / 0;
  };
  let coffee = function() {
    return 0 / 0;
  };
  let matcha = tea();
  let latte = coffee();

  /* 
  tea -> function()
  coffee -> function()
  match, latte -> NaN
  */