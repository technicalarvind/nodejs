// Modules In Node

// require module is used to import data from another js files.

const names = require('./2-names');
const sayHi = require('./3-utils');

//console.log(names);

sayHi(names.yuvi);
sayHi(names.priya);

// CommonJS every file is module (by default)
// Modules - Encapsulated Code (Only share minimum)

require('./alternative-flavour');