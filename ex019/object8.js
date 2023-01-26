// comparing objects

let obj = {
    brand: 'GIGABYTE',
    model: 'Q2006',
    storage: '320GB',
    core: 'dual-core platform'
};

let obj1 = {
    brand: 'GIGABYTE',
    model: 'Q2006',
    storage: '320GB',
    core: 'dual-core platform'
};

let equal = true;

for (key in obj){
    if (obj[key] !== obj1[key]) equal = false;
};
for (key in obj1){
    if (obj[key] !== obj1[key]) equal = false;
};

console.log(equal)