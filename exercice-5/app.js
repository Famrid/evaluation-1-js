const myArray = [1, 2, 3, 4, 5];
myArray.forEach((number) => {
    if(number > 2) {
        console.log(number);
    }
});

const myArrayWithObjects = [{id: 4, title: 'Jean'}, {id: 9, title: 'Marie'}, {id: 13, title: 'Joseph'}];
myArrayWithObjects.push({id: 15, title: 'Jacques'});
myArrayWithObjects.unshift({id: 27, title: 'Marc'});
myArrayWithObjects.forEach(element => {
    console.log(`${element.id}: ${element.title}`);
});

const subArray = myArrayWithObjects.slice((myArrayWithObjects.length -2));
console.log(subArray);
