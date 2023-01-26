// how much time with the constructor function

let counter = 0;
console.time("performance");
while (counter < 100000){
    new String("JavScript");
    counter++;
};
console.timeEnd("performance");
