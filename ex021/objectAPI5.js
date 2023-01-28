// javascript defineproperty

// creating an object
const JavaScript = {};

// defining properties using defineproperty method
Object.defineProperty(JavaScript, 'Name',{
    value: 'JavaScript',
    //enumerable: true,
    //writable: true,
    //configurable: true
    }
);

// show the only key and value
console.log(JavaScript['Name']);

/* if the property configurable isn't set to true it 
is impossible to delete a key*/
delete JavaScript['Name'];

/* if the property writable isn't set to true 
it is impossible to change the value of a key*/
JavaScript['Name'] = 'EcmaScript';

/* if the property enumerable isn't set to true it 
is impossible to use some object methods that shows the 
keys,values of an object*/
console.log(Object.entries(JavaScript));

delete JavaScript['Name'];
console.log(JavaScript['Name']);
console.log(Object.entries(JavaScript));
