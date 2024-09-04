let reaction = 'yikes'; // look at what is assigned to reaction
reaction[0] = 'l'; // here the first element 'y' is replaced with the character 'l' which should log 'likes' to the console
console.log(reaction); // reaction is logged to the console

/* 
- the above code prints 'yikes' that is because primitive values are immutable (we can't change them)
*/

let arr = [212, 8, 506];
let str = 'hello';

/* 
- (below) we can access the array's first item and the string's first character similarly
*/

console.log(arr[0]); // 212
console.log(str[0]); // 'h'

arr[0] = 420;
console.log(arr);

str[0] = 'j' // this doesn't work because a string is a primitive value

let pet = 'Narwhal'; // pet is 'Narwhal'
pet = 'The Kraken'; // pet variable points to a new value 'The Kraken'
console.log(pet); // 'The Kraken' is logged to the console

// (above) primitive values can't change, but we didn't say anything about variables

// variables are not values 

// variables point to values

// 2000 = 'leagues under the sea'; // Nope.
// 'war' = 'peace' // Nope.

// numbers and strings are expressions

// in console.log(pet) we are not passing the variable to the function we are passing the current value of the pet variable

const double = (x) => x = x * 2;

let money = 10;
double(money);
console.log(money);

/* RECAP
- Primitive values are immutable 
- Variables are not values (they point to values)
- Variables are like wires
- Look out for contradictions
- Language matters 
*/

let numberOfTentacles = 10;
console.log(typeof numberOfTentacles);
numberOfTentacles = 'eight';

let answer = true;
answer.opposite = false;
console.log(answer.opposite);

// (above) booleans are primitive and all primitive values are immutable which means they can't be changed

null = 10;
console.log(null)

// null is a wire so a literal like null can't be on the left side of the assignment




