// continuing the last lesson 

let bestgeniusofever = 'Nikolas Tesla';

// separeating the string with split method
console.log(bestgeniusofever.split(' '));

// slicing strings
console.log('Name:', bestgeniusofever.slice(0, 7));
console.log('Surname:', bestgeniusofever.slice(8));

// replacing ... on a string
console.log(bestgeniusofever.replace(' ', '-'));

// concatenation of strings
console.log('Albert'.concat(' Einstein'));

// deleting spaces on a string
console.log(' my name is ... ');
console.log(' my name is ... '.trim());
console.log(' my name is ... '.trimStart());
console.log(' my name is ... '.trimEnd());

// defining a custom length to a string
console.log('5'.padStart(8,0));
console.log('5'.padEnd(8,0));

// showing binary with 32 in length
console.log((2).toString(2).padStart(32,0));
/*
the toString() method converts a number to a specific base(the argument is the base)
and padStart add zeros at the start of the string
*/