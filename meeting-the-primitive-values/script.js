// Undefined 

// undefined is like a black hole in our javascript universe
console.log(typeof(undefined));

// let person = undefined;
// console.log(person.mood); // TypeError!

// In javascript undefined represents the concept of an unintentionally missing value


// undefined shows up in some situations where javascript doesn't know what value you wanted. For example, if you forget to assign a variable:
let bandersnatch;
console.log(bandersnatch);

// undefined is a regular primitive value like 2 or 'hello'

// Null

// Think of null as undefined's sister. There is only one value of this type.

// let mimsy = null; 
// console.log(mimsy.mood); // TypeError!

// Null is the only value of its own type. However, null is also a liar. Due to a bug in JavaScript, it pretends to be an object

console.log(typeof(null)); // 'object' (a lie!)

// Null is a primitive value, and doesn't behave in any way like an object

// while undefined is used for unintentionally missing values null is used for intentionally missing values

// Booleans

console.log(typeof(true)); // 'boolean'
console.log(typeof(false)) ;// 'boolean'

let isSad = true;
let isHappy = !isSad; // the opposite 
let isFeeling = isSad || isHappy; // Is at least one of them true?
let isConfusing = isSad && isHappy; // Are both true?

/*
    isSad -> true
    isHappy -> false 
    isFeeling -> true
    isConfusing -> false
*/

// Numbers

console.log(typeof(28)); // 'number'
console.log(typeof(3.14)); // 'number'
console.log(typeof(-140)); // 'number'

// JavaScript numbers act differently than regular mathematical numbers

// floating point math
console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2 === 0.30000000000000004) // true

// floating point math is math for computers

// as we move away from the number 0 in javascript we start to lose precision 

/* 
    0 -> more precise 
    0.00000000000000001 -> more precise 
    -123456789.00000006 -> less precise 
    20000000000000.1 -> less precise 
*/

console.log(Number.MAX_SAFE_INTEGER);     // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2); // 9007199254740992 (again!)
console.log(Number.MAX_SAFE_INTEGER + 3); // 9007199254740994
console.log(Number.MAX_SAFE_INTEGER + 4); // 9007199254740996
console.log(Number.MAX_SAFE_INTEGER + 5); // 9007199254740996 (again!)

// when we write 0.1 or 0.2 we don't get those exact numbers we get the closest available numbers in JS

// Special numbers 

let scale = 0;
let a = 1 / scale; // Infinity
let b = 0 / scale; // NaN
let c = -a; // -Infinity
let d = 1 / c; // -0

// NaN = Not a Number
console.log(typeof(NaN));

// it is not a number because it represents an invalid result

// BigInts

// regular numbers can't represent large integers with precision so BigInts fill that gap

let alot = 9007199254740991n; // n at the end makes it a BigInt!
console.log(alot + 1n); // 9007199254740992n
console.log(alot + 2n); // 9007199254740993n
console.log(alot + 3n); // 9007199254740994n
console.log(alot + 4n); // 9007199254740995n
console.log(alot + 5n); // 9007199254740996n

// BigInts are great for financial calculations

// BigInts were recently added to JS so you won't see them widely used yet and if you are on an older browser they won't work

// Strings

console.log(typeof("こんにちは")); // "string"
console.log(typeof('こんにちは')); // "string"
console.log(typeof(`こんにちは`)); // "string"

// an empty string is a string too

console.log(typeof('')); // "string"

let cat = 'Cheshire';
console.log(cat.length); // 8
console.log(cat[0]); // C
console.log(cat[1]); // h

// Remember strings are immutable and can't be changed like objects

// let answer = prompt('Enter your name');
// console.log(answer); // ?

// All conceivable string values already exist from the beginning one value for every distinct string

let alohomora = Symbol();
console.log(typeof(alohomora)); // symbol

// symbols serve a similar purpose to door keys: they let you hide away some information inside an object and control which parts of the code can access it