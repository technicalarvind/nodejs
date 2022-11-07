const characters = [
    {
        name:'Arvind Tiwari',
        height: '209',
        mass: '155',
        eye_colour: 'Brown',
        gender: 'male',
    },
    {
        name:'Dhiraj Tiwari',
        height: '156',
        mass: '99',
        eye_colour: 'Black',
        gender: 'male',
    },
    {
        name:'Yuvraj Tiwari',
        height: '50',
        mass: '27',
        eye_colour: 'Brown',
        gender: 'male',
    },
    {
        name:'Minal Tiwari',
        height: '170',
        mass: '200',
        eye_colour: 'Black',
        gender: 'Female',
    },
];

// *** map() ***

// 1. Get Array of all names
// 2. Get Array of all heights
// 3. Get Array of objects with just name and height properties
// 4. Get Array of all first names


// *** reduce() ***

// 1. Get total mass of all characters
// 2. Get total height of all characters
// 3. Get total number of characters by eye color
// 4. Get total number of characters in all the character names

// *** filter() ****
// This method create new array with only elements passed condition inside the provided function.

// 1. Get characters with mass greater than 100

// const greater100Characters = characters.filter((character) => {
//     return character.mass > 100;
// });

// console.log(greater100Characters);

// 2. Get characters with height less than 200

// const shorterCharacters = characters.filter(
//     (character) => character.height < 200 );

//     console.log(shorterCharacters);

// 3. Get All Male Characters

// const maleCharacters = characters.filter(
//     (character) => character.gender === 'male');

//     console.log(maleCharacters);

// 4. Get All Female characters

const femaleCharacters = characters.filter(
    (character) => character.gender === 'Female');

    console.log(femaleCharacters);

// *** sort() ***

// 1. Sort by names
// 2. Sort by mass

// *** ForEach() ***
// this method can help you to loop over array


// *** includes() ***
// This method check if array includes the item passed in the method

// ***  ***