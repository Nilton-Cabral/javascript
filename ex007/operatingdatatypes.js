//this is a single line comment
//learning about numbers in javascript

//definig two number's types a float and an int
let intnumber = 20;
let floatnumber = 15.5;

/* 
this is a multi-line coment
*/

//showing the result of sum of the two numbers
console.log(intnumber + floatnumber);

//defining a string
let string = "she's pretty";

//trying to sum a string and number
console.log(string+intnumber);

//adding the string and numbers separate with string templates
console.log(`${string} ${intnumber + floatnumber}`);

//definig boolean types
let booltrue = true;
let boolfalse = false;

//showing the result of adding two boolean types
console.log(`Resultbool ${booltrue + boolfalse}`);

//let's see what the result of adding a string with booltype
console.log(`result ${booltrue + string}`);

//how about bool and int?
console.log(`result ${boolfalse + intnumber}`);
//and bool and float
console.log(booltrue + floatnumber);

// the undefined type
let undefinednumber;
//adding with and int number
console.log(`undefinedandInt ${undefinednumber + intnumber}`);
//with a string
console.log(`undefinedandString ${undefinednumber + string}`);
//with a bool
console.log(`undefinedandBool ${undefinednumber + boolfalse}`);

//null type
let nothing = null;
//adding with int
console.log(`nullandInt ${nothing + intnumber}`)
//with bool
console.log(`nullandBool ${nothing + booltrue}`)
//with undefined
console.log(`nullandundefined ${nothing + undefinednumber}`)
//with string
console.log(`nullandstring ${nothing + string}`)

//well this exercise ends here