// comparing how much time the diferent types of define a string take

// how much time with the primitive string
let counter = 0;
console.time("performance");
while (counter < 100000){
    "JavaScript";
    counter++;
};
console.timeEnd("performance");
