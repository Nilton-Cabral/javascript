// Number methods

// Number.is.integer() - returns true if the passed argument is an integer
console.log('Number.is.integer:');
console.log("'string' is integer?", Number.isInteger('string'));
console.log("5.5 is integer?", Number.isInteger(5.5));
console.log("true is integer?", Number.isInteger(true));
console.log("20 is integer?", Number.isInteger(20));

// is.NaN() - returns true if the passed argument is not a legal number
console.log('isNaN:');
console.log("is not 'false' a Number?", isNaN(false));
console.log("is not 20 a number", isNaN('20'));
console.log("is not 'string' a number", isNaN('string'));

// parseInt() - takes a string and returns an integer
console.log('parseInt()')
console.log(`(1one) int: ${parseInt('1one')}`);
console.log(`four4 int: ${parseInt('four4')}`);
console.log(`32 int: ${parseInt(32)}`);
console.log(`32.3 int: ${parseInt(32.3)}`);
console.log(`null int: ${parseInt(null)}`);
console.log(`undefined int: ${parseInt(undefined)}`);
console.log(`NaN typeof int: ${parseInt(NaN)}`);
console.log(`false int: ${parseInt(false)}`);

// parseFloat() - takes a string and returns a floating point number
console.log('parseFloat:');
console.log(`21 float: ${parseFloat('21')}`);
console.log(`3.14 ${parseFloat('3.1415')}`);

// toFixed() - formats a number using fixed-point notation
console.log('toFixed:');
console.log(`3.1415 result:`, (3.1415).toFixed(1));
console.log(`5/7 result:`, (5/7).toFixed(4));

// toExponential() - returns a string in exponential notation based on the given floating point
console.log('toExponential:')
console.log('0.5 toExponential(1) result:', (0.5).toExponential(1));
console.log('1 toExponential(1) result:', (1).toExponential(1));
// 