// console.log()
// console.warn()
// console.error()

// when we use === sign then it will check value as well as its typeof.

const cars = ["Honda", "Suzuki", "TaTa", "Renault", "LandRover", "Ferrari", "MGHector", "Toyota"];

// 1. use code snippets

for(let i = 0; i < cars.length; i++){

}

for(let i = 0; i < cars.length; i++){
    const car = cars[i];
    console.log(car);
}

// 2. use the accumulatir pattern - Letter counts in a word

const word = "sdvashdskjdfjiweuyrwhejcbdkcmsodkpweouyweytfchsdncbksSHBDSHDVSHCVHKAykwensdcvdsgvsdfhkdndmsbhfvsefvsdjdshcvhsdbvdh"

const wordCount = {};

for (let i = 0; i < word.length; i++){
    const letter = word[i];
    if(!wordCount[letter]){
        wordCount[letter] = 1;       
    } // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, only the first 10 values are automatically logged,

    else {
        wordCount[letter]++
    }
}

console.log(wordCount);

// 3. short-circuit - find a specific value, check if array contains a specific word

for(let i = 0; i < cars.length; i++){
    const car = cars[i];
    console.log(cars);
    if(car === "Toyota"){
        console.log("Found it !!!!");
        break;
    }
}

// 4. Use Array functions - map, filter etc.

const firstLetter = cars.map(car => car[0]);
console.log(firstLetter);

// const firstLetterArr = [];
// for( let i = 0; i < cars.length; i++){
//     const car = cars[i];
//     firstLetterArr.push(car[0]);
// }

