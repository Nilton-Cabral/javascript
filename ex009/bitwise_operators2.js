// Continuing with biwise operators


//showing the length in bits of the numbers 4 and -5 with 32 characters
console.log('Number(4)  bits:', (4).toString(2).padStart(32,0));

//converting the number 4 with the operator NOT
console.log(`Convert(~4) result: ${~4}`);

//
console.log('Number(-5) bits:', (-5).toString(2).padStart(32,0));
console.log(`Convert:(~-5) result: ${~-5}`);

console.log('ToPositive(-5 >>> 0) result:', (-5 >>> 0).toString(2).padStart(32,0));

/*
the NOT opertor converts a number bitwise, to it opposite:
00000000000000000000000000000100
the result will be:
0000000000000000000000000000-101

but to see better how this number was converted we can use the >>>  operator that converts a binary with is signal and we'll have
11111111111111111111111111111011

now let's compare both numbers:
00000000000000000000000000000100
11111111111111111111111111111011

now you can see how the number was really converted 
the number '4' bits:'100' was converted to '011'
*/