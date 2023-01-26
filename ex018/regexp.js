// defining a simple regular expression
let regexp = /nilton@gmail.com/;
let testregexp = regexp.test('nilton@gmail.com')
console.log(testregexp);

let execregexp = regexp.exec('nilton@gmail.com');
console.log(execregexp);
