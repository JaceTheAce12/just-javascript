// Objects 

console.log(typeof({})); // object
console.log(typeof([])); // object
console.log(typeof(new Date())); // object
console.log(typeof(/\d+/)); // object
console.log(typeof(Math)); // object

// objects are not primitive values. This also means they are mutable (can be changed)


let rapper = { name: 'Malicious' };
rapper.name = 'Malice'; // Dot notation
rapper['name'] = 'No Malice'; // Bracket notation

// We can make more objects

// we can't create a new string or a new number those values already exist. We can only summon that value 

let sisters = 3;
let musketeers = 3

// sisters, musketeers -> 3

let shrek = {}
let donkey = {}

// shrek => {}
// donkey => {}

// we can't destroy an object 

let junk = {};
junk = null; // Doesn't necessarily destroy an object

// JS is a garbage-collected language

// this means that even though we can't destroy an object it might eventually disappear if there is no way to reach it by following the wires from our code

// in our universe objects and functions float closest to our code (like asteroids and comets)

// Functions 

// functions are values 

for (let i = 0; i < 7; i++) {
    console.log(2); // pass the same value 7 times 
}

for (let i = 0; i < 7; i++) {
    console.log({}); // this for loop creates 7 new object values 
}

// the code above creates and logs seven completely distinct object values 

for (let i = 0; i < 7; i++) {
    console.log(function() {}); // The code passes 7 different values to console.log
}

// if you can do something to an object you can do it to a function too


// you might think the code below prints 7, but it points to the function and prints the function at no point did we call our function
let countDwarves = function() { return 7; };
let dwarves = countDwarves;
console.log(dwarves);

// functions are values and we can point variables to them.

let countDwarves2 = function() { return 7 };
let dwarves2 = countDwarves2(); // () is a function call
console.log(dwarves2);

// the let declaration or the = assignment don't call the function it is () that calls the function

let cook = function () {
    return 'tofu';
  };
  let make = function () {
    return 'tofu';
  };
  let food = cook();
  let fuel = make();

/*
 cook -> function()
 make -> function() 
 food, fuel -> "tofu"
*/

let spaghetti = function () {
    return 2 + 2;
  };
  let fettuccine = spaghetti;
  let gnocchi = function () {
    return 2 + 2;
  };

/* 
  spaghetti, fettuccine -> function()
  gnocchi -> function()
*/