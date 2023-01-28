const mobile1 = {
    Name: 'Tecno B2P',
    Model: 'POP5',
    Storage: '32GB',
    version: 'Normal'

};

const mobile2 = {
    Name: 'Tecno B2P',
    Model: 'POP5',
    Storage: '32GB',
    version: 'Normal'

};

// comparing one object with itself
console.log(Object.is(mobile1, mobile1));

// comparing mobile1 with mobile2
console.log(Object.is(mobile1, mobile2));