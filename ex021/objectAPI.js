// assign an object to another

// create an object
const mobile1 = {
    Name: 'Tecno B2P',
    Model: 'POP5',
    Storage: '32GB',
    version: 'Normal'

};

const mobile2 = Object.create({});

Object.assign(mobile2, mobile1);

mobile2.version = 'Pro';
mobile2.Storage = '64GB';

console.log(mobile1);
console.log(mobile2);
