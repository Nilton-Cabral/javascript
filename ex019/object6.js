// about object in javascript

// creating new object
const khuamba = {
    'name': 'Arménio Romeu Cabral Malandela',
    'born': 'June 22,1970',
    'die': 'August 15,2021',
    'profession': 'teacher',
    'Nationality': 'Mozambican'
};

const khuamba2 = {};

for (key in khuamba){
    console.log(key);
    khuamba2[key] = khuamba[key];
};

console.log(khuamba2)
