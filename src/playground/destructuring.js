import { privateEncrypt } from "crypto";

// const person = {
//     name: 'Juhui',
//     age: 25,
//     location: {
//         city: 'Vancouver',
//         temp: 29
//     }
// };

// const {name = 'Anon', age} = person;

// console.log(`${person.name} is ${person.age}.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Colorless Tsukuru Tazaki and His Years of Pilgrimage',
//     author:'Haruki Murakami',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: pulisherName = 'Self-Published'} = book.publisher;

// console.log(pulisherName);

//
// Array Destrucutring
//


const address = ['3865 36th ave', 'Vancouver', 'BC', 'V6N2S5'];

const [, city, state] = address;

console.log(`You are in ${city} ${state}. `);

const item = ['Coffee (hot)', '$2', '$2.50', '$2.75'];

const [menu, , medium_price ] = item;
console.log(`A medium ${menu} costs ${medium_price}`)