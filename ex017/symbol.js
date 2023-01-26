// symbol data type
// symbols are unique and immutable

// symbols example
let symbol1 = Symbol('a');
let symbol2 = Symbol('a');

console.log(typeof(symbol1));

// comparing
console.log(symbol1 == symbol2); // output: false

