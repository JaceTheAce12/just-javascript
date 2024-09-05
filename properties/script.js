// Properties

/*
let sherlock = {
    surname: 'Holmes',
    address: {city: 'London'}
};
*/

/*
let john = {
    surname: 'Watson',
    address: sherlock.address
};
*/

// john.surname = 'Lennon';
// john.address.city = 'Malibu';

//console.log(sherlock.surname); // Holmes
//console.log(sherlock.address.city); // Malibu
// console.log(john.surname); // Lennon
// console.log(john.address.city); // Malibu


let sherlock = {
    surname: 'Holmes',
    age: 64
};


// surname and age are not variables they are properties 

// In our JS universe, both variable and properties act like wires

// all wires always point to values

console.log(sherlock.age); // 64

// Property Names 

//let propertyName = prompt('What do you want to know?');
//alert(sherlock[propertyName]);

// assigning to a property 

sherlock.age = 65;

//console.log(sherlock.boat); // undefined

//console.log(sherlock.boat.name); // undefined

// sherlock -> {} -> sherlock.boat -> undefined, since undefined is on the left side of the dot of .name then it throws an error

let captain = 'Jim';
let ship = { captain: captain };
captain = 'Naomi';

// ship -> {} ----captain---> 'Jim'
// captain -> 'Naomi'



