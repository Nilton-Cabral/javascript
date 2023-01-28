// inheritance2

//  defing objects and using inheritance

const multi_paradigm = {
    paradigm: 'mult_paradigm'
};

const functional_lang = {
    paradigm: 'functional'
}

// creating objects and giving an inheritance
const language_1 = Object.create(functional_lang);
language_1.Name = 'Haskell';
language_1.Year = '1990';

const language_2 = Object.create(multi_paradigm);
language_2.Name = 'JavaScript';
language_2.Year = '1995';

// show both objects
for (key in language_1){
    console.log(`${key}:${language_1[key]}`);
    console.log(`${language_1['Name']}_OwnProperty: ${key}-${language_1.hasOwnProperty(key)}`);
};

console.log(''.padStart(50,'*'))

for (key in language_2){
    console.log(`${key}:${language_2[key]}`);
    console.log(`${language_2['Name']}_OwnProperty: ${key}-${language_2.hasOwnProperty(key)}`);
};
