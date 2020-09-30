const fs = require('fs');



fs.readFile(process.argv[2], function (err, data) {
    testString = data.toString();
    lineSplits = testString.split('\n');
    console.log(lineSplits.length - 1)
})
