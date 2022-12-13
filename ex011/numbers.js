// operating numbers in javascript

// integer
let number = 10; // this is a primitive number in javascript
let number1 = new Number(10); /* this is the object created with the javascript
constructor function(new Number()), which boxes the primitive number within an object.
*/
// primitive number
console.log(number, typeof(number));
// object number
console.log(number, typeof(number1));

// creating a float object
let float_number = new Number(5.5);
console.log('float:', float_number);

// hexadecimal
let hxdecimal = new Number(0x19);
console.log(hxdecimal);

// binary
let bin_number = 0b10;
console.log(bin_number);

// octal
let octal_number = 0o10;
console.log(octal_number);