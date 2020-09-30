const fs = require('fs');

// const path = require('path');



fs.readdir(process.argv[2], function(err, data){
    let fileEnd = '.' + process.argv[3]
    for (let index = 0; index < data.length; index++) {
        const newVar = data[index];
        if (newVar.includes(fileEnd))
        console.log(newVar)
    }
        
})

// fs.readdir.forEach(process.argv[2],err =>{
//     if (path.extname(process.argv[2]) == ".md")
//     console.log(process.argv[2]);
// })