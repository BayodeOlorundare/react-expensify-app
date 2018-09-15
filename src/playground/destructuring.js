//
// Object destructuring
//

// const person = {
//     name: 'Bayo',
//     age: 29,
//     location: {
//         city: 'Toronto',
//         temp: 20
//     }
// };

//You can set up a default value if no value exist on object prop
// const { name: firstName = 'Anonymous', age } = person;
//const name = person.name;
//const age = person.age;

// console.log(`${firstName} is ${age}.`)

//You can change the name of the variable to something local

// const { city, temp: temperature } = person.location;
// console.log(`It's ${temperature} degrees in ${city}.`)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-published'} = book.publisher;
// console.log(publisherName);

//
// Array destructuring
//

const address = ['1299 Dundas Street West', 'Toronto', 'Ontario', 'M4V 1J0'];

const [ , city = 'No where', province,] = address;

console.log(`You are in ${city} ${province}.`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];

const [ coffee, , medium] = item;
console.log(`A medium ${coffee} costs ${medium}`)