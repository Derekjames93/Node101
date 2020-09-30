// Create a program that prints a list of files in a given directory,
//   filtered by the extension of the files. The first argument is the  
//   directory name and the second argument is the extension filter. Print the  
//   list of files (one file per line) to the console. You must use  
//   asynchronous I/O.  
const fs = require('fs');


function filter(path, ext,callback){
    fs.readdir(path, function(err, data){
        if (err){
            
            return callback(err)
        }
        let fileEnd = '.' + ext
        let files = []
        for (let index = 0; index < data.length; index++) {
            const newVar = data[index];
            if (newVar.includes(fileEnd))
            files.push(newVar)
        }
        callback(null,files)
    })
}
        






//export
module.exports = filter