//Bitwise operators

//bitwise OR operator it compares two numbers bitwise and gives a result
console.log("Bitwise OR operator");
console.log(`(2|3) result ${2|3}`);
console.log((2).toString(2).padStart(32,0));
console.log((3).toString(2).padStart(32,0));
console.log(`binary(11) result ${0b11}`);
/*
the OR opertor compares two numbers bitwise, for example:
00000000000000000000000000000010
00000000000000000000000000000011
the result will be:
00000000000000000000000000000011

when they are compared 0 with 1 or 1 with 0 the result is 1

when they are compared 1 with 1 the result is 1

when they are compared 0 with 0 the result is 0

so we'll have a binary number "11"
*/


//bitwise AND operator it compares two numbers bitwise and gives a result
console.log("Bitwise AND operator");
console.log(`(3&7) result ${3&7}`);
console.log((3).toString(2).padStart(32,0));
console.log((7).toString(2).padStart(32,0));
console.log(`binary(11) result ${0b11}`);
/*
the AND opertor compares two numbers bitwise, for example:
00000000000000000000000000000011
00000000000000000000000000000111
the result will be:
00000000000000000000000000000011

when they are compared 0 with 1 or 1 with 0 the result is 0

when they are compared 1 with 1 the result is 1

when they are compared 0 with 0 the result is 0

so we'll have a binary number "11"
*/


//bitwise XOR operator it compares two numbers bitwise and gives a result
console.log("Bitwise XOR operator");
console.log(`(2^13) result ${2^13}`);
console.log((2).toString(2).padStart(32,0));
console.log((13).toString(2).padStart(32,0));
console.log(`binary(1111) result ${0b1111}`);
/*
the XOR opertor compares two numbers bitwise, for example:
00000000000000000000000000000010
00000000000000000000000000001101
the result will be:
00000000000000000000000000001111

when they are compared 0 with 1 or 1 with 0 the result is 1

when they are compared 1 with 1 the result is 0

when they are compared 0 with 0 the result is 0

so we'll have a binary number "1111"
*/