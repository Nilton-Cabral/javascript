// how to delete an object_item

// creating an object named dog
let dog = {
    dogname: 'coco',
    dogage: '2',
    dogowner: '******'
};

// show dog object
console.log(dog);

// delete the the key dogowner
delete dog['dogowner'];

// show dog object
console.log(dog);
