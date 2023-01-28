//  defing objects and using inheritance

const multi_paradigm = {
    paradigm: 'mult_paradigm'
};

const functional_lang = {
    paradigm: 'functional'
}

const language_1 = {
    Name: 'Haskell',
    year: '1990',
};

const language_2 = {
    Name: 'JavaScript',
    year: '1995',
};

// set prototypeof
Object.setPrototypeOf(language_1, functional_lang);
Object.setPrototypeOf(language_2, multi_paradigm);

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
