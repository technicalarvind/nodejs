// import fs module

const { readFileSync, writeFileSync } = require('fs');

//read files

console.log('starting task')

const first = readFileSync('./old/subfolder/test/sec.txt','utf8');

const second = readFileSync('./old/subfolder/test/test1/test.txt','utf8');

console.log(first, second);

// Copy contents of above both files in single file

writeFileSync('./old/result-sync.txt',`here is the resilt : ${first}, ${second}`)

// Appending new data into new line we use flag option

writeFileSync('./old/result-sync.txt',`here is the resilt : ${first}, ${second}`,{flag: 'a'});

console.log('Ending this task');
console.log('Starting next task');