//
// Object Destructuring
//

// const person = {
//     name: 'Antonis',
//     age: 37,
//     location: {
//         city: 'Larnaca',
//         temp: 16
//     }
// };

// const { name:firstName = 'Anonymous', age } = person;
// const { city, temp: temperature } = person.location;

// console.log(`${firstName} is ${age}.`);

// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName); 

//
// Array Destructuring
//

const address = ['6 Modestou Pandeli', 'Oroklini', 'Larnaca', '7040'];

const [ , city, village = 'New York' ] = address;

console.log(`You are in ${city} ${village}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ itemName, , mediumPrice ] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);