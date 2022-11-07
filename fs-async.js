const { readFile, writeFile } = require('fs');

console.log('starting task')
readFile('./old/result-sync.txt','utf8', (err, result) =>{
    if (err){
        console.log(err);
        return
    }
    const first = result;
    readFile('./old/result-sync.txt','utf-8',(err,result)=>{
        if (err){
            console.log(err)
            return
        }
    const second = result;
    writeFile('old/result-write.txt',`here is the resilt : ${first}, ${second}`,(err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('End of the task');
        })
    })
})
console.log('Starting next task');