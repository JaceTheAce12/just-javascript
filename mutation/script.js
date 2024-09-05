// Mutation

let sherlock = {
    surname: 'Holmes',
    address: { city: 'London' }
  };

let john = {
surname: 'Watson',
address: sherlock.address
};

// A property always points to a value

john.surname = 'Lennon';
// john.address.city = 'Malibu'; // this line mutates the sherlock object since this property is pointing the the sherlock object

john.address = { city: 'Malibu' }

console.log(sherlock.surname); // "Holmes"
console.log(sherlock.address.city); // "London"
console.log(john.surname); // "Lennon"
console.log(john.address.city); // "Malibu"

// Mutation isn't bad but you need to be intentional about it 

// The intuition of objects being nested is so wrong

// JavaScript will eventually automatically remove data from memory if there are no wires pointing to it

const shrek = { species: 'ogre' };

// const lets you create read-only variables. Once we declare a constant we can't point to a different value

// shrek = fiona; // TypeError

// we can still mutate the object our wire points to even though it's a constant

// it is only the shrek variable wire itself that is read-only

shrek.species = 'human';
console.log(shrek.species); // 'human'

// const prevents variable reassignment not object mutation

// Is mutation bad?

// The question is what should be mutated, where, and when

// By the time you mutate an object, variables and properties may already be pointing to it. Your mutation affects any code following those wires later


const music = {
    taste: 'classical'
}

const onion = music;

// ???
console.log(music.taste); // "classical"
onion.taste = 'umami';
console.log(music.taste); // "umami"

let burger = {
    beef: 'veggie'
};

let rapper = {
    beef: 'legit'
}

console.log(burger.beef); // 'veggie'
burger = rapper;
console.log(burger.beef); // 'legit'


const charlotte = {
    mother: { age: 20 },
}

charlotte.child = charlotte.mother;

// ???
console.log(charlotte.mother.age); // 20
console.log(charlotte.child.age); // 20

charlotte.mother.age = 21;

console.log(charlotte.mother.age); // 21
console.log(charlotte.child.age); // 21