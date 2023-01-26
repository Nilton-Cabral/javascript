// logical operators
console.log(0 || 2);
console.log(0 || 1.5);
console.log(false || 0);


console.log(2 && 3);
console.log(0 && 1);
console.log(new Boolean(false) && new Boolean(true));

// JavaScript is very Strange, but i Love Programming....

// pratical example
function randomnumber(max) {
    max = max || 1000;
    return Math.floor(Math.random() * max)
};

console.log(randomnumber());
console.log(randomnumber(10));