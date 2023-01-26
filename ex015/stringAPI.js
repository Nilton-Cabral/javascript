//strings methods

let geniusofsec20 = 'Nikola Tesla';

// getting the length of a string
console.log(geniusofsec20.length)

// the index of the 'T'
console.log(geniusofsec20.indexOf('a'));

// there is two letters 'a', above i asked the index of the first occurrance, now i'm asking the last
console.log(geniusofsec20.lastIndexOf('a'));

// turning the letters to uppercase
console.log(geniusofsec20.toUpperCase());

// turning the letters to lowercase
console.log(geniusofsec20.toLowerCase());

// returns the character corresponding to the index
console.log(geniusofsec20.charAt(5));

// getting a letter in the string by the index and showing the correspondig code point
console.log(geniusofsec20.charCodeAt(5));

// getting a letter, giving a respective code point
console.log(String.fromCharCode(97));

// seeing if a word or letter is in a string
console.log(geniusofsec20.includes('Tesla'));

// the ... string startswith...?
console.log(geniusofsec20.startsWith('Albert'));

// the ... string endswith...?
console.log(geniusofsec20.endsWith('Tesla'));

// comparing strings
console.log('1'.localeCompare('2')); // if a < b return -1
console.log('1'.localeCompare('1')); // if a == b return 0
console.log('1'.localeCompare('0')); // if a > b return 1


// now lets see a little more
console.log('n'.localeCompare('N')); 
console.log('N'.localeCompare('n'));
console.log('n'.localeCompare('n'));

console.log(`${'-'.repeat(50)} \n${'NILTON'.localeCompare('nilton')} \n${'-'.repeat(50)}`);

// until now everything is ok but...
console.log('n' > 'N');
console.log('N' > 'n');

/*
when i compare using the '>' coparison operator 'n' is ever greater than 'N',
but whe i use 'localeCompare' the result is completly different, 
and i don't know why it happends.
*/