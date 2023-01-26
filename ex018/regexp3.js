// reg expression
let regexp = /(\+\d+)?\s(\d{9})/
let phonenumber = regexp.exec('hi fluffy, i\'m from mozambique, this is my phone number +258 810000000 call me back, and i swear you\'ll not regret it. kisses');
console.log(phonenumber);
