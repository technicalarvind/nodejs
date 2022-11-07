// GLOBALS - NO Window !!!
// __dirname        - path to current directory
// __filename       - filename
// require          - function to use modules (CommonJS)
// module           - info about current module (file)
// process          - info about env where the programme is being executed
// setInterval      - repeats the execution of the function continuously.
// setTimeout       - Executes a function, after waiting a specified number of milliseconds.

console.log(__dirname)
console.log(__filename)

setInterval(() => {
    console.log('Hello Arvind')
}, 1000 )