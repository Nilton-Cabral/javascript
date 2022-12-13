// and here we go again with bitwise operators

// we're going to see how the operator >> works
console.log('expression:(64>>1) result:', 64 >> 1);

/*
this operator it's the opposite of the << (obviously)
but how? this operator shifts the bits from left to right,
the number of times of the second number, 
it seems like the division operator(/)
*/

// example1
console.log('Expression(64>>1) result:', (64 >> 1).toString(2).padStart(32,0));
console.log('Expression:(0b100000) result:', 0b100000);

// example 2
console.log('Expression(512>>6) result:', (512 >> 6).toString(2).padStart(32,0));
console.log('Expression:(0b1000) result:', 0b1000);