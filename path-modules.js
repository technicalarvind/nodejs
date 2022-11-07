// Import path Module

const path = require('path');

console.log(path.sep);

// Find file path

const filePath = path.join('/old/', 'subfolder', 'test.txt');

console.log(filePath);

const base = path.basename(filePath);

console.log(base);

const absolute = path.resolve(__dirname,'old','test','test.txt');

console.log(absolute);