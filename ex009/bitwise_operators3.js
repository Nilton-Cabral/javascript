// this is the file bitwise operator 3

// how the operator << works?
console.log('Expression:(2<<3) result:', 2 << 3);

/* the operator <<, it multiplies bitwise two numbers, that is,
it multiplies the first by the number of times of the second,
it's like the exponetiation operator(**), 
well this is what we see in the result,
but in practice it shifts the bits from right to left, the number of times of the second number.
*/

//bellow are an example of what was explained above
console.log('NUmber:(2)       ', (2).toString(2).padStart(32,0));
console.log('Expression:(2<<3)', (2 << 3).toString(2).padStart(32,0));

//now lets convert the result of above expression to see the result
console.log('the expression(2<<3) in bits(0b10000) result:', 0b10000);
