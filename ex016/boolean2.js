// stranger things in JavaScript

// creating a boolean object
let bool = new Boolean(true);
console.log(!!bool); // this is true right?

// this is a normal condition that works as expected
if (bool) {
    console.log('bool is true');
} else {
    console.log('bool is false');
}


// changing the bool value
bool = new Boolean(false);

// it's here, where the snake smoke
if (bool) {
    console.log('bool is true');
} else {
    console.log('bool is false');
}

// normally in languages like python, the expected result is false but...
