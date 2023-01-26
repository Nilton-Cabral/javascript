//let's do it well
let regexp = /(\w+)@(\w+)(\.\w+)+/
let regfinder = regexp.exec('this is my email address nilton@gmail.co.mz, email me just when necessary');
console.log(regfinder);