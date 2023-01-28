// the object methods

// creating a simple object
const Python = {
    Name: 'Python',
    origin_name: 'Monty Python',
    Year: '1995'
};

console.log(Python);

// prevents object from having new properties
Object.preventExtensions(Python);

/* prevents object properties from being changed, deleted
or having new properties but allows to change existing properties
*/
Object.seal();

// prevents object properties from being changed, deleted or having new properties
Object.freeze();

// ask that this properties was successfully aplied
console.log(Object.isExtensible());
console.log(Object.isSealed());
console.log(Object.isFrozen());
