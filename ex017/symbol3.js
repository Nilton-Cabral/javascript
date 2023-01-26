// an example of one of the symbols funtionalities 

let regexp = /Malandela/;
regexp[Symbol.match] = false;
console.log("Nilton /Malandela/".endsWith(regexp));
