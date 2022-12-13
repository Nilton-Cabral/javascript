/* comparison operators compares it operands and returns a boolean
   whether the comparison is true or false

   it can be used to compares strings, numbers, objects, and booleans.

   see bellow the operators:
        equality                '=='
        inequality              '!='
        identity operator       '==='
        non-identity            '!=='
        greater than            '>'
        greater than or equal   '>='
        less than               '<'
        less than or equal      '<='
*/

// defining some varibles
let person = 'Soul_taker';

let age = 35;
let age_string = '35';

let height = 1.75;
let height_string = '1.75';

let friends;
let friend = 'undefined';

let profession = null;
let profestring = 'null';

let job = [1,2,3,4];
let job_string = '[1,2,3,4]';

let surname = NaN;
let surname_string = 'NaN';

let booltrue = true;
let boolfalse = false;


// equality operator '=='
console.log('equality operator');
console.log('is person equal to person?', person == person);
console.log('is person equal to age?', person == age);
console.log('is person equal to friends?', person == friends);
console.log('is person null', person == profession);
console.log('is person equal to array?', person == job);
console.log('is age equal to surname?', age == surname);
console.log('is 1 equal to booltrue?', 1 == booltrue);
console.log('is age equal to booltrue?', age = booltrue);

// inequlity operator '!='
console.log('inequality operator')
console.log('are different age and height?', age != height);
console.log('are different person and surname', person != surname);
console.log('are different profession and surname', profession != surname);
console.log('are different friends and surname?', friends != surname);
console.log('are different 0 and boolfalse?', 0 != boolfalse);
console.log('are different friends and boolfalse?', friends != boolfalse);

// special comparisons
console.log('special comparisons');
console.log('are age and age_string different?', age != age_string);
console.log('are height and height_string different?', height != height_string);
console.log('are friends and friend different?', friends != friend);
console.log('are profession and profestring different?', profession != profestring);
console.log('are job and job_string different?', job != job_string);
console.log('are surname and surname_string different?', surname != surname_string);

// identity operator '==='
console.log('identity comparisons');
console.log('does person and person have the same identity?', person === person);
console.log('does age and age_string have the same identity?', age === age_string);
console.log('does height and height_string have the same identity?', height === height_string);
console.log('does friends and friend have the same identity?', friends === friend);
console.log('does profession and profestring have the same identity?', profession === profestring);
console.log('does job and job_string have the same identity?', job === job_string);
console.log('does surname and surname_string have the same identity?', surname === surname_string);

// non-identity operator '!=='
console.log('inequality operator')
console.log('does age and height do not have the same identity?', age != height);
console.log('does person and surname do not have the same identity?', person != surname);
console.log('does profession and surname do not have the same identity?', profession != surname);
console.log('does friends and surname do not have the same identity?', friends != surname);
console.log('does 0 and boolfalse do not have the same identity?', 0 != boolfalse);
console.log('does friends and boolfalse do not have the same identity?', friends != boolfalse);

