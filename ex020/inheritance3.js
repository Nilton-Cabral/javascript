//

// creating an empty object
const functional = Object.create({});
functional.paradigm = 'functional';

// creating 
const language = Object.create(functional);
language.Name = 'Python';
language.Year = '1990';
language.paradigm = 'OOP';

/* show the prorperty
for (key in language){
    console.log(`${language['key'].hasOwnProperty()} property ${key}`);
};
*/


console.log(Object.getPrototypeOf(language).paradigm)